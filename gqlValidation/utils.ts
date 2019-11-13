import gql from 'graphql-tag';
import fs from 'fs';
import path from 'path';
import findFiles from 'file-regex/dist';
import memoize from 'lodash/memoize';

export const GRAPHQL_FILE_REGEX = /\.gql$/;
export const ROOT_DIR = '../components';
export const ABSOLUTE_ROOT_DIR = path.resolve(__dirname, ROOT_DIR);

export const getGqlFiles = memoize(
  async () => await findFiles(ABSOLUTE_ROOT_DIR, GRAPHQL_FILE_REGEX, Infinity),
);

export const compileGqlAst = memoize((queryFilePath: string) => {
  const gqlStr = String(fs.readFileSync(queryFilePath));
  const gqlImportResults = gqlStr
    .split('\n')
    .filter(str => {
      // example: #import "./CLINICAL_SUBMISSION_FRAGMENT.gql"
      return str.includes('#') && str.includes('import');
    })
    .map(importComment => {
      const relativePath = importComment.includes('"')
        ? importComment.split('"')[1]
        : importComment.split("'")[1];
      const currentPathSegments = queryFilePath.split('/');
      const currentPath = currentPathSegments.slice(0, currentPathSegments.length - 1).join('/');
      const absolutePath = path.resolve(currentPath, relativePath);
      return compileGqlAst(absolutePath).loc.source.body;
    })
    .join('\n');
  try {
    return gql`
      ${gqlImportResults}
      ${gqlStr}
    `;
  } catch (err) {
    throw new Error(err);
  }
});

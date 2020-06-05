import React from 'react';
import useUrlParamState from 'global/hooks/useUrlParamState';
import sqonBuilder from 'sqon-builder';
import stringify from 'fast-json-stable-stringify';
import { addInFilters } from '../utils';
import { FileRepoFiltersType, FieldOperator } from '../utils/types';

type FiltersContextType = {
  filters: FileRepoFiltersType;
  clearFilters: () => void;
  setFilterFromFieldAndValue: ({ field, value }: { field: string; value: string }) => void;
  replaceAllFilters: (filters: FileRepoFiltersType) => void;
};

export const defaultFilters: FileRepoFiltersType = {
  op: 'and',
  content: [],
};

const FiltersContext = React.createContext<FiltersContextType>({
  filters: defaultFilters,
  clearFilters: () => {},
  setFilterFromFieldAndValue: () => {},
  replaceAllFilters: () => {},
});

const useFilterState = () => {
  const [currentFilters, setCurrentFilters] = useUrlParamState('filters', defaultFilters, {
    serialize: v => stringify(v),
    deSerialize: v => JSON.parse(v),
  });

  return { currentFilters, setCurrentFilters };
};

export function FiltersProvider({ children }) {
  const { currentFilters, setCurrentFilters } = useFilterState();

  const clearFilters = () => {
    setCurrentFilters(defaultFilters);
  };

  const replaceAllFilters = filters => setCurrentFilters(filters);
  const setFilterFromFieldAndValue = ({ field, value }) => {
    const operator = sqonBuilder.has(field, value).build();
    const newFilters = addInFilters(operator, currentFilters);
    setCurrentFilters(newFilters);
  };

  const data = {
    filters: currentFilters,
    setFilterFromFieldAndValue,
    clearFilters,
    replaceAllFilters,
  };
  return <FiltersContext.Provider value={data}>{children}</FiltersContext.Provider>;
}

export default function useFiltersContext() {
  return React.useContext(FiltersContext);
}

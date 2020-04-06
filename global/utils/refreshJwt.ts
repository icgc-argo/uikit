import urlJoin from 'url-join';
import { getConfig } from 'global/config';

const { EGO_API_ROOT, EGO_CLIENT_ID } = getConfig();

// pass client_id to get ego api to set correct response headers
const refreshUrl = urlJoin(EGO_API_ROOT, `/api/oauth/refresh?client_id=${EGO_CLIENT_ID}`);

export default egoJwt =>
  fetch(refreshUrl, {
    credentials: 'include',
    headers: {
      accept: '*/*',
      authorization: egoJwt || '',
    },
    method: 'POST',
  }).then(res => res.text());

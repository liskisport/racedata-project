import { camelizedCase, snakedCase } from '../helpers/keyFormat';

interface CommonApiParams {
  url: string;
}

type RequestBody = Record<string, string | number | boolean>;

interface GetApiParams extends CommonApiParams {
  query?: Record<string, string | number | boolean>;
}

interface PostApiParams extends CommonApiParams {
  body: RequestBody;
}

function getApi({
  url,
  query
}: GetApiParams): Promise<unknown> {
  const searchParams = new URLSearchParams('');
  const snakedQuery = query ? snakedCase(query) : Object(query);
  Object.entries(snakedQuery).forEach(([key,
    value]) => {
    searchParams.set(key, String(value));
  });
  const urlWithParams = searchParams ? `${url}?${searchParams}`: url;
  return fetch(urlWithParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ data }) => {
      return data ? camelizedCase(data) : data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

function postApi({
  url,
  body
}: PostApiParams): Promise<unknown> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ data }) => {
      return data ? camelizedCase(data) : data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export const api = {
  get: getApi,
  post: postApi,
};

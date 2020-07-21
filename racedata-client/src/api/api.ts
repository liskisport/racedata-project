interface CommonApiParams {
  url: string;
}

type RequestBody = Record<string, string | number | boolean>;

interface PostApiParams extends CommonApiParams {
  body: RequestBody;
}

function getApi<T> ({
  url,
}: CommonApiParams): Promise<T> {
  return fetch(url, {
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
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

function postApi<T> ({
  url,
  body,
}: PostApiParams): Promise<T> {
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
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export const api = {
  get: getApi,
  post: postApi,
};

import * as Generated from './generated-api/apis';
import { Configuration } from './generated-api/runtime';

export const Api = {
  book: new Generated.BookApi(),
};

export function setAuthorizationToken(token: string | undefined) {
  const configuration = new Configuration({
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined,
  });

  Api.book = new Generated.BookApi(configuration);

  return Api;
}

export * from './generated-api/models';

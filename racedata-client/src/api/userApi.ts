import { api } from './api';
import { URLS_API } from '../constants/urlsApi';
import { User as UserResponse } from '../@types/racedata/user';

type QueryParamsUser = {
  login: string;
  password: string;
}

const getUserData = ({ login, password }: QueryParamsUser): Promise<UserResponse> => {
  return api.get({
    url: 'http://localhost:3000' + URLS_API.USER,
    query: {
      login,
      password,
    },
  });
};

export { getUserData, getUserData as default };

import { api } from './api';
import { URLS_API } from '../constants/urlsApi';

type MainResponse = {
  page: string;
}

const getMainData = (): Promise<MainResponse> => api.get({ url: URLS_API.MAIN });

export { getMainData };

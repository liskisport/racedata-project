import { api } from './api';
import { urlsApi } from '../constants/urlsApi';

type MainResponse = {
  page: string;
}

const getMainData = (): Promise<MainResponse> => api.get({ url: urlsApi.mainUrl });

export { getMainData };

import axios from 'axios';
import { baseApiUrl } from '../constans/constans';

export type SortDirection = 'asc' | 'desc';

export type AbstractQueryParams = {
  sortBy?: string;
  sortDirection?: SortDirection;
};

const apiClient = axios.create({
  baseURL: baseApiUrl,
});

// set header
/*
apiClient.interceptors.request.use((request) => {
  localStorage.setItem('id_token', 'sdasd');

  const token = localStorage.getItem('id_token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});
*/

export default apiClient;

import axios from 'axios';

export type SortDirection = 'asc' | 'desc';

export type AbstractQueryParams = {
  sortBy?: string;
  sortDirection?: SortDirection;
};

const baseApiUrl = process.env.REACT_APP_BASE_URL;

console.log(baseApiUrl);

const apiClient = axios.create({
  baseURL: `${baseApiUrl}/api`,
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

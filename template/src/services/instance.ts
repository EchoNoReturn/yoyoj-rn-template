import axios from 'axios';

import Config from '@/config'

const http = axios.create({
  baseURL: Config.apiBaseUrl,
  timeout: 10000,
  allowAbsoluteUrls: true,
});

http.interceptors.request.use(config => {
  // You can add headers or other configurations here
  return config;
}, error => {
  return Promise.reject(error);
});

http.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export { http };
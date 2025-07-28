import axios from 'axios';

export const createServerApi = (token: string) => {
  const instance = axios.create({
    baseURL: 'http://localhost:5070/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use((config) => {
    if (token && token.trim() !== '') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

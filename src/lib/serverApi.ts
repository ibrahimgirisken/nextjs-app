import axios from 'axios';

export const createServerApi = (token: string) => {
  const instance = axios.create({
    baseURL: 'http://localhost:5070/api',
    headers: {
      Authorization: `Bearer${token}`,
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

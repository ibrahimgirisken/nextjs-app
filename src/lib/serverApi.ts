import axios from 'axios';

export const createServerApi = () => {
  return axios.create({
    baseURL: 'http://localhost:5070/api',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

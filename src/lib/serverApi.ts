import axios from 'axios';

export const createServerApi = () => {
  return axios.create({
    baseURL: '/api/proxy', // tüm çağrılar önce Next.js’e gelir
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  });
};

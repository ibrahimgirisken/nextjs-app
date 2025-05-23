import api from '@/lib/axiosClient';
import { Brand } from '../types/brand';

export const getBrands = (): Promise<Brand[]> => api.get('/brands/all').then((res) => res.data);
export const getBrandById = (id: string) =>
  api.get(`/brands/by-id?id=${id}`).then((res) => res.data);
export const createBrand = (data: Omit<Brand, 'id'>) =>
  api.post('/brands/add', data).then((res) => res.data);
export const updateBrand = (brand: Brand) =>
  api.put(`/brands/update`, brand).then((res) => res.data);
export const deleteBrand = (id: string) => api.delete(`/brands/${id}`).then((res) => res.data);

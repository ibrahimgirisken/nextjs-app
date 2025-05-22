import api from '@/lib/axiosClient';
import { Category } from '../types/category';

export const getCategories = (): Promise<Category[]> =>
  api.get('/categories/all?IncludeAllLanguages=true').then((res) => res.data);
export const getCategoryById = (id: string) =>
  api.get(`/categories/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);
export const createCategory = (category: Category) =>
  api.post('/categories', category).then((res) => res.data);
export const updateCategory = (category: Category) =>
  api.put(`/categories/update`, category).then((res) => res.data);
export const deleteCategory = (id: string) =>
  api.delete(`/categories/${id}`).then((res) => res.data);

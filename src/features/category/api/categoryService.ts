import api from '@/lib/axiosClient';
import { Category } from '@/features/category/types/category';

export const getCategories = (): Promise<Category[]> =>
  api.get('/categories/all?IncludeAllLanguages=true').then((res) => res.data);
export const getCategoryById = (id: string) =>
  api.get(`/categories/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);
export const createCategory = (data: Omit<Category, 'id'>) =>
  api.post('/categories/add', data).then((res) => res.data);
export const updateCategory = (category: Category) =>
  api.put(`/categories/update`, category).then((res) => res.data);
export const deleteCategory = (id: string) =>
  api.delete(`/categories/${id}`).then((res) => res.data);

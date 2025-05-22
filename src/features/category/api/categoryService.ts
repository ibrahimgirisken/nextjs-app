import api from '@/lib/axiosClient';
import { Category } from '../types/category';

export const getCategories = (): Promise<Category[]> =>
  api.get('/categories/all?IncludeAllLanguages=true').then((res) => res.data);
export const getCategoryById = (id: string) =>
  api.get(`/categories/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);

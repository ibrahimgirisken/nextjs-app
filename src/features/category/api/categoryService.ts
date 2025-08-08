import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Category } from '../types/category';
const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';

const apiInstance = createServerApi(token); // token’lı axios
export const categoryService = createApiService<Category>(apiInstance, 'categories');

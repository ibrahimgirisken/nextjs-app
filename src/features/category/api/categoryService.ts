import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Category } from '../types/category';

const apiInstance = createServerApi(); // token’lı axios
export const categoryService = createApiService<Category>(apiInstance, 'categories');

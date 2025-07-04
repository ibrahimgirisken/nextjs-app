import { createApiService } from '@/lib/createApiService';
import { Category } from '../types/category';

export const categoryService = createApiService<Category>('categories');

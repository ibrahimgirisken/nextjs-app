import { createQueryHooks } from '@/lib/createQueryHooks';
import { categoryService } from '../api/categoryService';

export const {
  useAll: useCategories,
  useById: useCategoryById,
  useByLang: useCategoryByLang,
  useCreate: useCreateCategory,
  useUpdate: useUpdateCategory,
  useByUrlAndLang: useCategoryByUrlAndLang,
} = createQueryHooks('categories', categoryService);

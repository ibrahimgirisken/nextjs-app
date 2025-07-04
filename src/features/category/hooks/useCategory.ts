import { createQueryHooks } from '@/lib/createQueryHooks';
import { categoryService } from '../api/categoryService';

export const {
  useAll: useCategories,
  useByLang: useCategoryByLang,
  useCreate: useCreateCategory,
  useUpdate: useUpdateCategory,
} = createQueryHooks('categories', categoryService);

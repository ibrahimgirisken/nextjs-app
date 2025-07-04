import { createQueryHooks } from '@/lib/createQueryHooks';
import { brandService } from '../api/brandService';

export const {
  useAll: useBrands,
  useByLang: useBrandsByLang,
  useCreate: useCreateBrand,
  useUpdate: useUpdateBrand,
} = createQueryHooks('brands', brandService);

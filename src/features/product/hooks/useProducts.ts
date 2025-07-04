import { createQueryHooks } from '@/lib/createQueryHooks';
import { productService } from '../api/productService';
export const {
  useAll: useProducts,
  useByLang: useProductsByLang,
  useCreate: useCrateProduct,
  useUpdate: useUpdateProduct,
} = createQueryHooks('products', productService);

import { createQueryHooks } from '@/lib/createQueryHooks';
import { getProductService } from '../api/productService';
import { useMemo } from 'react';

// Token'ı localStorage'dan dinamik al
export function useProductHooks() {
  const productService = useMemo(() => getProductService(), []);
  return useMemo(() => createQueryHooks('products', productService), [productService]);
}

// Kullanım örneği:
const {
  useAll: useProducts,
  useById: useProductById,
  useByLang: useProductsByLang,
  useCreate: useCreateProduct,
  useUpdate: useUpdateProduct,
} = useProductHooks();

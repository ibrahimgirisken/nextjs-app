import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Product } from '../types/product';

export function getProductService() {
  const apiInstance = createServerApi();
  return createApiService<Product>(apiInstance, 'products');
}

import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Product } from '../types/product';

const apiInstance = createServerApi();
export const productService = createApiService<Product>(apiInstance, 'products');

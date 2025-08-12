import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Product } from '../types/product';

const apiInstance = createServerApi(); // token’lı axios
export const productService = createApiService<Product>(apiInstance, 'products');

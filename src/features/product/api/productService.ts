import { createApiService } from '@/lib/createApiService';
import { Product } from '../types/product';
import { createServerApi } from '@/lib/serverApi';
const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';

const apiInstance = createServerApi(token); // token’lı axios
export const productService = createApiService<Product>(apiInstance, 'products');

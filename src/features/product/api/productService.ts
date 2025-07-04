import { createApiService } from '@/lib/createApiService';
import { Product } from '../types/product';

export const productService = createApiService<Product>('products');

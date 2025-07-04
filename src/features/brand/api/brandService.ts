import { createApiService } from '@/lib/createApiService';
import { Brand } from '../types/brand';

export const brandService = createApiService<Brand>('brands');

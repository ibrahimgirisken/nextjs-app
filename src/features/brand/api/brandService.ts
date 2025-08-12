import { createApiService } from '@/lib/createApiService';
import { Brand } from '../types/brand';
import { createServerApi } from '@/lib/serverApi';

const apiInstance = createServerApi(); // token’lı axios
export const brandService = createApiService<Brand>(apiInstance, 'brands');

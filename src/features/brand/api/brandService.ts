import { createApiService } from '@/lib/createApiService';
import { Brand } from '../types/brand';
import { createServerApi } from '@/lib/serverApi';
const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';

const apiInstance = createServerApi(token); // token’lı axios
export const brandService = createApiService<Brand>(apiInstance, 'brands');

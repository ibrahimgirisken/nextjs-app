import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Lang } from '../types/lang';
const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';

const apiInstance = createServerApi(token); // token’lı axios
export const langService = createApiService<Lang>(apiInstance, 'langs');

import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { TranslateKey } from '../types/translate';
const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';

const apiInstance = createServerApi(token); // token’lı axios
export const translateService = createApiService<TranslateKey>(apiInstance, 'translations');

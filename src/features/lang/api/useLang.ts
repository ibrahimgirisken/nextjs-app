import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Lang } from '../types/lang';

const apiInstance = createServerApi(); // token’lı axios
export const langService = createApiService<Lang>(apiInstance, 'langs');

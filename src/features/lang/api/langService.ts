import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Lang } from '../types/lang';

const apiInstance = createServerApi();
export const langService = createApiService<Lang>(apiInstance, 'langs');

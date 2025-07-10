import { createApiService } from '@/lib/createApiService';
import { Lang } from '../types/lang';

export const langService = createApiService<Lang>('langs');

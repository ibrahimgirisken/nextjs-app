import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { TranslateKey } from '../types/translate';

const apiInstance = createServerApi(); 
export const translateService = createApiService<TranslateKey>(apiInstance, 'translations');

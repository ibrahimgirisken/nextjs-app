import { createApiService } from '@/lib/createApiService';
import { TranslateKey } from '../types/translate';

export const translateService = createApiService<TranslateKey>('translations');

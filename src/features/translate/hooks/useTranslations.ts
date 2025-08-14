import { createQueryHooks } from '@/lib/createQueryHooks';
import { translateService } from '../api/translateService';

export const {
  useAll: useTranslations,
  useCreate: useCreateTranslation,
  useUpdate: useUpdateTranslation,
  useById: useTranslationById,
} = createQueryHooks('translations', translateService);

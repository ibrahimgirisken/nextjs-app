import { createQueryHooks } from '@/lib/createQueryHooks';
import { translateService } from '../api/translateService';

export const {
  useAll: useTranslations,
  useCreate: useCreateTranslation,
  useUpdate: useUpdateTranslation,
} = createQueryHooks('translations', translateService);

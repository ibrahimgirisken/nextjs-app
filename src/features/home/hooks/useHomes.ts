import { createQueryHooks } from '@/lib/createQueryHooks';
import { homeService } from '../api/useHome';

export const {
  useAll: useHomes,
  useByLang: useHomesByLang,
  useCreate: useCreateHome,
  useUpdate: useUpdateHome,
} = createQueryHooks('homes', homeService);

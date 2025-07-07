import { createQueryHooks } from '@/lib/createQueryHooks';
import { pageService } from '../api/pageService';

export const {
  useAll: usePages,
  useByLang: usePagesByLang,
  useCreate: useCreatePage,
  useUpdate: useUpdatePage,
} = createQueryHooks('pages', pageService);

import { createQueryHooks } from '@/lib/createQueryHooks';
import { pageService } from '../api/pageService';

export const {
  useAll: usePages,
  useById: usePageById,
  useByLang: usePagesByLang,
  useCreate: useCreatePage,
  useUpdate: useUpdatePage,
  useByUrlAndLang: usePagesByUrlAndLang,
} = createQueryHooks('pages', pageService);

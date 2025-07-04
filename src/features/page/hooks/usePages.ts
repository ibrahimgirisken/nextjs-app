import { createQueryHooks } from '@/lib/createQueryHooks';
import { pageService } from '../api/pageService';

export const {
  useAll: usePages,
  useByLang: usePageByLang,
  useUpdate: useUpdatePage,
} = createQueryHooks('pages', pageService);

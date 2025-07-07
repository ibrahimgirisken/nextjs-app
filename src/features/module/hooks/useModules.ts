import { createQueryHooks } from '@/lib/createQueryHooks';
import { moduleService } from '../api/moduleService';

export const {
  useAll: useModule,
  useByLang: useModulesByLang,
  useCreate: useCreateModule,
  useUpdate: useUpdateModule,
} = createQueryHooks('modules', moduleService);

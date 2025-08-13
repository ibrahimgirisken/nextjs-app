import { createQueryHooks } from '@/lib/createQueryHooks';
import { moduleService } from '../api/moduleService';

export const {
  useAll: useModules,
  useByLang: useModulesByLang,
  useCreate: useCreateModule,
  useUpdate: useUpdateModule,
  useById: useModulesById,
} = createQueryHooks('modules', moduleService);

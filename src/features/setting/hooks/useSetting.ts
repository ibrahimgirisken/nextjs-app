import { createQueryHooks } from '@/lib/createQueryHooks';
import { settingService } from '../api/settingService';

export const {
  useAll: useSettings,
  useByLang: useSettingByLang,
  useUpdate: useUpdateSetting,
} = createQueryHooks('setting', settingService);

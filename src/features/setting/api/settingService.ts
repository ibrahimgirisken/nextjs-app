import api from '@/lib/axiosClient';
import { Setting } from '../types/setting';

export const getSettingById = (id: string): Promise<Setting> =>
  api.get(`/settings/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);

export const updateSetting = (setting: Setting): Promise<Setting> =>
  api.put(`/settings/update`, setting).then((res) => res.data);

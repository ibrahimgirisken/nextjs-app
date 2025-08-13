import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Setting } from '../types/setting';

const apiInstance = createServerApi();
export const settingService = createApiService<Setting>(apiInstance, 'Settings');

import { createApiService } from '@/lib/createApiService';
import { Setting } from '../types/setting';

export const settingService = createApiService<Setting>('settings');

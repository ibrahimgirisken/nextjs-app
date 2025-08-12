import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Banner } from '../types/banner';

const apiInstance = createServerApi(); // token’lı axios
export const bannerService = createApiService<Banner>(apiInstance, 'banners');

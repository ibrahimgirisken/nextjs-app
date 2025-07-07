import { createApiService } from '@/lib/createApiService';
import { Banner } from '../types/banner';

export const bannerService = createApiService<Banner>('banners');

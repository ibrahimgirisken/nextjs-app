import { createQueryHooks } from '@/lib/createQueryHooks';
import { bannerService } from '../api/bannerService';

export const {
  useAll: useBanner,
  useByLang: useBannerByLang,
  useCreate: useCreateBanner,
  useUpdate: useUpdateBanner,
} = createQueryHooks('banners', bannerService);

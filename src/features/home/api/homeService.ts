import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Home } from '../types/home';

const apiInstance = createServerApi(); // token’lı axios
export const homeService = createApiService<Home>(apiInstance, 'homes');

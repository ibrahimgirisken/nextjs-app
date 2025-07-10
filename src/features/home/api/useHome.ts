import { createApiService } from '@/lib/createApiService';
import { Home } from '../types/home';

export const homeService = createApiService<Home>('homes');

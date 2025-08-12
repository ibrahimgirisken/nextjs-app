import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Page } from '../types/page';

const apiInstance = createServerApi(); // token’lı axios
export const pageService = createApiService<Page>(apiInstance, 'pages');

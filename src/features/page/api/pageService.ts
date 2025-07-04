import { createApiService } from '@/lib/createApiService';
import { Page } from '../types/page';

export const pageService = createApiService<Page>('pages');

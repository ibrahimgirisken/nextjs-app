import { createApiService } from '@/lib/createApiService';
import Module from 'module';

export const moduleService = createApiService<Module>('modules');

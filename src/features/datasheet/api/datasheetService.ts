import { createApiService } from '@/lib/createApiService';
import { Datasheet } from '../types/datasheet';

export const datasheetService = createApiService<Datasheet>('datasheets');

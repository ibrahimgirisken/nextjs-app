import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Datasheet } from '../types/datasheet';

const apiInstance = createServerApi(); // token’lı axios
export const datasheetService = createApiService<Datasheet>(apiInstance, 'datasheets');

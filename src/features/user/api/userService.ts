import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { User } from '../types/user';

const apiInstance = createServerApi();
export const userService = createApiService<User>(apiInstance, 'Users');

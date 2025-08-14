import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { UserResponse } from '../types/user';

const apiInstance = createServerApi();
export const userService = createApiService<UserResponse>(apiInstance, 'Users');

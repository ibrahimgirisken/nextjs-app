import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { UserResponse } from '../types/userResponse';

const apiInstance = createServerApi();
export const userService = createApiService<UserResponse>(apiInstance, 'Users');

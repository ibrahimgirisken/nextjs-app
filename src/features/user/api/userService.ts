import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { User } from '../types/user';

const apiInstance = createServerApi(); // token’lı axios
export const userService = createApiService<User>(apiInstance, 'users');

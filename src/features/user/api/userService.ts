import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { User } from '../types/user';
const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';

const apiInstance = createServerApi(token); // token’lı axios
export const userService = createApiService<User>(apiInstance, 'users');

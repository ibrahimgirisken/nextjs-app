import { createApiService } from '@/lib/createApiService';
import { User } from '../types/user';

export const userService = createApiService<User>('users');

import { userService } from '../api/userService';
import { createQueryHooks } from '@/lib/createQueryHooks';

export const { useAll: useUsers, useCreate: useCreateUser } = createQueryHooks('user', userService);

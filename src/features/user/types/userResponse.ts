import { User } from './user';

export interface UserResponse {
  users: User[];
  totatlUserCount: number;
}

export interface User {
  id: string;
  nameSurname: string;
  userName: string;
  email: string;
}

export interface UserResponse {
  users: User[];
  totatlUserCount: number;
}

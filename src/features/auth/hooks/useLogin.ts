import { useMutation } from '@tanstack/react-query';
import { login } from '../api/authService';
import { LoginDto, AuthResponse } from '../types/auth';

export const useLogin = () => {
  return useMutation<AuthResponse>(login);
};

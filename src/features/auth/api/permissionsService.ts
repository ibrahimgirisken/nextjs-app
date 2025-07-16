import api from '@/lib/axiosClient';
import { ApplicationService } from '../types/ApplicationService';

export async function fetchAllPermissions(): Promise<ApplicationService[]> {
  const response = await api.get<ApplicationService[]>('/ApplicationServices');
  return response.data;
}

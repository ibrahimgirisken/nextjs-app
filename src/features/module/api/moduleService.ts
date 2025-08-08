import { createApiService } from '@/lib/createApiService';
import { createServerApi } from '@/lib/serverApi';
import { Module } from '../types/module';
const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';

const apiInstance = createServerApi(token); // token’lı axios
export const moduleService = createApiService<Module>(apiInstance, 'modules');

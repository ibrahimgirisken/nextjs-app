import { createApiService } from '@/lib/createApiService';
import { Module } from '../types/module';

export const moduleService = createApiService<Module>('modules');

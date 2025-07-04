import api from '@/lib/axiosClient';
import { Page } from '../types/page';

export const getPages = (): Promise<Page[]> =>
  api.get('/Pages/all?IncludeAllLanguages=true').then((res) => res.data);
export const getPagesByLang = (lang: string): Promise<Page[]> =>
  api.get(`/Pages/all?Language=${lang}`).then((res) => res.data);
export const getPageById = (id: string): Promise<Page> =>
  api.get(`/Pages/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);
export const getPageByUrlAndLang = (url: string, lang: string): Promise<Page> =>
  api.get(`/Pages/by-url=${url}&lang=${lang}`).then((res) => res.data);
export const createPage = (data: Omit<Page, 'id'>) =>
  api.post('/Pages/add', data).then((res) => res.data);
export const updatePage = (page: Page): Promise<Page> =>
  api.put('/Pages/update', page).then((res) => res.data);
export const deletePage = (id: string) => api.delete(`/Pages/${id}`).then((res) => res.data);

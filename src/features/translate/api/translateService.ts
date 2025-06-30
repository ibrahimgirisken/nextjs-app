import api from '@/lib/axiosClient';
import { TranslateKey } from '../types/translate';

export const getTranslations = (): Promise<TranslateKey[]> =>
  api.get('translations/all?IncludeAllLanguage=true').then((res) => res.data);
export const getTranslationById = (id: string) =>
  api.get(`/translations/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);
export const createTranslation = (data: Omit<TranslateKey, 'id'>) =>
  api.post('/translations/add', data).then((res) => res.data);
export const updateTranslation = (translationKey: TranslateKey) =>
  api.put(`/translations/update`, translationKey).then((res) => res.data);
export const deleteTranslation = (id: string) =>
  api.delete(`/translations/${id}}`).then((res) => res.data);

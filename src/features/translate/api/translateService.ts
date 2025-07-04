import api from '@/lib/axiosClient';
import { TranslateKey } from '@/features/translate/types/translate';

export const getTranslations = (): Promise<TranslateKey[]> =>
  api.get('Translations/all?IncludeAllLanguage=true').then((res) => res.data);
export const getTranslationsByLang = (lang: string): Promise<TranslateKey[]> =>
  api.get(`Translations/all?Language=${lang}&IncludeAllLanguages=true`);
export const getTranslationById = (id: string) =>
  api.get(`/Translations/by-id?id=${id}&IncludeAllLanguages=true`).then((res) => res.data);
export const createTranslation = (data: Omit<TranslateKey, 'id'>) =>
  api.post('/Translations/add', data).then((res) => res.data);
export const updateTranslation = (translationKey: TranslateKey) =>
  api.put(`/Translations/update`, translationKey).then((res) => res.data);
export const deleteTranslation = (id: string) =>
  api.delete(`/Translations/${id}}`).then((res) => res.data);

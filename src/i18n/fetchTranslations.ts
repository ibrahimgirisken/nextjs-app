import { useTranslationsByLang } from '@/features/translate/hooks/useTranslations';
import React from 'react';

export default async function fetchTranslations(locale: string) {
  return await useTranslationsByLang(locale);
}

import { useQuery } from '@tanstack/react-query';
import * as translateService from '@/features/translate/api/translateService';
import { TranslateKey } from './../types/translate';

export function useTranslations() {
  return useQuery<TranslateKey[]>({
    queryKey: ['translations'],
    queryFn: () => translateService.getTranslations(),
  });
}

export function useTranslationsByLang(locale: string) {
  return useQuery<TranslateKey[]>({
    queryKey: ['translations', locale],
    queryFn: () => translateService.getTranslationsByLang(locale),
  });
}

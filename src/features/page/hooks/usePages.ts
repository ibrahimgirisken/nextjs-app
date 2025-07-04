import { useQuery, QueryClient, useQueryClient, useMutation } from '@tanstack/react-query';
import * as pageService from '@/features/page/api/pageService';
import queryClient from '@/lib/queryClient';
import { Page } from '../types/page';

export function usePages() {
  return useQuery<Page[]>({
    queryKey: ['pages'],
    queryFn: () => pageService.getPages(),
  });
}

export function usePagesByLang(locale: string) {
  return useQuery<Page[]>({
    queryKey: ['pages', locale],
    queryFn: () => pageService.getPagesByLang(locale),
  });
}

export function getPageByUrlAndLang(slug: string, locale: string) {
  return useQuery<Page>({
    queryKey: ['pages', slug, locale],
    queryFn: () => pageService.getPageByUrlAndLang(slug, locale),
  });
}

export function useCreatePage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: pageService.createPage,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['pages'] }),
  });
}

export function useUpdatePage() {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: Page }) => pageService.updatePage(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['pages'] }),
  });
}

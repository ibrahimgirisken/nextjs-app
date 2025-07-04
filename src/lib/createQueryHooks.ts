import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createApiService } from './createApiService';

export function createQueryHooks<T extends { id: string }>(
  key: string,
  service: ReturnType<typeof createApiService<T>>
) {
  return {
    useAll: () =>
      useQuery<T[]>({
        queryKey: [key],
        queryFn: () => service.getAll(),
      }),

    useByLang: (lang: string) =>
      useQuery<T[]>({
        queryKey: [key, lang],
        queryFn: () => service.getAllByLang(lang),
      }),

    useByUrlAndLang: (slug: string, lang: string) =>
      useQuery<T>({
        queryKey: [key, lang],
        queryFn: () => service.getByUrlAndLang(slug, lang),
      }),

    useCreate: () => {
      const queryClient = useQueryClient();
      return useMutation({
        mutationFn: service.create,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [key] }),
      });
    },

    useUpdate: () => {
      const queryClient = useQueryClient();
      return useMutation({
        mutationFn: ({ data }: { data: T }) => service.update(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [key] }),
      });
    },
  };
}

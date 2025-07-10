import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Setting } from '../types/setting';
import { settingService } from '../api/settingService';

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: Setting }) => settingService.update(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['settings'] }),
  });
}

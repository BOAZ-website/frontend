import { useQuery } from '@tanstack/react-query';

import { getUserMe } from '@/shared/api/user';

export const useUserMe = (enabled: boolean) =>
  useQuery({
    queryKey: ['user', 'me'] as const,
    queryFn: getUserMe,
    enabled,
  });

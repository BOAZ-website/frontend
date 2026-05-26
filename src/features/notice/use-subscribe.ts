import { useMutation } from '@tanstack/react-query';

import { postSubscription } from '@/shared/api/recruitment';

export const useSubscribe = () =>
  useMutation({
    mutationFn: postSubscription,
  });

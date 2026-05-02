import { useQuery } from '@tanstack/react-query';

import { getDeadline } from '@/shared/api/recruitment';

export const useRecruitmentDeadline = () =>
  useQuery({
    queryKey: ['recruitment', 'deadline'],
    queryFn: getDeadline,
  });

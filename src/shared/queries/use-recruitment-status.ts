import { useQuery } from '@tanstack/react-query';

import { getRecruitmentStatus } from '@/widgets/recruiting/api/recruitment';

export const useRecruitmentStatus = () =>
  useQuery({
    queryKey: ['recruitment', 'status'] as const,
    queryFn: getRecruitmentStatus,
  });

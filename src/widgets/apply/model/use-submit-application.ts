import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { submitApplication } from '@/shared/api/recruitment';

export const useSubmitApplication = (recruitmentId: number) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: Parameters<typeof submitApplication>[1]) =>
      submitApplication(recruitmentId, data),
    onSuccess: () => {
      // TODO: 모달로 변경
      alert('지원서 제출이 성공적으로 완료되었습니다.');
      navigate('/');
    },
    onError: () => {
      alert('지원서 제출에 실패했습니다.');
    },
  });
};

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { submitApplication } from '@/shared/api/recruitment';

export const useSubmitApplication = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: submitApplication,
    onSuccess: () => {
      // TODO: 모달로 변경
      alert('지원서 제출이 성공적으로 완료되었습니다.');
      navigate('/');
    },
  });
};

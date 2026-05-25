import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
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
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const serverMessage = error.response?.data?.message ?? error.response?.data?.error_code;
        console.error('[제출 오류]', error.response?.status, error.response?.data);
        alert(
          `제출 실패 (${error.response?.status}): ${serverMessage ?? '서버 오류가 발생했습니다.'}`
        );
      } else {
        alert('제출 중 알 수 없는 오류가 발생했습니다.');
      }
    },
  });
};

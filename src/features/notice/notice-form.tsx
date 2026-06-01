import { type ChangeEvent, useState } from 'react';

import Button from '@/shared/components/button/button';
import { isAxiosError } from '@/shared/utils/is-axios-error';

import { useSubscribe } from './use-subscribe';

import * as styles from '@/features/notice/notice-form.css';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const SERVER_ERROR_MESSAGES: Record<string, string> = {
  DUPLICATE_EMAIL: '이미 구독 신청된 이메일입니다.',
  INVALID_EMAIL_FORMAT: '유효하지 않은 이메일 형식입니다.',
  INVALID_INPUT_VALUE: '이메일을 입력해주세요.',
};

const NoticeForm = () => {
  const [email, setEmail] = useState('');
  const { mutate, isPending } = useSubscribe();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const doSubmit = () => {
    if (isPending) {
      return;
    }

    if (!email.trim()) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('유효하지 않은 이메일 형식입니다.');
      return;
    }

    mutate(
      { email: email.trim() },
      {
        onSuccess: () => {
          alert('신청이 완료되었습니다! 모집 시작 시 이메일로 알려드릴게요.');
        },
        onError: (error) => {
          if (isAxiosError(error)) {
            const errorCode = (error.response?.data as { error_code?: string })?.error_code;
            alert(
              SERVER_ERROR_MESSAGES[errorCode ?? ''] ??
                '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
            );
          } else {
            alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
          }
        },
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    doSubmit();
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          className={styles.inputField}
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleChange}
        />
        <Button preset="medium-round_primary" responsive disabled={isPending} onClick={doSubmit}>
          {isPending ? '신청 중...' : '사전 알림 신청'}
        </Button>
      </form>
    </div>
  );
};

export default NoticeForm;

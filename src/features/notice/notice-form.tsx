import { type ChangeEvent, useState } from 'react';
import * as styles from 'src/shared/notice-form/notice-form.css.ts';

import Button from '@/shared/components/button/button';

const NoticeForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form className={styles.container}>
      <input
        type="email"
        className={styles.inputField}
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={handleChange}
        required
      />
      <Button preset="medium-round_primary">사전 알림 신청</Button>
    </form>
  );
};

export default NoticeForm;

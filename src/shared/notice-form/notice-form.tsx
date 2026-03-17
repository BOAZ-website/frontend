import { useState } from 'react';

import * as styles from './notice-form.css';

interface NoticeFormProps {
  onSubmit?: (email: string) => void;
}

const NoticeForm = ({ onSubmit }: NoticeFormProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="email"
        className={styles.inputField}
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className={styles.submitButton}>
        사전 알림 신청
      </button>
    </form>
  );
};

export default NoticeForm;

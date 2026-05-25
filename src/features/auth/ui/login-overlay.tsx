import { useAuth } from '@/features/auth/model/auth-context';
import GoogleIcon from '@/shared/assets/icons/ic_google.svg?react';
import KakaoIcon from '@/shared/assets/icons/ic_kakao.svg?react';
import NaverIcon from '@/shared/assets/icons/ic_naver.svg?react';

import * as styles from './login-overlay.css';

type SocialProvider = 'kakao' | 'google' | 'naver';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APP_URL = import.meta.env.VITE_APP_URL;

const SOCIAL_PROVIDERS: {
  provider: SocialProvider;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}[] = [
  { provider: 'naver', label: '네이버로 로그인', Icon: NaverIcon, className: styles.naverButton },
  {
    provider: 'google',
    label: 'Google로 로그인',
    Icon: GoogleIcon,
    className: styles.googleButton,
  },
  { provider: 'kakao', label: '카카오로 로그인', Icon: KakaoIcon, className: styles.kakaoButton },
];

const handleSocialLogin = (provider: SocialProvider) => {
  const redirectUri = encodeURIComponent(`${APP_URL.replace(/\/$/, '')}/auth/callback`);
  window.location.href = `${BASE_URL}/oauth2/authorize/${provider}?redirect_uri=${redirectUri}`;
};

const LoginOverlay = () => {
  const { isLoginOpen, closeLogin } = useAuth();

  if (!isLoginOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={closeLogin} aria-modal="true" role="dialog">
      <div className={styles.buttonGroup} onClick={(e) => e.stopPropagation()}>
        {SOCIAL_PROVIDERS.map(({ provider, label, Icon, className }) => (
          <button
            key={provider}
            type="button"
            className={className}
            aria-label={label}
            onClick={() => handleSocialLogin(provider)}
          >
            <Icon width={48} height={48} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginOverlay;

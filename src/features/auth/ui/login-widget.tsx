import * as styles from './login-widget.css';

type SocialProvider = 'kakao' | 'google' | 'naver';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APP_URL = import.meta.env.VITE_APP_URL;

const SOCIAL_PROVIDERS: { provider: SocialProvider; label: string; className: string }[] = [
  { provider: 'kakao', label: '카카오로 로그인', className: styles.kakaoButton },
  { provider: 'google', label: 'Google로 로그인', className: styles.googleButton },
  { provider: 'naver', label: '네이버로 로그인', className: styles.naverButton },
];

const handleSocialLogin = (provider: SocialProvider) => {
  const redirectUri = encodeURIComponent(`${APP_URL.replace(/\/$/, '')}/auth/callback`);
  window.location.href = `${BASE_URL}/oauth2/authorize/${provider}?redirect_uri=${redirectUri}`;
};

interface LoginWidgetProps {
  hasError?: boolean;
}

const LoginWidget = ({ hasError = false }: LoginWidgetProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BOAZ 로그인</h1>
      {hasError && (
        <p className={styles.errorMessage}>로그인에 실패했습니다. 다시 시도해 주세요.</p>
      )}
      <div className={styles.buttonGroup}>
        {SOCIAL_PROVIDERS.map(({ provider, label, className }) => (
          <button
            key={provider}
            type="button"
            className={className}
            onClick={() => handleSocialLogin(provider)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginWidget;

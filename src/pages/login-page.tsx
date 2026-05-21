import { useSearchParams } from 'react-router';

import LoginWidget from '@/features/auth/ui/login-widget';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const hasError = searchParams.get('error') === 'true';

  return <LoginWidget hasError={hasError} />;
};

export default LoginPage;

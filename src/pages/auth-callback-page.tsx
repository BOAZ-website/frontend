import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from '@/features/auth/model/auth-context';
import { ROUTE_PATH } from '@/shared/router/paths';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get('token');

    if (token) {
      login(token);
      window.history.replaceState({}, '', ROUTE_PATH.HOME);
    }

    navigate(ROUTE_PATH.HOME, { replace: true });
  }, [login, navigate]);

  return null;
};

export default AuthCallbackPage;

import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';

import { useAuth } from '@/features/auth/model/auth-context';
import { ROUTE_PATH } from '@/shared/router/paths';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!import.meta.env.DEV && !isLoggedIn) {
      alert('로그인 후 지원이 가능합니다.');
      navigate(ROUTE_PATH.HOME, { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (!import.meta.env.DEV && !isLoggedIn) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;

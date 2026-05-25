import { Navigate, Outlet } from 'react-router';

import { useAuth } from '@/features/auth/model/auth-context';
import { ROUTE_PATH } from '@/shared/router/paths';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!import.meta.env.DEV && !isLoggedIn) {
    return <Navigate to={ROUTE_PATH.HOME} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

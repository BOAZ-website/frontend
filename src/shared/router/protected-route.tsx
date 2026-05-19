import { Navigate, Outlet } from 'react-router';

import { useAuth } from '@/features/auth/model/auth-context';
import { ROUTE_PATH } from '@/shared/router/paths';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={ROUTE_PATH.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

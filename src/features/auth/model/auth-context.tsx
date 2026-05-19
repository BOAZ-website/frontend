import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import { tokenStorage } from '@/shared/auth/token-storage';

interface AuthContextValue {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!tokenStorage.get());

  const login = (token: string) => {
    tokenStorage.set(token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    tokenStorage.remove();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내에서 사용해야 합니다.');
  }
  return context;
};

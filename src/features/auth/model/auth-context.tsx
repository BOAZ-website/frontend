import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import { tokenStorage } from '@/shared/auth/token-storage';

interface AuthContextValue {
  isLoggedIn: boolean;
  isLoginOpen: boolean;
  login: (token: string) => void;
  logout: () => void;
  openLogin: () => void;
  closeLogin: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!tokenStorage.get());
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const login = (token: string) => {
    tokenStorage.set(token);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const logout = () => {
    tokenStorage.remove();
    setIsLoggedIn(false);
  };

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoginOpen, login, logout, openLogin, closeLogin }}>
      {children}
    </AuthContext.Provider>
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

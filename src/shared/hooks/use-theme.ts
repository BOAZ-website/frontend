import { useContext } from 'react';

import { ThemeContext } from '@/app/providers/theme-provider';

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};

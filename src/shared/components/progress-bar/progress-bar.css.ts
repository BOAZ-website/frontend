import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';

export const progressBar = recipe({
  base: {
    width: '100%',
    height: '1rem',
    border: `1px solid ${themeVars.color.grayscale[800]}`,
    borderRadius: '20px',
    backgroundColor: 'transparent',
    cursor: 'default',
  },
  variants: {
    isCurrentStep: {
      true: {
        backgroundColor: `${themeVars.color.grayscale[100]}`,
        transition: 'background-color 0.1s ease',
      },
      false: {},
    },
  },
});

import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const fixedTab = recipe({
  base: {
    width: '22.6rem',
    padding: '2.1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    ...typography.body2_bd_20,
    color: themeVars.color.grayscale.black,
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: themeVars.color.grayscale.white,
      },
      false: {
        backgroundColor: themeVars.color.grayscale[800],
        ':hover': {
          backgroundColor: themeVars.color.grayscale[600],
        },
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

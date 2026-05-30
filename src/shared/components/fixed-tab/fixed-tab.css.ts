import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  gap: '8rem',
  flexDirection: 'row',
});

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
    '@media': {
      [media.mobile]: {
        width: 'auto',
        padding: '1.65rem 2.25rem',
        ...typography.h5_sm_16,
        flexShrink: 0,
        borderRadius: '10px',
      },
    },
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

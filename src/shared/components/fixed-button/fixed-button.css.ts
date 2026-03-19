import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const base = style({
  width: '100%',
  padding: '2.1rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  ...typography.body2_bd_20,
  color: themeVars.color.grayscale.black,

  ':focus-visible': {
    backgroundColor: themeVars.color.grayscale.white,
  },
});

export const variants = styleVariants({
  active: {
    backgroundColor: 'transparent',
  },
  inactive: {
    backgroundColor: themeVars.color.grayscale[800],
  },
});

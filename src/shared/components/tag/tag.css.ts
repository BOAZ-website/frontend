import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const tag = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  cursor: 'pointer',
  ...typography.text_rg_14,
  padding: '0.45rem 1.2rem',
  color: themeVars.color.grayscale[100],
  backgroundColor: 'transparent',
  border: `1px solid ${themeVars.color.grayscale[400]}`,
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_12,
      padding: '0.3rem 0.8rem',
    },
  },
});

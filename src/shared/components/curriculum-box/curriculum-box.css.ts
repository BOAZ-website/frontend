import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  width: '100%',
  minWidth: '35.5rem',
  height: '6.5rem',
  borderRadius: '10px',
  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  '@media': {
    [media.mobile]: {
      minWidth: 'auto',
      padding: '0.9rem 1.2rem',
      borderRadius: '4px',
      height: '3.5rem',
    },
  },
});

export const contentText = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
  width: '35.5rem',
  lineHeight: '1.3',
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_8,
      width: 'auto',
    },
  },
});

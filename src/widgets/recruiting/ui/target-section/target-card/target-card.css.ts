import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '30rem',
  height: '27rem',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: themeVars.color.grayscale[800],
  gap: '3rem',
  padding: '3.8rem 3rem 4.5rem',
  '@media': {
    [media.mobile]: {
      height: 'auto',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '2.8rem',
      padding: '2.8rem',
    },
  },
});

export const iconWrapper = style({
  width: '9.7rem',
  height: '9.7rem',
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      width: '8.8rem',
      height: '8.8rem',
    },
  },
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18_card,
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_14,
      textAlign: 'center',
      alignItems: 'center',
    },
  },
});

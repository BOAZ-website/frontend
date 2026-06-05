import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const row = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const multiGrid = style({
  display: 'grid',
  width: '100%',
  alignItems: 'center',
});

export const multiHeaderCell = style({
  color: themeVars.color.grayscale[400],
  ...typography.body4_rg_18,
  textAlign: 'center',
  paddingBottom: '1.6rem',
  paddingTop: '4.1rem',
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_14,
      paddingBottom: '1.2rem',
    },
  },
});

export const multiRowLabel = style({
  color: themeVars.color.grayscale[400],
  ...typography.body4_rg_18,
  display: 'flex',
  alignItems: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_14,
      lineHeight: '1.4',
      paddingTop: '1.4rem',
      paddingBottom: '1.4rem',
    },
  },
});

export const multiCell = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  '@media': {
    [media.mobile]: {
      paddingTop: '1.4rem',
      paddingBottom: '1.4rem',
    },
  },
});

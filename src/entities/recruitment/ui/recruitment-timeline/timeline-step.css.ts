import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const nodeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  zIndex: 1,
  '@media': {
    [media.mobile]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1.6rem',
    },
  },
});

export const dateLabel = style({
  ...typography.body1_rg_24,
  color: themeVars.color.grayscale.white,
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4.3rem',
  '@media': {
    [media.mobile]: {
      ...typography.body4_rg_18,
      marginBottom: 0,
      order: 2,
    },
  },
});

export const dotContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '5.2rem',
  '@media': {
    [media.mobile]: {
      width: 'auto',
      marginBottom: 0,
      flexShrink: 0,
      order: 1,
      zIndex: 1,
      marginLeft: '2.1rem',
    },
  },
});

export const timelineDot = style({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  backgroundColor: themeVars.color.grayscale[100],
  boxShadow: `0 0 0 10px ${themeVars.color.grayscale.black}`,
  position: 'relative',
  zIndex: 2,
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      width: '2rem',
      height: '2rem',
      boxShadow: `0 0 0 8px ${themeVars.color.grayscale.black}`,
    },
  },
});

export const stepLabel = style({
  background: themeVars.color.grayscale[800],
  color: themeVars.color.grayscale.white,
  borderRadius: '12px',
  maxWidth: '18rem',
  width: '100%',
  padding: '1.75rem 0',
  ...typography.body1_rg_24,
  whiteSpace: 'nowrap',
  textAlign: 'center',
  '@media': {
    [media.mobile]: {
      ...typography.body4_rg_18,
      padding: '0.95rem 2.5rem',
      minWidth: '11rem',
      borderRadius: '6px',
      width: 'auto',
      marginLeft: 'auto',
      order: 3,
    },
  },
});

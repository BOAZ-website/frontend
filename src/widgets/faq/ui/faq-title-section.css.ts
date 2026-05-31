import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '6rem',
  '@media': {
    [media.mobile]: {
      marginBottom: '0',
      justifyContent: 'center',
    },
  },
});

export const pageTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h1_bd_40,
  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const mobileTitleGroup = style({
  display: 'none',
  '@media': {
    [media.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      alignItems: 'center',
    },
  },
});

export const mobileLabel = style({
  color: themeVars.color.primary[100],
  ...typography.h5_sm_16,
});

export const mobileTitleText = style({
  color: themeVars.color.grayscale.white,
  ...typography.h4_bd_24,
});

export const buttonWrapper = style({
  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const chatContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

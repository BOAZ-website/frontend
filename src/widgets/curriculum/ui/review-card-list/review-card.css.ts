import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardWrapper = style({
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '10px',
  width: '50rem',
  height: '20.8rem',
  padding: '2.85rem 4.2rem 3.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.3rem',
  '@media': {
    [media.mobile]: {
      width: '100%',
      height: 'auto',
      padding: '2rem 2.4rem',
    },
  },
});

export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const title = style({
  color: themeVars.color.grayscale.black,
  ...typography.body2_bd_20,
  '@media': {
    [media.mobile]: {
      ...typography.body3_bd_18,
    },
  },
});

export const subTitle = style({
  color: themeVars.color.grayscale[400],
  ...typography.body3_bd_18,
  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
    },
  },
});

export const descriptionText = style({
  color: themeVars.color.grayscale.black,
  ...typography.body5_rg_16,
  lineHeight: '1.4',
});

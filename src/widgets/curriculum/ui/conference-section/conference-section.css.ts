import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  gap: '7.2rem',
  alignItems: 'center',
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap: '2.4rem',
    },
  },
});

export const sliderWrapper = style({
  position: 'relative',
  width: '47.3rem',
  flexShrink: 0,
  height: '26.6rem',
  overflow: 'hidden',
  userSelect: 'none',
  '@media': {
    [media.mobile]: {
      width: '100%',
      flexShrink: 1,
      height: '18rem',
    },
  },
});

export const sliderTrack = style({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  transition: 'transform 0.6s ease',
});

export const sliderSlide = style({
  flexShrink: 0,
  width: '100%',
  height: '100%',
});

export const sliderImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  pointerEvents: 'none',
});

export const dotsWrapper = style({
  position: 'absolute',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const dot = style({
  width: '0.6rem',
  height: '0.6rem',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'background-color 0.3s ease',
});

export const dotActive = style({
  backgroundColor: themeVars.color.grayscale.white,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  '@media': {
    [media.mobile]: {
      width: '100%',
      gap: '1.6rem',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
});

export const title = style({
  ...typography.h4_bd_24,
  color: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      ...typography.body5_bd_12,
    },
  },
});

export const description = style({
  ...typography.body4_rg_18,
  lineHeight: '3rem',
  color: themeVars.color.grayscale.white,
  whiteSpace: 'pre-line',
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
      lineHeight: '1.4',
    },
  },
});

export const buttonIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  '@media': {
    [media.mobile]: {
      width: '0.8rem',
      height: '0.8rem',
    },
  },
});

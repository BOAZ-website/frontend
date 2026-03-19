import { style } from '@vanilla-extract/css';
import { createVar } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const cardBgColorVar = createVar();

export const cardContainer = style({
  width: '30rem',
  height: '27rem',
  borderRadius: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2.5rem',

  backgroundColor: cardBgColorVar,
});

export const iconWrapper = style({
  width: '14rem',
  height: '14rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '3rem',
  backgroundColor: themeVars.color.grayscale[100],
  overflow: 'hidden',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
});

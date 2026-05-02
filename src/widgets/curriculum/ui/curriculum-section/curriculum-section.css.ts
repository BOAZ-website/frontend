import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  gap: '5rem',
});

export const column = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const sessionLabel = style({
  ...typography.h1_sb_40,
  color: themeVars.color.grayscale.white,
  textAlign: 'right',
});

export const sessionLabelRight = style({
  ...typography.h1_sb_40,
  color: themeVars.color.grayscale.white,
  textAlign: 'left',
});

export const stepList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5.5rem',
});

export const divider = style({
  width: '1px',
  backgroundColor: themeVars.color.grayscale[600],
  alignSelf: 'stretch',
  flexShrink: 0,
});

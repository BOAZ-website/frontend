import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  cursor: 'pointer',
  width: 'fit-content',
});

export const hiddenInput = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
});

export const radioCircle = style({
  width: '1.6rem',
  height: '1.6rem',
  borderRadius: '50%',
  border: `0.1rem solid ${themeVars.color.primary[100]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  backgroundColor: 'transparent',

  selectors: {
    [`${hiddenInput}:checked + &`]: {
      borderColor: themeVars.color.primary[100],
    },
  },
});

export const innerDot = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  backgroundColor: themeVars.color.primary[100],
  transform: 'scale(0)',
  transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

  selectors: {
    [`${hiddenInput}:checked + ${radioCircle} &`]: {
      transform: 'scale(1)',
    },
  },
});

export const labelText = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
});

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
  width: '0.1rem',
  height: '0.1rem',
  padding: 0,
  margin: '-0.1rem',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
});
export const radioCircle = style({
  position: 'relative',
  width: '1.6rem',
  height: '1.6rem',
  borderRadius: '50%',
  border: `0.1rem solid ${themeVars.color.primary[100]}`,
  transition: 'all 0.2s ease',
  backgroundColor: 'transparent',
  flexShrink: 0,
  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    backgroundColor: themeVars.color.primary[100],
    transform: 'translate(-50%, -50%) scale(0)',
    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  selectors: {
    [`${hiddenInput}:checked + &::after`]: {
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
});

export const labelText = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
});

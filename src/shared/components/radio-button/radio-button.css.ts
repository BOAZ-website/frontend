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
  display: 'grid',
  placeItems: 'center',
  width: '1.6rem',
  height: '1.6rem',
  borderRadius: '50%',
  border: `0.1rem solid ${themeVars.color.grayscale[400]}`,
  transition: 'border-color 0.2s ease',
  backgroundColor: 'transparent',
  flexShrink: 0,
  '::after': {
    content: '""',
    width: '62.5%',
    height: '62.5%',
    borderRadius: '50%',
    backgroundColor: themeVars.color.primary[100],
    transform: 'scale(0)',
    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  selectors: {
    [`${hiddenInput}:checked + &`]: {
      borderColor: themeVars.color.primary[100],
    },
    [`${hiddenInput}:checked + &::after`]: {
      transform: 'scale(1)',
    },
  },
});

export const labelText = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
});

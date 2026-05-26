import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  position: 'relative',
  zIndex: 100,
});

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  zIndex: 99,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.8rem',
  padding: '0.9rem 1.4rem',
  borderRadius: '20px',
  width: 'fit-content',
  backgroundColor: themeVars.color.grayscale[900],
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  color: themeVars.color.grayscale.white,
  cursor: 'pointer',
  ...typography.body4_rg_18,
  whiteSpace: 'nowrap',
  ':hover': {
    backgroundColor: themeVars.color.grayscale[800],
  },
});

export const overlay = style({
  position: 'absolute',
  top: 'calc(100% + 3.8rem)',
  right: 0,
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  alignItems: 'flex-end',
});

const optionBase = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 1.6rem',
  cursor: 'pointer',
  ...typography.body4_rg_18,
  textAlign: 'left',
  borderRadius: '3rem',
  backgroundColor: themeVars.color.grayscale[900],
  transition: 'background-color 0.15s ease',
  whiteSpace: 'nowrap',
});

export const option = styleVariants({
  default: [
    optionBase,
    {
      color: themeVars.color.grayscale.white,
      border: `1px solid ${themeVars.color.grayscale[800]}`,
      ':hover': {
        backgroundColor: themeVars.color.grayscale[800],
      },
    },
  ],
  selected: [
    optionBase,
    {
      color: themeVars.color.primary[100],
    },
  ],
});

export const icon = style({
  flexShrink: 0,
});

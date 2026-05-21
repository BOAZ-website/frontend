import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  position: 'relative',
});

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  padding: '0.9rem 1.4rem',
  borderRadius: '20px',
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
  top: 'calc(100% + 0.8rem)',
  right: 0,
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  minWidth: '14rem',
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale[900],
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  boxShadow: '0 0.8rem 2.4rem rgba(0, 0, 0, 0.4)',
  overflow: 'hidden',
});

const optionBase = style({
  padding: '1.2rem 1.6rem',
  cursor: 'pointer',
  ...typography.body4_rg_18,
  textAlign: 'left',
  border: 'none',
  backgroundColor: 'transparent',
  transition: 'background-color 0.15s ease',
  whiteSpace: 'nowrap',
});

export const option = styleVariants({
  default: [
    optionBase,
    {
      color: themeVars.color.grayscale.white,
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

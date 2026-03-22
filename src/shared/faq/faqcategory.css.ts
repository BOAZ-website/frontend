import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '19.1rem',
});

const itemBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '19.1rem',
  height: '8.7rem',
  padding: '2.9rem 1.5rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  border: 'none',
  zIndex: 10,
  backgroundColor: 'transparent',
  textAlign: 'left',
  ...typography.h3_bd_24,
});

export const itemVariants = styleVariants({
  default: [
    itemBase,
    {
      color: '#808080',
      ':hover': {
        color: themeVars.color.grayscale.white,
      },
    },
  ],
  active: [
    itemBase,
    {
      color: themeVars.color.grayscale.white,
    },
  ],
});
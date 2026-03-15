import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const footer = style({
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: themeVars.color.grayscale.white,
  padding: '3.3rem 4.9rem 3rem 6rem',
});

export const footerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4.3rem',
});

const colBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const col = styleVariants({
  left: [colBase, { gap: '1.5rem', flex: 1 }],
  center: [colBase, { gap: '0.8rem' }],
  right: [colBase, { gap: '0.9rem' }],
});

export const heading = style({
  ...typography.body3_bd_18,
});

export const snsLinks = style({
  display: 'flex',
  gap: '0.7rem',
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[400],
});

export const snsLink = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale.black,
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
});

export const email = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale.black,
});

export const copyright = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[400],
});

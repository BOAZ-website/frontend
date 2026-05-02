import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const mainLayout = style({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
});

export const sideNavigation = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
});

const tabBase = style({
  textAlign: 'left',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  ...typography.h4_bd_24,
  padding: '2.9rem 13.3rem 2.9rem 1.6rem',
});

export const tabVariants = styleVariants({
  active: [tabBase, { color: themeVars.color.grayscale.white }],
  default: [tabBase, { color: themeVars.color.grayscale[400] }],
});

export const listSection = style({
  flex: 1,
});

export const accordionContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const mainLayout = style({
  display: 'flex',
  gap: '4rem',
  width: '100%',
});

export const sideNavigation = style({
  display: 'flex',
  flexDirection: 'column',
  width: '20rem',
  flexShrink: 0,
});

const tabBase = style({
  textAlign: 'left',
  padding: '1.6rem 0',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  ...typography.h4_bd_24,
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
  borderTop: `1px solid ${themeVars.color.grayscale[800]}`,
});
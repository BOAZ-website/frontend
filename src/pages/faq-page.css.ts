import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  width: '100%',
  minHeight: '100%',
  backgroundColor: themeVars.color.grayscale.black,
  paddingTop: '13.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const contentWrapper = style({
  width: '100%',
  maxWidth: '120rem',
  display: 'flex',
  flexDirection: 'column',
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '14.3rem',
});

export const pageTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h1_bd_40,
});

export const mainLayout = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '10rem',
  width: '100%',
  alignItems: 'flex-start',
});

export const sideNavigation = style({
  width: '19.1rem',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
});

const tabBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '8.7rem',
  padding: '2.9rem 1.5rem',
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  border: 'none',
  backgroundColor: 'transparent',
  textAlign: 'left',
  ...typography.h4_bd_24,
});

export const tabVariants = styleVariants({
  default: [tabBase, { color: '#808080', ':hover': { color: themeVars.color.grayscale.white } }],
  active: [tabBase, { color: themeVars.color.grayscale.white }],
});

export const listSection = style({ flex: 1 });

export const accordionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderTop: `0.5px solid ${themeVars.color.grayscale[400]}`,
});

export const chatContent = style({ 
  display: 'flex', 
  alignItems: 'center', 
  gap: '0.8rem' 
});

export const chatIcon = style({ 
  width: '2.4rem', 
  height: '2.4rem' 
});
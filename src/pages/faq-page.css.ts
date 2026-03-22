import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  width: '100%',
  minHeight: '100vh',
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

export const pageTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h1_bd_40,
  marginBottom: '8.4rem', 
  alignSelf: 'flex-start',
});

export const mainLayout = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '10rem',
  position: 'relative',
  width: '100%',
  alignItems: 'flex-start',
});

export const sideNavigation = style({
  width: '19.1rem',
  flexShrink: 0,
});

export const listSection = style({
  flex: 1,
  position: 'relative',
});

export const chatButtonWrapper = style({
  position: 'absolute',
  top: '-5rem',
  right: 0,
});

export const chatContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const chatIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const accordionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderTop: `0.5px solid ${themeVars.color.grayscale[400]}`,
  marginTop: '3.2rem',
});
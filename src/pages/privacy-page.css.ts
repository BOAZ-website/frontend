import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  width: '100%',
  minHeight: '100%',
  backgroundColor: themeVars.color.grayscale.black,
  paddingTop: '16.7rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20rem',
});

export const contentWrapper = style({
  width: '100%',
  maxWidth: '80rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  padding: '0 2rem',
});

export const pageTitle = style({
  ...typography.h1_bd_40,
  color: themeVars.color.grayscale.white,
  borderBottom: `1px solid ${themeVars.color.grayscale[600]}`,
  paddingBottom: '2rem',
});

export const effectiveDate = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[400],
  marginTop: '-2rem',
});

export const intro = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[200],
  lineHeight: '1.8',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const sectionTitle = style({
  ...typography.h4_bd_24,
  color: themeVars.color.grayscale.white,
});

export const sectionSubTitle = style({
  ...typography.body3_bd_18,
  color: themeVars.color.grayscale[100],
});

export const sectionText = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[200],
  lineHeight: '1.8',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  paddingLeft: '1.6rem',
});

export const listItem = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[200],
  lineHeight: '1.8',
  listStyleType: 'disc',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[200],
});

globalStyle(`${table} th`, {
  padding: '1rem 1.6rem',
  backgroundColor: themeVars.color.grayscale[800],
  border: `1px solid ${themeVars.color.grayscale[600]}`,
  textAlign: 'left',
  fontWeight: themeVars.fontWeight.semibold,
  color: themeVars.color.grayscale.white,
});

globalStyle(`${table} td`, {
  padding: '1rem 1.6rem',
  border: `1px solid ${themeVars.color.grayscale[600]}`,
  lineHeight: '1.6',
});

export const divider = style({
  border: 'none',
  borderTop: `1px solid ${themeVars.color.grayscale[800]}`,
});

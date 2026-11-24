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

/** 제목과 시행일 선택을 한 줄에 두고, 그 아래에 구분선을 긋는다. */
export const pageHeader = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '1.6rem',
  borderBottom: `1px solid ${themeVars.color.grayscale[600]}`,
  paddingBottom: '2rem',
});

export const pageTitle = style({
  ...typography.h1_bd_40,
  color: themeVars.color.grayscale.white,
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

/** 목차처럼 항목 앞에 ①·② 같은 표시가 이미 있는 목록. 글머리 기호를 붙이지 않는다. */
export const plainListItem = style([listItem, { listStyleType: 'none' }]);

/** 번호를 매기는 목록(1. 2. 3.). */
export const orderedListItem = style([listItem, { listStyleType: 'decimal' }]);

/** 본문 안 링크. 지원서 동의 화면의 링크(agreement-step.css.ts의 consentLink)와 같은 모양이다. */
export const link = style({
  color: themeVars.color.primary[100],
  textDecoration: 'underline',
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

import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',
  width: '100%',
  paddingBottom: '12rem',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const sectionTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h2_bd_30,
});

export const sectionDescription = style({
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
});

export const sectionExperienceTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h3_sb_30,
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between', // 이전/다음 페이지 양끝 정렬
  alignItems: 'center',
  marginTop: '4rem',
  ...typography.h4_bd_24,
});

export const navButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  cursor: 'pointer',
  color: themeVars.color.grayscale.white,
  transition: 'opacity 0.2s ease',

  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
  },
});

export const addProject = style({
  color: themeVars.color.grayscale[400],
  cursor: 'pointer',
  marginTop: '-1.2rem',
  ...typography.text_rg_14,
  alignSelf: 'flex-start',

  selectors: {
    '&:hover': {
      color: themeVars.color.grayscale.white,
    },
  },
});

export const stackQuestion = style({
  color: themeVars.color.primary[100],
  ...typography.h4_bd_24,
});

export const radioButton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: '0.8rem',
});

export const errorText = style({
  color: themeVars.color.error.red_100,
  ...typography.text_rg_14,
  textAlign: 'center',
});

export const tableSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',
});

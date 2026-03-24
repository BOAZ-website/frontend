import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '30rem',
  height: '27rem',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // space-between 제거
  backgroundColor: themeVars.color.grayscale[800],
  gap: '3rem', // 아이콘 ↔ 텍스트 간격
  padding: '3.8rem 3.25rem 4.5rem', // 좌우 여백만 유지
});

export const iconWrapper = style({
  width: '9.7rem',
  height: '9.7rem',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundColor: themeVars.color.grayscale[100],
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // alignSelf: stretch 제거
  textAlign: 'center', // 텍스트 중앙 정렬 명시
  whiteSpace: 'pre-wrap',
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18_card,
});

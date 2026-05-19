import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  minWidth: '7.2rem', // 하 ..
  padding: '2.5rem 1.2rem', // 가로 패딩 1.2는 임시
  backgroundColor: themeVars.color.grayscale[900], // 임시
  borderBottom: `1px solid ${themeVars.color.grayscale[400]}`,
});

export const input = style({
  flex: 1,
  color: themeVars.color.grayscale.white,
  ...typography.body1_rg_24,

  '::placeholder': {
    color: themeVars.color.grayscale[400],
  },
});

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '35.5rem',
  backgroundColor: 'rgba(217, 217, 217, 0.10)',
  borderRadius: '10px',
  padding: '1.5rem', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const contentText = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
});

// 유보수용 페이지 레이아웃 스타일
export const pageWrapper = style({
  backgroundColor: '#000',
  minHeight: '100vh',
  padding: '6rem 2rem', // 60px 20px
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem', // 20px
  alignItems: 'center',
});

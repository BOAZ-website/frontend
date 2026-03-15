import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '35.5rem',
  height: '6.5rem',
  backgroundColor: 'rgba(217, 217, 217, 0.10)',
  borderRadius: '1rem',
  padding: '1.5rem 4.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '0.1rem solid grayscale[800]',
});

export const contentText = style({
  color: 'white',
  fontSize: '1.6rem',
  fontWeight: '400',
  textAlign: 'center',
  lineHeight: '3.5rem',
  letterSpacing: '-0.02em',
  fontFamily: 'Inter',
  fontStyle: 'normal',
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

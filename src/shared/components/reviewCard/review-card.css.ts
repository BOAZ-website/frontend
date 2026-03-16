import { themeVars } from '@/shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardWrapper = style({
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '1.25rem',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  boxShadow: '0 0.4rem 2rem rgba(0, 0, 0, 0.1)',
});

export const cardHeader = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.75rem',
});

export const title = style({
  color: themeVars.color.grayscale.black,
  textAlign: 'center',
});

export const subTitle = style({
  fontFamily: 'Pretendard',
  fontSize: '1.8rem',
  fontWeight: '700',
  color: 'grayscale[400]',
  textAlign: 'center',
  fontStyle: 'normal',
  lineHeight: 'normal',
});

export const descriptionText = style({
  fontSize: '1.2rem',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: 'normal',
  color: 'black',
});

export const cardGrid = style({
  display: 'inline-grid',
  rowGap: '2.3rem',
  columnGap: '33px',
  gridTemplateRows: 'repeat(3, fit-content(100%))',
  gridTemplateColumns: 'repeat(2, fit-content(100%))',
  gap: '2.4rem', // 24px랑 같은 크기..
  padding: '3.5rem',
});

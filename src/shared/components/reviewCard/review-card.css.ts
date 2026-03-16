import { style } from '@vanilla-extract/css';

export const cardWrapper = style({
  backgroundColor: 'white',
  borderRadius: '1.25rem',
  padding: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
});

export const cardHeader = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.75rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: '700',
  color: 'black',
  textAlign: 'center',
  fontStyle: 'normal',
  lineHeight: 'normal',
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

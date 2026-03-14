import { style } from '@vanilla-extract/css';

export const cardWrapper = style({
  backgroundColor: '#fff',
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
  fontSize: '1.75rem',
  fontWeight: '800',
  color: '#000',
});

export const subTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#A1A1A1',
});

export const descriptionText = style({
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#333',
});

export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.5rem', // 24px랑 같은 크기..
  padding: '2rem',
});
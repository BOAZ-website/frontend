import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12.5rem', // TODO: 디팀 논의 후 25rem 통일 여부 결정
  padding: '13.2rem 0 20rem',
});

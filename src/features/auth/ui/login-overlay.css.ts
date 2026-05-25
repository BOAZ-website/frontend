import { style } from '@vanilla-extract/css';

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  padding: '7rem 4.3rem 0',
});

export const buttonGroup = style({
  display: 'flex',
  gap: '1.6rem',
});

const circleButton = style({
  width: '6rem',
  height: '6rem',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 0.85,
  },
});

export const naverButton = style([circleButton, { backgroundColor: '#03C75A' }]);
export const googleButton = style([circleButton, { backgroundColor: '#FFFFFF' }]);
export const kakaoButton = style([circleButton, { backgroundColor: '#FEE500' }]);

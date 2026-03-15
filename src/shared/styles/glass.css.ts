import { style } from '@vanilla-extract/css';

export const glassEffect = style({
  backgroundColor: 'rgba(217, 217, 217, 0.1)',
  backdropFilter: 'blur(8px) saturate(80%)',
  WebkitBackdropFilter: 'blur(8px) saturate(80%)',
  boxShadow: [
    '0 8px 32px rgba(0, 0, 0, 0.1)',
    'inset 0 0.8px 0 rgba(255, 255, 255, 0.6)',
    'inset 0 -0.6px 0 rgba(255, 255, 255, 0.2)',
  ].join(', '),
  position: 'relative',
  overflow: 'hidden',
  selectors: {
    '&::before': {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      background:
        'radial-gradient(circle at top left, rgba(255, 255, 255, 0.08) 0%, transparent 10%)',
    },
    '&::after': {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      background:
        'radial-gradient(circle at bottom right, rgba(208, 207, 249, 0.08) 0%, transparent 10%)',
      pointerEvents: 'none',
    },
  },
});

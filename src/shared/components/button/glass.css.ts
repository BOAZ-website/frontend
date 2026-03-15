import { style } from '@vanilla-extract/css';

export const glassEffect = style({
  backdropFilter: 'blur(8px) saturate(80%)',
  WebkitBackdropFilter: 'blur(8px) saturate(80%)',
  boxShadow: [
    '0 8px 32px rgba(0, 0, 0, 0.1)',
    'inset 0 1px 0 rgba(255, 255, 255, 0.15)',
    'inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
  ].join(', '),
  position: 'relative',
  overflow: 'hidden',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '50%',
      background: 'radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 70%)',
      pointerEvents: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '50%',
      height: '50%',
      background:
        'radial-gradient(circle at bottom right, rgba(208, 207, 249, 0.08), transparent 70%)',
      pointerEvents: 'none',
    },
  },
});

import { style } from '@vanilla-extract/css';

export const glassEffect = style({
  background: [
    'radial-gradient(120% 100% at 16% 105%, rgba(35, 35, 36, 0.48) 0%, rgba(22, 22, 23, 0.22) 44%, transparent 70%)',
    'linear-gradient(124deg, #181819 0%, #151515 48%, #111111 100%)',
  ].join(', '),

  boxShadow: [
    'inset 0 0.5px 0.6px rgba(255, 255, 255, 0.06)',
    '0 0.8px 1.4px rgba(0, 0, 0, 0.86)',
  ].join(', '),

  position: 'relative',
  isolation: 'isolate',

  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      padding: '1px',
      background: [
        'radial-gradient(55% 140% at 10% 0%, rgba(250, 250, 250, 0.82) 0%, rgba(224, 224, 224, 0.44) 15%, rgba(88, 88, 88, 0.14) 42%, transparent 68%)',
        'radial-gradient(52% 140% at 100% 100%, rgba(216, 216, 216, 0.48) 0%, rgba(124, 124, 124, 0.22) 24%, transparent 58%)',
        'radial-gradient(42% 130% at 94% 4%, rgba(0, 0, 0, 0.72) 0%, rgba(8, 8, 8, 0.32) 38%, transparent 70%)',
        'radial-gradient(44% 130% at 8% 100%, rgba(0, 0, 0, 0.54) 0%, rgba(10, 10, 10, 0.26) 38%, transparent 72%)',
        'linear-gradient(180deg, rgba(178, 178, 178, 0.18), rgba(32, 32, 32, 0.11) 46%, rgba(158, 158, 158, 0.46))',
      ].join(', '),
      WebkitMask: ['linear-gradient(#fff 0 0) content-box', 'linear-gradient(#fff 0 0)'].join(', '),
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
      zIndex: -1,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      inset: '1px',
      borderRadius: 'inherit',
      background: [
        'linear-gradient(90deg, transparent 0%, rgba(250, 250, 250, 0.14) 8%, rgba(229, 229, 229, 0.11) 24%, rgba(104, 104, 104, 0.06) 72%, transparent 100%) 0 0 / 100% 0.6px no-repeat',
        'linear-gradient(90deg, transparent 0%, rgba(128, 128, 128, 0.14) 14%, rgba(180, 180, 180, 0.22) 80%, transparent 100%) 0 100% / 100% 0.7px no-repeat',
      ].join(', '),
      boxShadow: 'inset 0 -0.8px 1px rgba(0, 0, 0, 0.22)',
      pointerEvents: 'none',
      zIndex: -1,
    },
  },
});

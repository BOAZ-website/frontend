import { globalStyle, keyframes, style } from '@vanilla-extract/css';

const moveInCircle = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const moveVertical = keyframes({
  '0%': { transform: 'translateY(-50%)' },
  '50%': { transform: 'translateY(50%)' },
  '100%': { transform: 'translateY(-50%)' },
});

const moveHorizontal = keyframes({
  '0%': { transform: 'translateX(-50%) translateY(-10%)' },
  '50%': { transform: 'translateX(50%) translateY(10%)' },
  '100%': { transform: 'translateX(-50%) translateY(-10%)' },
});

const CIRCLE_SIZE = '80%';

export const frame = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  overflow: 'hidden',
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 4,
      pointerEvents: 'none',
      background: `
        radial-gradient(ellipse 52% 78% at 98% 0%, rgba(140,40,210,0.88) 0%, rgba(72,22,150,0.44) 42%, transparent 68%),
        radial-gradient(ellipse 42% 62% at 88% 20%, rgba(40,110,255,0.82) 0%, transparent 60%),
        radial-gradient(ellipse 36% 50% at 95% 42%, rgba(90,190,255,0.65) 0%, transparent 54%)
      `,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 12,
      pointerEvents: 'none',
      background: `
        linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, transparent 100%),
        linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 5%, transparent 100%),
        linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.08) 45%, transparent 100%),
        linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 45%, transparent 100%)
      `,
    },
  },
});

export const bgGradient = style({
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  background: `linear-gradient(40deg, rgb(72, 22, 132), rgb(4, 18, 78))`,
});

globalStyle(`${bgGradient} svg`, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 0,
  height: 0,
});

export const gradientsContainer = style({
  width: '100%',
  height: '100%',
  transform: 'translate(44%, -32%)',
});

export const blob = style({
  position: 'absolute',
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE,
  top: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  left: `calc(50% - ${CIRCLE_SIZE} / 2)`,
  mixBlendMode: 'hard-light',
  opacity: 1,
});

export const g1 = style({
  background: `radial-gradient(circle at center, rgba(54,142,255,0.8) 0, rgba(54,142,255,0) 50%) no-repeat`,
  transformOrigin: 'center center',
  animation: `${moveVertical} 30s ease infinite`,
});

export const g2 = style({
  background: `radial-gradient(circle at center, rgba(182,88,255,0.8) 0, rgba(182,88,255,0) 50%) no-repeat`,
  transformOrigin: 'calc(50% - 400px)',
  animation: `${moveInCircle} 20s reverse infinite`,
});

export const g3 = style({
  top: `calc(50% - ${CIRCLE_SIZE} / 2 + 200px)`,
  left: `calc(50% - ${CIRCLE_SIZE} / 2 - 500px)`,
  background: `radial-gradient(circle at center, rgba(112,218,255,0.8) 0, rgba(112,218,255,0) 50%) no-repeat`,
  transformOrigin: 'calc(50% + 400px)',
  animation: `${moveInCircle} 40s linear infinite`,
});

export const g4 = style({
  background: `radial-gradient(circle at center, rgba(94,56,210,0.8) 0, rgba(94,56,210,0) 50%) no-repeat`,
  transformOrigin: 'calc(50% - 200px)',
  animation: `${moveHorizontal} 40s ease infinite`,
  opacity: 0.7,
});

export const g5 = style({
  width: `calc(${CIRCLE_SIZE} * 2)`,
  height: `calc(${CIRCLE_SIZE} * 2)`,
  top: `calc(50% - ${CIRCLE_SIZE})`,
  left: `calc(50% - ${CIRCLE_SIZE})`,
  background: `radial-gradient(circle at center, rgba(154,202,255,0.8) 0, rgba(154,202,255,0) 50%) no-repeat`,
  transformOrigin: 'calc(50% - 800px) calc(50% + 200px)',
  animation: `${moveInCircle} 20s ease infinite`,
});

export const interactive = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '-50%',
  left: '-50%',
  background: `radial-gradient(circle at center, rgba(138,96,255,0.8) 0, rgba(138,96,255,0) 50%) no-repeat`,
  mixBlendMode: 'hard-light',
  opacity: 0.7,
  willChange: 'transform',
});

export const blurLayer = style({
  position: 'absolute',
  inset: 0,
  zIndex: 5,
  pointerEvents: 'none',
  backdropFilter: 'blur(180px)',
  WebkitBackdropFilter: 'blur(180px)',
});

export const gradientWash = style({
  position: 'absolute',
  inset: 0,
  zIndex: 6,
  pointerEvents: 'none',
  background: `linear-gradient(
    122deg,
    rgba(142,104,255,0.16) 0%,
    rgba(115,190,255,0.13) 46%,
    rgba(58,34,145,0.18) 100%
  )`,
  mixBlendMode: 'screen',
});

export const noiseOverlay = style({
  position: 'absolute',
  inset: 0,
  zIndex: 10,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  mixBlendMode: 'soft-light',
  opacity: 0.18,
});

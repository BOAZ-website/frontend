import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  fontSize: '62.5%',
  width: '100%',
  minWidth: '1366px',
  wordBreak: 'keep-all',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('#root', {
  width: '100%',
  minHeight: '100dvh',
  boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('ul, ol', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

globalStyle('button , input', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  outline: 'none',
});

import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  fontSize: '62.5%',
  width: '100%',
  height: '100dvh',
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
  height: '100dvh',
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

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
});

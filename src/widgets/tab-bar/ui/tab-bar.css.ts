import { style } from '@vanilla-extract/css';

export const wrapper = style({
  // 1. Layout Group
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  top: 0,

  // 2. Box Group
  width: '100%',
  height: '5rem',

  // 3. Typography Group
  backgroundColor: '#000',
});

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1440rem',
  padding: '0 4rem',

  color: '#fff',

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 1rem',
    },
  },
});

export const logoImage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
});

export const leftGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10rem', // 로고와 '커리큘럼' 사이 간격 설정
});

export const logoSection = style({
  display: 'flex',      
  alignItems: 'center',
  gap: '0.5rem',        
  fontSize: '2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  });
  
  export const navList = style({
    display: 'flex',
    gap: '10rem',
  });
  
  export const navItem = style({
    fontSize: '1.5rem',
    cursor: 'pointer',
  });
  
  export const applyButton = style({
    // 1. Layout Group
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 2.5rem',
  
    // 2. Box Group
    borderRadius: '2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    
    
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
    backdropFilter: 'blur(10px)', // 유리 느낌(Glassmorphism)
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // 아래쪽 그림자로 입체감 부여
  
    
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: '600',
    lineHeight: '1',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  
    selectors: {
      '&:hover': {
        transform: 'translateY(-2px)',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
      },
    },
  });
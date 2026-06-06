import { useEffect, useRef } from 'react';

const useGradientBackground = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = window.innerWidth / 2;
    let tgY = window.innerHeight / 2;
    let rafId: number;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      rafId = requestAnimationFrame(move);
    };

    const buildNoise = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      canvas.width = width;
      canvas.height = height;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = 112 + Math.random() * 143;
        data[i] = data[i + 1] = data[i + 2] = value;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };

    buildNoise();
    move();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', buildNoise);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', buildNoise);
    };
  }, []);

  return { interactiveRef, canvasRef };
};

export default useGradientBackground;

import { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  speedY: number;
  speedX: number;
}

const BubbleTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbles = useRef<Bubble[]>([]);
  const requestRef = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const colors = ['#F9A8D4', '#F472B6', '#EC4899', '#FBCFE8'];

  const addBubble = (x: number, y: number) => {
    // Creamos varias burbujas por movimiento para un efecto más vistoso
    for (let i = 0; i < 2; i++) {
      const size = Math.random() * 3 + 6; // tamaño grande: 20px a 50px
      bubbles.current.push({
        x: x + Math.random() * 10 - 5, // ligera dispersión
        y: y + Math.random() * 10 - 5,
        size,
        opacity: Math.random() * 0.3 + 0.4, // opacidad sutil: 0.4 a 0.7
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: -(Math.random() * 0.7 + 0.3), // suben lentamente
        speedX: (Math.random() - 0.5) * 0.5, // movimiento lateral leve
      });
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bubbles.current.forEach((b, i) => {
      ctx.fillStyle = `rgba(${hexToRgb(b.color)}, ${b.opacity})`;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
      ctx.fill();

      // Movimiento y desvanecimiento
      b.y += b.speedY;
      b.x += b.speedX;
      b.opacity -= 0.01; // desvanecimiento lento

      if (b.opacity <= 0 || b.y + b.size < 0) {
        bubbles.current.splice(i, 1);
      }
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      pointer.current.x = touch.clientX;
      pointer.current.y = touch.clientY;
      addBubble(pointer.current.x, pointer.current.y);
    };

    const handleMouseMove = (e: MouseEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      addBubble(pointer.current.x, pointer.current.y);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

// Convertir hex a RGB
function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

export default BubbleTrail;

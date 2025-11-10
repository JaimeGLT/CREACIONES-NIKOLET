import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const TouchTrail = () => {
  const particles = useRef<Particle[]>([]);
  const requestRef = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const colors = ['#F9A8D4', '#F472B6', '#EC4899'];

  // Crear partículas nuevas
  const addParticle = (x: number, y: number) => {
    particles.current.push({
      x,
      y,
      size: Math.random() * 3 + 2,
      opacity: 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  // Animar estela
  const animate = () => {
    const ctx = canvasRef.current?.getContext('2d');
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((p, i) => {
      ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Reducir opacidad y tamaño para efecto fade
      p.opacity -= 0.02;
      p.size *= 0.96;

      // Eliminar partículas invisibles
      if (p.opacity <= 0) particles.current.splice(i, 1);
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Eventos para touch y mouse
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      pointer.current.x = touch.clientX;
      pointer.current.y = touch.clientY;
      addParticle(pointer.current.x, pointer.current.y);
    };

    const handleMouseMove = (e: MouseEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      addParticle(pointer.current.x, pointer.current.y);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mousemove', handleMouseMove);

    animate(); // iniciar animación

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current!);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

// Función para convertir hex a RGB
function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

export default TouchTrail;

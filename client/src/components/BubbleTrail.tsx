import React, { useRef, useEffect } from "react";

interface Bubble {
  x: number;
  y: number;
  size: number;
  opacity: number;       // opacidad actual
  initialOpacity: number; // opacidad original
  color: string;
  speedX: number;
  speedY: number;
  life: number;
}

const colors = ["#F9A8D4", "#F472B6", "#EC4899", "#FBCFE8"];

export default function BubbleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbles = useRef<Bubble[]>([]);

  const addBubble = (x: number, y: number) => {
    for (let i = 0; i < 3; i++) {
      const op = Math.random() * 0.3 + 0.4;
      bubbles.current.push({
        x: x + Math.random() * 10 - 5,
        y: y + Math.random() * 10 - 5,
        size: Math.random() * 3 + 4,
        opacity: Math.random() * 0.3 + 0.4,
        initialOpacity: op,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: -(Math.random() * 0.5 + 0.5),
        life: 1.5,
      });
    }
  };

  const animate = (ctx: CanvasRenderingContext2D, delta: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const dt = delta / 1000;
    bubbles.current.forEach((b) => {
      b.x += b.speedX;
      b.y += b.speedY;
      b.life -= dt;
      b.opacity = Math.max(0, b.life / 1.5 * b.initialOpacity);

      ctx.fillStyle = `rgba(${hexToRgb(b.color)}, ${b.opacity})`;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
      ctx.fill();
    });

    bubbles.current = bubbles.current.filter((b) => b.life > 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      addBubble(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    let lastTime = performance.now();
    const loop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      animate(ctx, delta);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

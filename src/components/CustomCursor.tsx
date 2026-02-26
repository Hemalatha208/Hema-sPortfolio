import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: any[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const createHeart = (x: number, y: number) => {
      particles.push({
        x,
        y,
        size: Math.random() * 18 + 12,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2,
        life: 80,
      });
    };

   let lastTime = 0;

const handleMouseMove = (e: MouseEvent) => {
  const now = Date.now();

  if (now - lastTime > 120) { // increase number = fewer hearts
    createHeart(e.clientX, e.clientY);
    lastTime = now;
  }
};

    window.addEventListener("mousemove", handleMouseMove);

    const drawHeart = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(
        x - size / 2,
        y - size / 2,
        x - size,
        y + size / 3,
        x,
        y + size
      );
      ctx.bezierCurveTo(
        x + size,
        y + size / 3,
        x + size / 2,
        y - size / 2,
        x,
        y
      );
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        const gradient = ctx.createRadialGradient(
  p.x,
  p.y,
  2,
  p.x,
  p.y,
  p.size
);

        // Silver core + dark fade
       gradient.addColorStop(0, "rgba(255,255,255,1)");      // bright silver core
gradient.addColorStop(0.3, "rgba(220,220,220,0.9)");  // soft silver
gradient.addColorStop(0.6, "rgba(0,150,255,0.8)");    // blue glow
gradient.addColorStop(1, "rgba(0,80,200,0)");         // fade out

        ctx.fillStyle = gradient;
        ctx.shadowColor = "rgba(255,255,255,0.4)";
        ctx.shadowBlur = 15;

        drawHeart(p.x, p.y, p.size);
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-40"
    />
  );
};

export default CustomCursor;
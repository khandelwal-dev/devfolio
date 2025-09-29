"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let points: { x: number; y: number; time: number }[] = [];
    const maxLength = 15;
    const trailLife = 800;

    const getCursorColor = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      return theme === "dark" ? "#fff" : "#000";
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      points = points.filter((p) => now - p.time < trailLife);

      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const age = now - p1.time;
        const alpha = 1 - age / trailLife;

        ctx.strokeStyle = getCursorColor();
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1; // reset alpha
      requestAnimationFrame(draw);
    };

    const handleMove = (e: MouseEvent) => {
      const elem = document.elementFromPoint(e.clientX, e.clientY);
      const cursor = elem ? window.getComputedStyle(elem).cursor : "default";

      if (cursor !== "auto" && cursor !== "default") {
        points = [];
        return;
      }

      points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      if (points.length > maxLength) points.shift();
    };

    window.addEventListener("mousemove", handleMove);
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    />
  );
}

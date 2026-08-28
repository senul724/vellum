"use client";

import React, { useEffect, useRef } from "react";

interface ConfettiCanvasProps {
  triggerKey?: number | string;
  count?: number;
  durationMs?: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  opacity: number;
  shape: "rect" | "circle" | "star";
}

export function ConfettiCanvas({ triggerKey = 0, count = 90, durationMs = 3800 }: ConfettiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const colors = [
      "#f59e0b", // Gold
      "#ec4899", // Pink
      "#8b5cf6", // Purple
      "#38bdf8", // Sky blue
      "#10b981", // Emerald
      "#fb7185", // Rose
      "#fef08a", // Shimmer yellow
      "#ffffff", // Sparkle white
    ];

    const particles: Particle[] = [];

    // Spawn burst of particles from middle or top
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * Math.PI) + (Math.PI * 0.1); // spreading upward & outward
      const speed = Math.random() * 12 + 6;
      particles.push({
        x: width * 0.5 + (Math.random() - 0.5) * 200,
        y: height * 0.45 + (Math.random() - 0.5) * 100,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: -speed - Math.random() * 6,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        opacity: 1,
        shape: Math.random() > 0.65 ? "star" : Math.random() > 0.4 ? "circle" : "rect",
      });
    }

    let animationFrameId: number;
    const startTime = Date.now();

    const render = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Physics update
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.vx *= 0.985; // air resistance
        p.rotation += p.vRot;

        // Fade out in last 25% of duration
        if (progress > 0.65) {
          p.opacity = Math.max(0, 1 - (progress - 0.65) / 0.35);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2.2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "star") {
          // Draw 4-point star / sparkle
          ctx.beginPath();
          for (let s = 0; s < 4; s++) {
            ctx.lineTo(Math.cos((s * Math.PI) / 2) * p.size, Math.sin((s * Math.PI) / 2) * p.size);
            ctx.lineTo(
              Math.cos((s * Math.PI) / 2 + Math.PI / 4) * (p.size * 0.35),
              Math.sin((s * Math.PI) / 2 + Math.PI / 4) * (p.size * 0.35)
            );
          }
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [triggerKey, count, durationMs]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

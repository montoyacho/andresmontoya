"use client";

import { useEffect, useRef } from "react";

export default function CursorLight() {
  const lightRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);
  const lastMove = useRef<number>(0);

  useEffect(() => {
    function loop() {
      const dx = mouseX.current - posX.current;
      const dy = mouseY.current - posY.current;
      const dist = Math.hypot(dx, dy);
      // faster responsiveness: quicker catch-up when far, still smooth when near
      const ease = dist > 60 ? 0.8 : 0.28;

      posX.current += dx * ease;
      posY.current += dy * ease;

      if (lightRef.current) {
        const el = lightRef.current;
        // position using left/top with CSS translate(-50%,-50%) for exact centering
        el.style.left = `${posX.current}px`;
        el.style.top = `${posY.current}px`;

        const elapsed = Date.now() - lastMove.current;
        // disappear faster when idle, show at full opacity when active
        el.style.opacity = elapsed > 400 ? "0" : "1";
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    function onMove(e: MouseEvent) {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      lastMove.current = Date.now();
      if (posX.current === 0 && posY.current === 0) {
        posX.current = mouseX.current;
        posY.current = mouseY.current;
      }
      if (!rafRef.current) rafRef.current = requestAnimationFrame(loop);
    }

    function onTouch(e: TouchEvent) {
      if (e.touches && e.touches[0]) {
        mouseX.current = e.touches[0].clientX;
        mouseY.current = e.touches[0].clientY;
        lastMove.current = Date.now();
        if (!rafRef.current) rafRef.current = requestAnimationFrame(loop);
      }
    }

    function onLeave() {
      lastMove.current = 0;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("blur", onLeave);

    if (lightRef.current) lightRef.current.style.opacity = "0";
    if (!rafRef.current) rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch as EventListener);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("blur", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-9999">
      <div ref={lightRef} className="cursor-light" />
    </div>
  );
}

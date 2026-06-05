"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-slide-up ${visible ? "in-view" : ""} ${className}`}
      aria-hidden={!visible}
    >
      {children}
    </div>
  );
}

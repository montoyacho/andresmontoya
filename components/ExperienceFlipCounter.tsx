"use client";

import { useEffect, useState } from "react";
import FlipNumbers from "react-flip-numbers";

const START_DATE = new Date("2024-03-03T00:00:00");

function getExperienceTime() {
  const now = new Date();
  const diff = Math.max(0, now.getTime() - START_DATE.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  const yearSeconds = Math.floor(365.25 * 24 * 60 * 60);

  const years = Math.floor(totalSeconds / yearSeconds);
  const days = Math.floor((totalSeconds % yearSeconds) / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { years, days, hours, minutes, seconds };
}

function getDigits(value: number) {
  if (value < 100) return 2;
  return String(value).length;
}

function FlipBlock({
  value,
  label,
  digits,
}: {
  value: number;
  label: string;
  digits?: number;
}) {
  const finalDigits = digits ?? getDigits(value);

  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-950 px-2 py-2 shadow-lg shadow-cyan-500/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/5" />

        <FlipNumbers
          play
          height={34}
          width={23}
          color="#22d3ee"
          background="transparent"
          perspective={500}
          numbers={String(value).padStart(finalDigits, "0")}
        />
      </div>

      <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
        {label}
      </span>
    </div>
  );
}

export default function ExperienceFlipCounter() {
  const [time, setTime] = useState<ReturnType<typeof getExperienceTime> | null>(null);

  useEffect(() => {
    const update = () => setTime(getExperienceTime());

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <div className="flex flex-wrap justify-center gap-3 sm:gap-4 h-20" />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      <FlipBlock value={time.years} label="Años" />
      <FlipBlock value={time.days} label="Días" />
      <FlipBlock value={time.hours} label="Horas" />
      <FlipBlock value={time.minutes} label="Min" />
      <FlipBlock value={time.seconds} label="Seg" />
    </div>
  );
}
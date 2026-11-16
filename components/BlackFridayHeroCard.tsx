"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Exact Yumping Black Friday campaign end timestamp: 30 Nov 2026 23:59:59 CET
const BF_END_TIMESTAMP = 1796079599000;

function calcRemaining() {
  const diffSec = Math.max(0, Math.floor((BF_END_TIMESTAMP - Date.now()) / 1000));
  const d = Math.floor(diffSec / 86400);
  const h = Math.floor((diffSec % 86400) / 3600);
  const m = Math.floor((diffSec % 3600) / 60);
  const s = diffSec % 60;
  const pad = (n: number) => (n < 10 ? `0${n}` : String(n));
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
}

export function BlackFridayHeroCard() {
  const [timeLeft, setTimeLeft] = useState({ d: "14", h: "02", m: "00", s: "00" });

  useEffect(() => {
    setTimeLeft(calcRemaining());
    const timer = setInterval(() => {
      setTimeLeft(calcRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="hero-bf-card" aria-label="Campaña Black Friday de buceo">
      <div className="hero-bf-badges">
        <span className="hero-bf-tag">BLACK FRIDAY</span>
        <span className="hero-bf-pct">Hasta −43 %</span>
      </div>

      <strong className="hero-bf-title">
        Regálalo sin fecha · <em>Quien lo recibe elige el día</em>
      </strong>
      <p className="hero-bf-desc">
        804 bautismos y cursos rebajados para regalar en Navidad o bucear este invierno en Canarias.
      </p>

      <div className="hero-bf-countdown-wrap">
        <small className="hero-bf-countdown-label">TERMINA EN:</small>
        <div className="hero-bf-countdown" role="timer" aria-live="off">
          <div className="hero-bf-unit">
            <b>{timeLeft.d}</b>
            <span>Días</span>
          </div>
          <i aria-hidden="true">:</i>
          <div className="hero-bf-unit">
            <b>{timeLeft.h}</b>
            <span>Horas</span>
          </div>
          <i aria-hidden="true">:</i>
          <div className="hero-bf-unit">
            <b>{timeLeft.m}</b>
            <span>Min</span>
          </div>
          <i aria-hidden="true">:</i>
          <div className="hero-bf-unit">
            <b>{timeLeft.s}</b>
            <span>Seg</span>
          </div>
        </div>
      </div>

      <Link href="/actividades/#bf=1" className="hero-bf-cta">
        Ver las 804 ofertas Black Friday <span>→</span>
      </Link>
    </aside>
  );
}

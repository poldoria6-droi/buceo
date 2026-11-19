"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Cierre oficial de la campaña Black Friday de Yumping: 30/11/2026 23:59:59 (hora de Madrid)
const BF_END_TIMESTAMP = 1796079599000;

function calcRemaining() {
  const diffSec = Math.max(0, Math.floor((BF_END_TIMESTAMP - Date.now()) / 1000));
  const d = Math.floor(diffSec / 86400);
  const h = Math.floor((diffSec % 86400) / 3600);
  const m = Math.floor((diffSec % 3600) / 60);
  const s = diffSec % 60;
  const pad = (n: number) => (n < 10 ? `0${n}` : String(n));
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s), expired: diffSec === 0 };
}

export function BlackFridayHeroCard({
  offerCount = 804,
  maxPct = 43,
}: {
  offerCount?: number;
  maxPct?: number;
}) {
  // Estado inicial neutro: evita desajustes de hidratación entre el HTML estático y el reloj del navegador.
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calcRemaining> | null>(null);

  useEffect(() => {
    setTimeLeft(calcRemaining());
    const timer = setInterval(() => {
      setTimeLeft(calcRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft?.expired) return null;
  const v = timeLeft ?? { d: "--", h: "--", m: "--", s: "--" };

  return (
    <aside className="hero-bf-card" aria-label="Campaña Black Friday de buceo">
      <div className="hero-bf-badges">
        <span className="hero-bf-tag">BLACK FRIDAY</span>
        <span className="hero-bf-pct">Hasta −{maxPct} %</span>
      </div>

      <strong className="hero-bf-title">
        Regálalo sin fecha · <em>Quien lo recibe elige el día</em>
      </strong>
      <p className="hero-bf-desc">
        {offerCount} bautismos, cursos y salidas de buceo rebajados en toda España. Resérvalos con descuento o regálalos.
      </p>

      <div className="hero-bf-countdown-wrap">
        <small className="hero-bf-countdown-label">TERMINA EN:</small>
        <div className="hero-bf-countdown" role="timer" aria-live="off">
          <div className="hero-bf-unit">
            <b>{v.d}</b>
            <span>Días</span>
          </div>
          <i aria-hidden="true">:</i>
          <div className="hero-bf-unit">
            <b>{v.h}</b>
            <span>Horas</span>
          </div>
          <i aria-hidden="true">:</i>
          <div className="hero-bf-unit">
            <b>{v.m}</b>
            <span>Min</span>
          </div>
          <i aria-hidden="true">:</i>
          <div className="hero-bf-unit">
            <b>{v.s}</b>
            <span>Seg</span>
          </div>
        </div>
      </div>

      <Link href="/actividades/#bf=1" className="hero-bf-cta">
        Ver las {offerCount} ofertas Black Friday <span>→</span>
      </Link>
    </aside>
  );
}

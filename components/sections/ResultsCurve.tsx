"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { curveCopy, curveHeading } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

// Konfigurace grafu — jiná pro mobil (vyšší formát, velké písmo, méně popisků)
// a pro desktop (širší, jemnější). Geometrie se počítá z těchto čísel.
type ChartCfg = {
  W: number;
  H: number;
  pad: { top: number; right: number; bottom: number; left: number };
  fMonth: number;
  fAxis: number;
  fMarker: number;
  fLegend: number;
  sReality: number;
  sExpected: number;
  legendW: number;
  legendH: number;
  rQuit: number;
  rPayoff: number;
  markerLine: number; // délka vodítka od bodu k popisku
  showLegend: boolean;
  payoffLabelUp: boolean; // popisek „výsledky" nad bodem (mobil) vs pod ním (desktop)
  months: { label: string; t: number }[];
};

const DESKTOP: ChartCfg = {
  W: 720,
  H: 430,
  pad: { top: 40, right: 40, bottom: 64, left: 40 },
  fMonth: 16,
  fAxis: 13,
  fMarker: 15,
  fLegend: 14,
  sReality: 4,
  sExpected: 2.25,
  legendW: 215,
  legendH: 60,
  rQuit: 7,
  rPayoff: 8,
  markerLine: 50,
  showLegend: true,
  payoffLabelUp: false,
  months: [
    { label: "Týden 1", t: 0 },
    { label: "Měsíc 2", t: 0.2 },
    { label: "Měsíc 3", t: 0.4 },
    { label: "Měsíc 4", t: 0.6 },
    { label: "Měsíc 5", t: 0.8 },
    { label: "Měsíc 6+", t: 1 },
  ],
};

const MOBILE: ChartCfg = {
  W: 600,
  H: 540,
  pad: { top: 54, right: 30, bottom: 88, left: 30 },
  fMonth: 28,
  fAxis: 23,
  fMarker: 25,
  fLegend: 24,
  sReality: 7,
  sExpected: 4,
  legendW: 330,
  legendH: 98,
  rQuit: 11,
  rPayoff: 12,
  markerLine: 74,
  showLegend: false,
  payoffLabelUp: true,
  months: [
    { label: "Týden 1", t: 0 },
    { label: "Měsíc 3", t: 0.5 },
    { label: "Měsíc 6+", t: 1 },
  ],
};

function Chart({ cfg, inView }: { cfg: ChartCfg; inView: boolean }) {
  const { W, H, pad } = cfg;
  const innerW = W - pad.left - pad.right;
  const innerH = H - pad.top - pad.bottom;

  // Realita: hokejka (mírně exponenciální křivka)
  const realityPoints = (t: number) => Math.pow(t, 3.4);

  const steps = 60;
  const realityPath: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = pad.left + t * innerW;
    const y = pad.top + innerH - realityPoints(t) * innerH;
    realityPath.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  const expectedStart = { x: pad.left, y: pad.top + innerH };
  const expectedEnd = { x: pad.left + innerW, y: pad.top };

  const quitT0 = 0.32;
  const quitT1 = 0.55;
  const quitX0 = pad.left + quitT0 * innerW;
  const quitX1 = pad.left + quitT1 * innerW;

  const quitMarkerT = 0.45;
  const quitMarkerX = pad.left + quitMarkerT * innerW;
  const quitMarkerY = pad.top + innerH - realityPoints(quitMarkerT) * innerH;

  const payoffT = 0.85;
  const payoffX = pad.left + payoffT * innerW;
  const payoffY = pad.top + innerH - realityPoints(payoffT) * innerH;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Graf: očekávaný lineární vs reálný exponenciální růst výsledků"
    >
      <defs>
        <linearGradient id="realityFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A6B52" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1A6B52" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="quitZoneFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A8580" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#7A8580" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* Mřížka */}
      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1={pad.left}
          x2={pad.left + innerW}
          y1={pad.top + innerH - t * innerH}
          y2={pad.top + innerH - t * innerH}
          stroke="rgba(232,230,225,0.05)"
          strokeWidth={1}
        />
      ))}

      {/* Quit zone */}
      <motion.rect
        x={quitX0}
        y={pad.top}
        width={quitX1 - quitX0}
        height={innerH}
        fill="url(#quitZoneFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />

      {/* Osy */}
      <line
        x1={pad.left}
        x2={pad.left + innerW}
        y1={pad.top + innerH}
        y2={pad.top + innerH}
        stroke="rgba(232,230,225,0.15)"
        strokeWidth={1}
      />
      <line
        x1={pad.left}
        x2={pad.left}
        y1={pad.top}
        y2={pad.top + innerH}
        stroke="rgba(232,230,225,0.15)"
        strokeWidth={1}
      />

      {/* Popisky času (X) */}
      {cfg.months.map((m, i) => {
        const x = pad.left + m.t * innerW;
        return (
          <text
            key={m.label}
            x={x}
            y={pad.top + innerH + cfg.fMonth + 12}
            fontSize={cfg.fMonth}
            fill="rgba(232,230,225,0.5)"
            textAnchor={i === 0 ? "start" : i === cfg.months.length - 1 ? "end" : "middle"}
            fontFamily="system-ui, sans-serif"
          >
            {m.label}
          </text>
        );
      })}

      {/* Popisek osy Y */}
      <text
        x={pad.left}
        y={pad.top - 16}
        fontSize={cfg.fAxis}
        fill="rgba(232,230,225,0.45)"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.12em"
      >
        VIDITELNÉ VÝSLEDKY →
      </text>

      {/* Očekávání (lineární, čárkované) */}
      <motion.line
        x1={expectedStart.x}
        y1={expectedStart.y}
        x2={expectedEnd.x}
        y2={expectedEnd.y}
        stroke="rgba(232,230,225,0.35)"
        strokeWidth={cfg.sExpected}
        strokeDasharray="7 7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />

      {/* Realita — výplň */}
      <motion.path
        d={`${realityPath.join(" ")} L ${pad.left + innerW} ${pad.top + innerH} L ${pad.left} ${pad.top + innerH} Z`}
        fill="url(#realityFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      />

      {/* Realita — čára */}
      <motion.path
        d={realityPath.join(" ")}
        fill="none"
        stroke="#1A6B52"
        strokeWidth={cfg.sReality}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
      />

      {/* Bod „tady končí většina" */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <circle cx={quitMarkerX} cy={quitMarkerY} r={cfg.rQuit} fill="#0B0F0D" stroke="#7A8580" strokeWidth={2.5} />
        <line
          x1={quitMarkerX}
          y1={quitMarkerY - cfg.rQuit - 4}
          x2={quitMarkerX}
          y2={quitMarkerY - cfg.markerLine}
          stroke="rgba(122,133,128,0.5)"
          strokeWidth={1.25}
          strokeDasharray="3 3"
        />
        <text
          x={quitMarkerX}
          y={quitMarkerY - cfg.markerLine - 8}
          fontSize={cfg.fMarker}
          fill="#9AA39E"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontWeight="600"
        >
          {curveCopy.quitZoneLabel}
        </text>
      </motion.g>

      {/* Bod „tady přicházejí výsledky" */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 2.1 }}
      >
        <circle cx={payoffX} cy={payoffY} r={cfg.rPayoff} fill="#1A6B52" stroke="#0B0F0D" strokeWidth={2.5} />
        <line
          x1={payoffX}
          y1={cfg.payoffLabelUp ? payoffY - cfg.rPayoff - 4 : payoffY + cfg.rPayoff + 4}
          x2={payoffX}
          y2={cfg.payoffLabelUp ? payoffY - cfg.markerLine : payoffY + cfg.markerLine}
          stroke="rgba(26,107,82,0.7)"
          strokeWidth={1.25}
          strokeDasharray="3 3"
        />
        <text
          x={payoffX}
          y={cfg.payoffLabelUp ? payoffY - cfg.markerLine - 8 : payoffY + cfg.markerLine + cfg.fMarker}
          fontSize={cfg.fMarker}
          fill="#2E9C78"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
        >
          {curveCopy.payoffZoneLabel}
        </text>
      </motion.g>

      {/* Legenda — jen desktop (na mobilu by se prala o místo) */}
      {cfg.showLegend && (
      <g transform={`translate(${pad.left + 8}, ${pad.top + 8})`}>
        <rect width={cfg.legendW} height={cfg.legendH} rx="8" fill="rgba(11,15,13,0.72)" />
        <line
          x1={cfg.legendH * 0.28}
          y1={cfg.legendH * 0.36}
          x2={cfg.legendH * 0.72}
          y2={cfg.legendH * 0.36}
          stroke="rgba(232,230,225,0.35)"
          strokeWidth={cfg.sExpected}
          strokeDasharray="5 5"
        />
        <text
          x={cfg.legendH * 0.86}
          y={cfg.legendH * 0.36 + cfg.fLegend * 0.36}
          fontSize={cfg.fLegend}
          fill="rgba(232,230,225,0.7)"
          fontFamily="system-ui, sans-serif"
        >
          {curveCopy.expectedLabel}
        </text>
        <line
          x1={cfg.legendH * 0.28}
          y1={cfg.legendH * 0.72}
          x2={cfg.legendH * 0.72}
          y2={cfg.legendH * 0.72}
          stroke="#1A6B52"
          strokeWidth={cfg.sReality * 0.8}
        />
        <text
          x={cfg.legendH * 0.86}
          y={cfg.legendH * 0.72 + cfg.fLegend * 0.36}
          fontSize={cfg.fLegend}
          fill="rgba(232,230,225,0.95)"
          fontFamily="system-ui, sans-serif"
          fontWeight="600"
        >
          {curveCopy.realityLabel}
        </text>
      </g>
      )}
    </svg>
  );
}

export function ResultsCurve() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-20 pb-10 sm:py-28 bg-graphite">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald/10 text-emerald-light px-3 py-1 text-xs uppercase tracking-[0.15em] mb-5">
            <TrendingUp className="h-3.5 w-3.5" />
            Psychologie výsledků
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            {curveHeading.title}
          </motion.h2>
          {curveHeading.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
            >
              {curveHeading.subtitle}
            </motion.p>
          )}
        </div>

        <div
          ref={ref}
          className="relative rounded-2xl bg-ink/60 border border-bone/5 p-2 sm:p-8 overflow-hidden"
        >
          {/* Mobil: vyšší formát, velké písmo */}
          <div className="sm:hidden">
            <Chart cfg={MOBILE} inView={inView} />
          </div>
          {/* Desktop: širší, jemnější */}
          <div className="hidden sm:block">
            <Chart cfg={DESKTOP} inView={inView} />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-10 max-w-3xl text-[1.0625rem] leading-relaxed text-bone/75"
        >
          {renderInline(curveCopy.body)}
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp } from "lucide-react";
import { curveCopy, curveHeading } from "@/lib/content";
import { renderInline } from "@/lib/markdown";

export function ResultsCurve() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Viewbox dimensions (uvnitř paddingu)
  const W = 720;
  const H = 360;
  const PAD = { top: 36, right: 40, bottom: 56, left: 40 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  // Realita: hokejka. 0–6 měsíc, y od 0 do 1 (relativní výsledek).
  // První 4-5 měsíců plochý růst, pak strmý zlom.
  const realityPoints = (t: number) => {
    // Mírně exponenciální křivka
    return Math.pow(t, 3.4);
  };

  const steps = 60;
  const realityPath: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = PAD.left + t * innerW;
    const y = PAD.top + innerH - realityPoints(t) * innerH;
    realityPath.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  // Lineární očekávání
  const expectedStart = { x: PAD.left, y: PAD.top + innerH };
  const expectedEnd = { x: PAD.left + innerW, y: PAD.top };

  // Quit zone: cca t = 0.3 – 0.55
  const quitT0 = 0.32;
  const quitT1 = 0.55;
  const quitX0 = PAD.left + quitT0 * innerW;
  const quitX1 = PAD.left + quitT1 * innerW;

  // Bod kde končí "většina lidí" — t = 0.45
  const quitMarkerT = 0.45;
  const quitMarkerX = PAD.left + quitMarkerT * innerW;
  const quitMarkerY = PAD.top + innerH - realityPoints(quitMarkerT) * innerH;

  // Bod kde výsledky přicházejí — t = 0.85
  const payoffT = 0.85;
  const payoffX = PAD.left + payoffT * innerW;
  const payoffY = PAD.top + innerH - realityPoints(payoffT) * innerH;

  // Časové popisky
  const monthLabels = ["Týden 1", "Měsíc 2", "Měsíc 3", "Měsíc 4", "Měsíc 5", "Měsíc 6+"];

  return (
    <section className="py-20 sm:py-28 bg-graphite">
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
          className="relative rounded-2xl bg-ink/60 border border-bone/5 p-5 sm:p-8 overflow-hidden"
        >
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

            {/* Mřížka (horizontální linky) */}
            {[0.25, 0.5, 0.75].map((t) => (
              <line
                key={t}
                x1={PAD.left}
                x2={PAD.left + innerW}
                y1={PAD.top + innerH - t * innerH}
                y2={PAD.top + innerH - t * innerH}
                stroke="rgba(232,230,225,0.05)"
                strokeWidth={1}
              />
            ))}

            {/* Quit zone */}
            <motion.rect
              x={quitX0}
              y={PAD.top}
              width={quitX1 - quitX0}
              height={innerH}
              fill="url(#quitZoneFill)"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            {/* Axes */}
            <line
              x1={PAD.left}
              x2={PAD.left + innerW}
              y1={PAD.top + innerH}
              y2={PAD.top + innerH}
              stroke="rgba(232,230,225,0.15)"
              strokeWidth={1}
            />
            <line
              x1={PAD.left}
              x2={PAD.left}
              y1={PAD.top}
              y2={PAD.top + innerH}
              stroke="rgba(232,230,225,0.15)"
              strokeWidth={1}
            />

            {/* X-axis labels */}
            {monthLabels.map((label, i) => {
              const x = PAD.left + (i / (monthLabels.length - 1)) * innerW;
              return (
                <text
                  key={label}
                  x={x}
                  y={PAD.top + innerH + 22}
                  fontSize="11"
                  fill="rgba(232,230,225,0.4)"
                  textAnchor={i === 0 ? "start" : i === monthLabels.length - 1 ? "end" : "middle"}
                  fontFamily="system-ui, sans-serif"
                >
                  {label}
                </text>
              );
            })}

            {/* Y-axis label */}
            <text
              x={PAD.left}
              y={PAD.top - 14}
              fontSize="10"
              fill="rgba(232,230,225,0.4)"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.15em"
            >
              VIDITELNÉ VÝSLEDKY →
            </text>

            {/* Expected (linear, dashed) */}
            <motion.line
              x1={expectedStart.x}
              y1={expectedStart.y}
              x2={expectedEnd.x}
              y2={expectedEnd.y}
              stroke="rgba(232,230,225,0.35)"
              strokeWidth={1.5}
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />

            {/* Reality fill */}
            <motion.path
              d={`${realityPath.join(" ")} L ${PAD.left + innerW} ${PAD.top + innerH} L ${PAD.left} ${PAD.top + innerH} Z`}
              fill="url(#realityFill)"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            />

            {/* Reality line */}
            <motion.path
              d={realityPath.join(" ")}
              fill="none"
              stroke="#1A6B52"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            />

            {/* Quit marker */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <circle
                cx={quitMarkerX}
                cy={quitMarkerY}
                r={6}
                fill="#0B0F0D"
                stroke="#7A8580"
                strokeWidth={2}
              />
              <line
                x1={quitMarkerX}
                y1={quitMarkerY - 8}
                x2={quitMarkerX}
                y2={quitMarkerY - 48}
                stroke="rgba(122,133,128,0.5)"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              <text
                x={quitMarkerX}
                y={quitMarkerY - 56}
                fontSize="11"
                fill="#7A8580"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
                fontWeight="500"
              >
                {curveCopy.quitZoneLabel}
              </text>
            </motion.g>

            {/* Payoff marker */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              <circle
                cx={payoffX}
                cy={payoffY}
                r={7}
                fill="#1A6B52"
                stroke="#0B0F0D"
                strokeWidth={2}
              />
              <line
                x1={payoffX}
                y1={payoffY + 10}
                x2={payoffX}
                y2={payoffY + 42}
                stroke="rgba(26,107,82,0.7)"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              <text
                x={payoffX}
                y={payoffY + 58}
                fontSize="11"
                fill="#1A6B52"
                textAnchor="end"
                fontFamily="system-ui, sans-serif"
                fontWeight="600"
              >
                {curveCopy.payoffZoneLabel}
              </text>
            </motion.g>

            {/* Legend */}
            <g transform={`translate(${PAD.left + 8}, ${PAD.top + 8})`}>
              <rect width="170" height="48" rx="6" fill="rgba(11,15,13,0.7)" />
              <line x1="14" y1="18" x2="34" y2="18" stroke="rgba(232,230,225,0.35)" strokeWidth={1.5} strokeDasharray="4 4" />
              <text x="42" y="22" fontSize="11" fill="rgba(232,230,225,0.7)" fontFamily="system-ui, sans-serif">{curveCopy.expectedLabel}</text>
              <line x1="14" y1="36" x2="34" y2="36" stroke="#1A6B52" strokeWidth={2.5} />
              <text x="42" y="40" fontSize="11" fill="rgba(232,230,225,0.95)" fontFamily="system-ui, sans-serif" fontWeight="600">{curveCopy.realityLabel}</text>
            </g>
          </svg>
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

"use client";

import { useMemo, useState } from "react";

type Goal = "lose" | "gain";
type Sex = "male" | "female";

const ACTIVITY_OPTIONS = [
  { value: 1.2, label: "Sedavé (kancelář, minimum pohybu)" },
  { value: 1.375, label: "Lehká (1–3× týdně lehký pohyb)" },
  { value: 1.55, label: "Střední (3–5× týdně cvičení)" },
  { value: 1.725, label: "Vysoká (6–7× týdně, fyzicky náročná práce)" },
];

const KCAL_PER_KG = 7700;

function formatKcal(n: number) {
  return Math.round(n).toLocaleString("cs-CZ");
}

function formatWeeks(weeks: number) {
  if (weeks < 8) return `${Math.round(weeks)} týdnů`;
  const months = weeks / 4.33;
  return `${months.toFixed(1)} měsíce`;
}

function Silhouette({
  sex,
  bodyFat,
  color,
  label,
}: {
  sex: Sex;
  bodyFat: number;
  color: string;
  label: string;
}) {
  const bf = Math.max(0, Math.min(1, (bodyFat - 8) / 32));

  let shoulderW: number;
  let waistW: number;
  let hipW: number;
  if (sex === "male") {
    shoulderW = 36 + bf * 12;
    waistW = 20 + bf * 18;
    hipW = 26 + bf * 12;
  } else {
    shoulderW = 26 + bf * 10;
    waistW = 17 + bf * 14;
    hipW = 32 + bf * 10;
  }

  const cx = 50;
  const headTop = 8;
  const headR = 8;
  const headBottom = headTop + headR * 2;
  const neckBottom = headBottom + 3;
  const shoulderY = neckBottom + 4;
  const waistY = shoulderY + 32;
  const hipY = waistY + 14;
  const kneeY = hipY + 38;
  const ankleY = kneeY + 36;
  const footY = ankleY + 4;
  const crotchX = 1;
  const calfFactor = 0.55;

  const d = `
    M ${cx} ${headTop}
    A ${headR} ${headR} 0 1 1 ${cx - 0.01} ${headTop}
    L ${cx - 3} ${neckBottom}
    L ${cx - shoulderW / 2} ${shoulderY}
    Q ${cx - shoulderW / 2 - 1} ${shoulderY + 10}, ${cx - waistW / 2} ${waistY}
    Q ${cx - (waistW + hipW) / 4} ${(waistY + hipY) / 2}, ${cx - hipW / 2} ${hipY}
    L ${cx - (hipW / 2) * calfFactor} ${kneeY}
    L ${cx - (hipW / 2) * calfFactor * 0.85} ${ankleY}
    L ${cx - (hipW / 2) * calfFactor * 0.9} ${footY}
    L ${cx - crotchX} ${footY}
    L ${cx - crotchX} ${hipY + 6}
    L ${cx + crotchX} ${hipY + 6}
    L ${cx + crotchX} ${footY}
    L ${cx + (hipW / 2) * calfFactor * 0.9} ${footY}
    L ${cx + (hipW / 2) * calfFactor * 0.85} ${ankleY}
    L ${cx + (hipW / 2) * calfFactor} ${kneeY}
    L ${cx + hipW / 2} ${hipY}
    Q ${cx + (waistW + hipW) / 4} ${(waistY + hipY) / 2}, ${cx + waistW / 2} ${waistY}
    Q ${cx + shoulderW / 2 + 1} ${shoulderY + 10}, ${cx + shoulderW / 2} ${shoulderY}
    L ${cx + 3} ${neckBottom}
    Z
  `;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 100 200" className="h-48 w-auto sm:h-56">
        <path d={d} fill={color} style={{ transition: "all 0.4s ease-out" }} />
      </svg>
      <span className="text-xs uppercase tracking-[0.18em] text-mute">{label}</span>
    </div>
  );
}

function ToggleGroup<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="inline-flex rounded-xl bg-ink/60 p-1 border border-bone/5 w-full">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={
            "flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 " +
            (value === opt.value
              ? "bg-emerald text-bone shadow-sm"
              : "text-bone/70 hover:text-bone")
          }
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function Slider({
  label,
  unit,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-sm text-bone/70">{label}</label>
        <span className="font-display text-xl font-semibold text-bone">
          {value}
          <span className="text-sm text-mute ml-1">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none bg-ink/60 accent-emerald-light cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-light [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-emerald-light [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
      />
      <div className="flex justify-between mt-1 text-[0.7rem] text-mute">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="bg-graphite rounded-xl p-5 border border-bone/5">
      <div className="text-xs uppercase tracking-[0.15em] text-mute mb-2">{label}</div>
      <div className="font-display text-2xl font-semibold text-bone leading-tight">
        {value}
      </div>
      {sub && <div className="mt-1 text-xs text-mute">{sub}</div>}
    </div>
  );
}

export function FitnessCalculator({ ctaHref = "/#kontakt" }: { ctaHref?: string }) {
  const [goal, setGoal] = useState<Goal>("lose");
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(178);
  const [currentWeight, setCurrentWeight] = useState(85);
  const [targetWeight, setTargetWeight] = useState(75);
  const [activity, setActivity] = useState(1.55);

  const results = useMemo(() => {
    const bmr =
      10 * currentWeight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
    const tdee = bmr * activity;

    const heightM = height / 100;
    const bmiCurrent = currentWeight / (heightM * heightM);
    const bmiTarget = targetWeight / (heightM * heightM);

    const bfMale = sex === "male" ? 1 : 0;
    const bodyFatCurrent = 1.2 * bmiCurrent + 0.23 * age - 10.8 * bfMale - 5.4;
    const bodyFatTarget = 1.2 * bmiTarget + 0.23 * age - 10.8 * bfMale - 5.4;

    const weightDiff = Math.abs(currentWeight - targetWeight);
    const sameWeight = weightDiff < 0.5;

    const minPct = goal === "lose" ? 0.005 : 0.0025;
    const maxPct = goal === "lose" ? 0.01 : 0.005;
    const minKgPerWeek = currentWeight * minPct;
    const maxKgPerWeek = currentWeight * maxPct;

    const minWeeks = sameWeight ? 0 : Math.ceil(weightDiff / maxKgPerWeek);
    const maxWeeks = sameWeight ? 0 : Math.ceil(weightDiff / minKgPerWeek);

    const minDailyDelta = (minKgPerWeek * KCAL_PER_KG) / 7;
    const maxDailyDelta = (maxKgPerWeek * KCAL_PER_KG) / 7;

    let kcalLow: number;
    let kcalHigh: number;
    if (goal === "lose") {
      kcalLow = tdee - maxDailyDelta;
      kcalHigh = tdee - minDailyDelta;
    } else {
      kcalLow = tdee + minDailyDelta;
      kcalHigh = tdee + maxDailyDelta;
    }
    const kcalFloor = Math.max(1200, kcalLow);

    return {
      bmr,
      tdee,
      bmiCurrent,
      bmiTarget,
      bodyFatCurrent,
      bodyFatTarget,
      weightDiff,
      sameWeight,
      minWeeks,
      maxWeeks,
      kcalLow: kcalFloor,
      kcalHigh,
    };
  }, [goal, sex, age, height, currentWeight, targetWeight, activity]);

  const goalLabel =
    goal === "lose" ? "Cílová váha (méně)" : "Cílová váha (více)";
  const directionLabel = goal === "lose" ? "shozená" : "nabrána";

  return (
    <div className="bg-ink-graphite rounded-3xl p-6 sm:p-10 border border-bone/10">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14">
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-3">
              Cíl
            </div>
            <ToggleGroup
              value={goal}
              onChange={setGoal}
              options={[
                { value: "lose", label: "Hubnutí" },
                { value: "gain", label: "Nabírání svalů" },
              ]}
            />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-3">
              Pohlaví
            </div>
            <ToggleGroup
              value={sex}
              onChange={setSex}
              options={[
                { value: "male", label: "Muž" },
                { value: "female", label: "Žena" },
              ]}
            />
          </div>

          <Slider
            label="Věk"
            unit="let"
            value={age}
            min={16}
            max={75}
            onChange={setAge}
          />
          <Slider
            label="Výška"
            unit="cm"
            value={height}
            min={140}
            max={210}
            onChange={setHeight}
          />
          <Slider
            label="Současná váha"
            unit="kg"
            value={currentWeight}
            min={40}
            max={160}
            onChange={setCurrentWeight}
          />
          <Slider
            label={goalLabel}
            unit="kg"
            value={targetWeight}
            min={40}
            max={160}
            onChange={setTargetWeight}
          />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-2">
              Úroveň aktivity
            </div>
            <select
              value={activity}
              onChange={(e) => setActivity(Number(e.target.value))}
              className="w-full h-12 px-4 rounded-xl bg-ink/60 border border-bone/10 text-bone font-medium focus:outline-none focus:border-emerald/40 transition-colors cursor-pointer"
            >
              {ACTIVITY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-ink">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-graphite/60 rounded-2xl p-6 sm:p-8 border border-bone/5">
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-3">
              Realistický čas k cíli
            </div>
            {results.sameWeight ? (
              <div className="font-display text-3xl font-semibold text-bone">
                Cílová váha je tvoje současná.
              </div>
            ) : (
              <>
                <div className="font-display text-display-lg font-semibold text-bone leading-none">
                  {formatWeeks(results.minWeeks)}
                  <span className="text-mute mx-2">až</span>
                  {formatWeeks(results.maxWeeks)}
                </div>
                <div className="mt-3 text-sm text-bone/65">
                  Při udržitelném tempu pro {results.weightDiff.toFixed(1)} kg{" "}
                  {directionLabel}.
                </div>
              </>
            )}
          </div>

          <div className="bg-graphite/60 rounded-2xl p-6 sm:p-8 border border-bone/5">
            <div className="flex items-end justify-around gap-4">
              <Silhouette
                sex={sex}
                bodyFat={results.bodyFatCurrent}
                color="#7A8580"
                label="Teď"
              />
              <div className="text-mute text-2xl pb-12" aria-hidden>
                →
              </div>
              <Silhouette
                sex={sex}
                bodyFat={results.bodyFatTarget}
                color="#1A6B52"
                label="Cíl"
              />
            </div>
            <div className="mt-4 text-center text-xs text-mute">
              Orientační silueta podle odhadu tělesného tuku.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Metric
              label="Denní příjem"
              value={
                results.sameWeight
                  ? `${formatKcal(results.tdee)} kcal`
                  : `${formatKcal(results.kcalLow)}–${formatKcal(results.kcalHigh)}`
              }
              sub={results.sameWeight ? "Udržovací" : "kcal pro tvůj cíl"}
            />
            <Metric
              label="TDEE"
              value={`${formatKcal(results.tdee)} kcal`}
              sub="Tvoje udržovací"
            />
            <Metric
              label="BMI teď"
              value={results.bmiCurrent.toFixed(1)}
              sub={`Tělesný tuk ~${Math.max(3, results.bodyFatCurrent).toFixed(0)} %`}
            />
            <Metric
              label="BMI cíl"
              value={results.bmiTarget.toFixed(1)}
              sub={`Tělesný tuk ~${Math.max(3, results.bodyFatTarget).toFixed(0)} %`}
            />
          </div>

          <a
            href={ctaHref}
            className="group flex items-center justify-center gap-2 h-14 px-7 rounded-xl bg-emerald hover:bg-emerald-light text-bone font-medium transition-all duration-200 active:scale-[0.98]"
          >
            Chci osobní plán
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </a>

          <p className="text-xs text-mute leading-relaxed">
            Orientační výpočet. Skutečný průběh ovlivňuje genetika, spánek,
            stres a historie tréninku. Přesný plán doladíme spolu na konzultaci.
          </p>
        </div>
      </div>
    </div>
  );
}

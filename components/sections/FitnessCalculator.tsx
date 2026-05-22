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

function pluralMonths(n: number) {
  if (n === 1) return "měsíc";
  if (n >= 2 && n <= 4) return "měsíce";
  return "měsíců";
}

function formatTimeRange(minWeeks: number, maxWeeks: number) {
  if (maxWeeks < 8) {
    const lo = Math.round(minWeeks);
    const hi = Math.round(maxWeeks);
    if (lo === hi) return `${lo} týdnů`;
    return `${lo} až ${hi} týdnů`;
  }
  const minM = Math.max(1, Math.round(minWeeks / 4.33));
  const maxM = Math.max(1, Math.ceil(maxWeeks / 4.33));
  if (minM === maxM) return `${minM} ${pluralMonths(minM)}`;
  return `${minM} až ${maxM} ${pluralMonths(maxM)}`;
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
              Časový horizont k cíli
            </div>
            {results.sameWeight ? (
              <div className="font-display text-3xl font-semibold text-bone">
                Cílová váha je tvoje současná.
              </div>
            ) : (
              <>
                <div className="font-display text-display-lg font-semibold text-bone leading-none">
                  {formatTimeRange(results.minWeeks, results.maxWeeks)}
                </div>
                <div className="mt-3 text-sm text-bone/65">
                  Orientační rámec pro {Math.round(results.weightDiff)} kg{" "}
                  {directionLabel}. Při udržitelném tempu, žádné nárazové diety.
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Metric
              label="Doporučený denní příjem"
              value={
                results.sameWeight
                  ? `${formatKcal(results.tdee)} kcal`
                  : `${formatKcal(results.kcalLow)}–${formatKcal(results.kcalHigh)} kcal`
              }
              sub={
                results.sameWeight
                  ? "Pro udržení váhy"
                  : "Co bys měl/a sníst denně"
              }
            />
            <Metric
              label="Co spálíš za den"
              value={`${formatKcal(results.tdee)} kcal`}
              sub="Tvoje celková spotřeba"
            />
            <Metric
              label="BMI teď"
              value={results.bmiCurrent.toFixed(1)}
              sub={`Tělesný tuk ~${Math.max(3, results.bodyFatCurrent).toFixed(0)} %`}
            />
            <Metric
              label="BMI po dosažení cíle"
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

          <div className="rounded-2xl border border-emerald/30 bg-emerald/[0.08] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald text-bone text-sm font-bold">
                ✓
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-bone">
                  Garance výsledku
                </div>
                <p className="mt-1.5 text-sm text-bone/80 leading-relaxed">
                  Pokud kalkulačku vyplníš{" "}
                  <strong className="text-bone">pravdivě</strong>, my společně
                  nastavíme plán a ty ho{" "}
                  <strong className="text-bone">dodržíš do konce</strong>, a
                  výsledku nedosáhneš,{" "}
                  <strong className="text-emerald-light">
                    vrátím ti peníze.
                  </strong>{" "}
                  Férové pro tebe, férové pro mě.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-mute leading-relaxed">
            Výsledek ovlivňuje{" "}
            <span className="text-bone/85">
              genetika, spánek, stres a historie tréninku
            </span>
            . Proto rozsahy, ne přesná čísla. Přesný plán doladíme spolu na
            konzultaci.
          </p>
        </div>
      </div>
    </div>
  );
}

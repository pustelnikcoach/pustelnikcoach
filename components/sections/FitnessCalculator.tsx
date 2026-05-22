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

  let s: number;
  let c: number;
  let w: number;
  let h: number;
  if (sex === "male") {
    s = 18 + bf * 3.5;
    c = 16 + bf * 5;
    w = 11 + bf * 11;
    h = 14 + bf * 7;
  } else {
    s = 14 + bf * 3;
    c = 13 + bf * 4;
    w = 10 + bf * 9;
    h = 17 + bf * 6;
  }

  const cx = 50;
  const HEAD_TOP = 6;
  const HEAD_R = 6.5;
  const NECK_BOT = HEAD_TOP + HEAD_R * 2 + 2;
  const SHOULDER_Y = NECK_BOT + 3;
  const CHEST_Y = SHOULDER_Y + 14;
  const WAIST_Y = CHEST_Y + 16;
  const HIP_Y = WAIST_Y + 12;
  const CROTCH_Y = HIP_Y + 6;
  const KNEE_Y = HIP_Y + 38;
  const CALF_Y = KNEE_Y + 16;
  const ANKLE_Y = CALF_Y + 14;
  const FOOT_Y = ANKLE_Y + 4;

  const ELBOW_Y = WAIST_Y;
  const WRIST_Y = HIP_Y + 3;
  const ARM_OUTER = s + 1;
  const ELBOW_OUTER = c + 2;
  const WRIST_OUTER = w + 4;
  const WRIST_INNER = WRIST_OUTER - 3;
  const ELBOW_INNER = ELBOW_OUTER - 4;

  const THIGH_OUTER = h * 0.6;
  const KNEE_OUTER = h * 0.42;
  const CALF_OUTER = h * 0.42;
  const ANKLE_OUTER = h * 0.26;
  const FOOT_OUTER = ANKLE_OUTER + 1.2;

  const d = [
    `M ${cx} ${HEAD_TOP}`,
    `A ${HEAD_R} ${HEAD_R + 1} 0 1 1 ${cx - 0.01} ${HEAD_TOP}`,
    `L ${cx - 2.3} ${NECK_BOT}`,
    `Q ${cx - s + 1} ${SHOULDER_Y - 1}, ${cx - s} ${SHOULDER_Y}`,
    `Q ${cx - ARM_OUTER - 1} ${(SHOULDER_Y + ELBOW_Y) / 2}, ${cx - ELBOW_OUTER} ${ELBOW_Y}`,
    `Q ${cx - WRIST_OUTER - 1} ${(ELBOW_Y + WRIST_Y) / 2}, ${cx - WRIST_OUTER} ${WRIST_Y}`,
    `Q ${cx - WRIST_OUTER + 1} ${WRIST_Y + 3}, ${cx - WRIST_INNER} ${WRIST_Y + 1}`,
    `L ${cx - ELBOW_INNER} ${ELBOW_Y - 1}`,
    `Q ${cx - c + 1} ${CHEST_Y + 4}, ${cx - c} ${CHEST_Y}`,
    `Q ${cx - c + 1} ${(CHEST_Y + WAIST_Y) / 2 + 1}, ${cx - w} ${WAIST_Y}`,
    `Q ${cx - (w + h) / 2 - 0.5} ${(WAIST_Y + HIP_Y) / 2}, ${cx - h} ${HIP_Y}`,
    `L ${cx - THIGH_OUTER} ${(HIP_Y + KNEE_Y) / 2}`,
    `Q ${cx - KNEE_OUTER - 0.5} ${KNEE_Y}, ${cx - KNEE_OUTER} ${KNEE_Y + 2}`,
    `L ${cx - CALF_OUTER} ${CALF_Y}`,
    `L ${cx - ANKLE_OUTER} ${ANKLE_Y}`,
    `L ${cx - FOOT_OUTER} ${FOOT_Y}`,
    `L ${cx - 0.6} ${FOOT_Y}`,
    `L ${cx - 0.6} ${CROTCH_Y}`,
    `L ${cx + 0.6} ${CROTCH_Y}`,
    `L ${cx + 0.6} ${FOOT_Y}`,
    `L ${cx + FOOT_OUTER} ${FOOT_Y}`,
    `L ${cx + ANKLE_OUTER} ${ANKLE_Y}`,
    `L ${cx + CALF_OUTER} ${CALF_Y}`,
    `Q ${cx + KNEE_OUTER + 0.5} ${KNEE_Y}, ${cx + KNEE_OUTER} ${KNEE_Y + 2}`,
    `L ${cx + THIGH_OUTER} ${(HIP_Y + KNEE_Y) / 2}`,
    `L ${cx + h} ${HIP_Y}`,
    `Q ${cx + (w + h) / 2 + 0.5} ${(WAIST_Y + HIP_Y) / 2}, ${cx + w} ${WAIST_Y}`,
    `Q ${cx + c - 1} ${(CHEST_Y + WAIST_Y) / 2 + 1}, ${cx + c} ${CHEST_Y}`,
    `Q ${cx + c - 1} ${CHEST_Y + 4}, ${cx + ELBOW_INNER} ${ELBOW_Y - 1}`,
    `L ${cx + WRIST_INNER} ${WRIST_Y + 1}`,
    `Q ${cx + WRIST_OUTER - 1} ${WRIST_Y + 3}, ${cx + WRIST_OUTER} ${WRIST_Y}`,
    `Q ${cx + WRIST_OUTER + 1} ${(ELBOW_Y + WRIST_Y) / 2}, ${cx + ELBOW_OUTER} ${ELBOW_Y}`,
    `Q ${cx + ARM_OUTER + 1} ${(SHOULDER_Y + ELBOW_Y) / 2}, ${cx + s} ${SHOULDER_Y}`,
    `Q ${cx + s - 1} ${SHOULDER_Y - 1}, ${cx + 2.3} ${NECK_BOT}`,
    `Z`,
  ].join(" ");

  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 100 210" className="h-56 w-auto sm:h-64">
        <path d={d} fill={color} />
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

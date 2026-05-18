// 🔒 CHRÁNĚNÁ ZÓNA — konverzní logika.
// Měnit jen po domluvě s Lukem.
"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Dumbbell,
  Flame,
  TrendingDown,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { OptionCard } from "@/components/form/OptionCard";
import { StepProgress } from "@/components/form/StepProgress";
import { SuccessScreen } from "@/components/form/SuccessScreen";
import { formCopy, packages as packageList } from "@/lib/content";
import {
  EXPERIENCE,
  EXPERIENCE_LABELS,
  GOALS,
  GOAL_LABELS,
  KG_BUCKETS,
  KG_LABELS,
  LeadSchema,
  PACKAGE_CHOICES,
  REASONS,
  REASON_LABELS,
  SOURCES,
  SOURCE_LABELS,
  TIMELINES,
  TIMELINE_LABELS,
  type LeadInput,
} from "@/lib/schema";
import { cn } from "@/lib/utils";

const goalIcons: Record<(typeof GOALS)[number], LucideIcon> = {
  zhubnout: TrendingDown,
  nabrat: Dumbbell,
  forma: Flame,
  sila: Zap,
};

type StepId =
  | "goal"
  | "kg"
  | "timeline"
  | "experience"
  | "package"
  | "source"
  | "reason"
  | "contact";

const stepVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export function LeadForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(LeadSchema),
    mode: "onTouched",
    defaultValues: {
      goal: undefined,
      kg: undefined,
      timeline: undefined,
      experience: undefined,
      package: undefined,
      source: undefined,
      reason: undefined,
      name: "",
      email: "",
      phone: "",
      message: "",
      gdpr: undefined,
    },
  });

  const goalValue = watch("goal");
  // Watch all values to keep the "Pokračovat" disabled state in sync.
  watch();
  const needsKg = goalValue === "zhubnout" || goalValue === "nabrat";

  const steps: StepId[] = useMemo(() => {
    const base: StepId[] = ["goal"];
    if (needsKg) base.push("kg");
    base.push("timeline", "experience", "package", "source", "reason", "contact");
    return base;
  }, [needsKg]);

  const [stepIdx, setStepIdx] = useState(0);
  const [submitState, setSubmitState] = useState<
    | { status: "idle" }
    | { status: "error"; message: string }
    | { status: "success"; data: LeadInput }
  >({ status: "idle" });

  // Prefill balíčku když uživatel klikne "Vybrat balíček" v Packages sekci
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      const valid = PACKAGE_CHOICES.find((p) => p === detail);
      if (valid) setValue("package", valid, { shouldValidate: true });
    };
    window.addEventListener("preselect-package", handler);
    return () => window.removeEventListener("preselect-package", handler);
  }, [setValue]);

  // Když uživatel změní goal a krok kg už není relevantní, zresetuj pole
  useEffect(() => {
    if (!needsKg) setValue("kg", undefined);
  }, [needsKg, setValue]);

  // Pokud se stepIdx dostane za hranice (změna goal mění délku), zarovnej
  useEffect(() => {
    if (stepIdx > steps.length - 1) setStepIdx(steps.length - 1);
  }, [steps.length, stepIdx]);

  const currentStep = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;

  const stepFieldMap: Record<StepId, (keyof LeadInput)[]> = {
    goal: ["goal"],
    kg: ["kg"],
    timeline: ["timeline"],
    experience: ["experience"],
    package: ["package"],
    source: ["source"],
    reason: ["reason"],
    contact: ["name", "email", "phone", "message", "gdpr"],
  };

  const goNext = async () => {
    const fields = stepFieldMap[currentStep];
    const ok = await trigger(fields);
    if (!ok) return;
    if (!isLast) setStepIdx((i) => i + 1);
  };

  const goBack = () => {
    if (stepIdx === 0) return;
    setStepIdx((i) => i - 1);
  };

  const onSubmit = async (data: LeadInput) => {
    setSubmitState({ status: "idle" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Něco se pokazilo.");
      }
      setSubmitState({ status: "success", data });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Něco se pokazilo. Zkus to prosím znovu.";
      setSubmitState({ status: "error", message });
    }
  };

  if (submitState.status === "success") {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-graphite border border-bone/5 p-8 sm:p-12">
        <SuccessScreen data={submitState.data} />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto w-full max-w-2xl rounded-3xl bg-graphite border border-bone/5 p-7 sm:p-12"
    >
      <StepProgress current={stepIdx} total={steps.length} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={stepVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentStep === "goal" && (
            <Step
              title="Jaký je tvůj cíl?"
              subtitle="Vyber, co tě sem vlastně přivedlo."
            >
              <Controller
                control={control}
                name="goal"
                render={({ field }) => (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {GOALS.map((g) => (
                      <OptionCard
                        key={g}
                        selected={field.value === g}
                        onClick={() => {
                          field.onChange(g);
                          setTimeout(goNext, 200);
                        }}
                        title={GOAL_LABELS[g]}
                        icon={goalIcons[g]}
                      />
                    ))}
                  </div>
                )}
              />
              <FieldError msg={errors.goal?.message} />
            </Step>
          )}

          {currentStep === "kg" && (
            <Step
              title="O kolik kg ti jde?"
              subtitle="Není to závazek. Realisticky to upřesníme na callu."
            >
              <Controller
                control={control}
                name="kg"
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-3">
                    {KG_BUCKETS.map((b) => (
                      <OptionCard
                        key={b}
                        selected={field.value === b}
                        onClick={() => {
                          field.onChange(b);
                          setTimeout(goNext, 200);
                        }}
                        title={KG_LABELS[b]}
                      />
                    ))}
                  </div>
                )}
              />
              <FieldError msg={errors.kg?.message} />
            </Step>
          )}

          {currentStep === "timeline" && (
            <Step
              title="Do kdy chceš výsledek?"
              subtitle="Realistický odhad. Petr ti potvrdí nebo upraví na callu."
            >
              <Controller
                control={control}
                name="timeline"
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-3">
                    {TIMELINES.map((t) => (
                      <OptionCard
                        key={t}
                        selected={field.value === t}
                        onClick={() => {
                          field.onChange(t);
                          setTimeout(goNext, 200);
                        }}
                        title={TIMELINE_LABELS[t]}
                      />
                    ))}
                  </div>
                )}
              />
              <FieldError msg={errors.timeline?.message} />
            </Step>
          )}

          {currentStep === "experience" && (
            <Step
              title="Cvičil/a jsi už dříve?"
              subtitle="Není to test. Jenom vědět, odkud začínáme."
            >
              <Controller
                control={control}
                name="experience"
                render={({ field }) => (
                  <div className="grid grid-cols-1 gap-3">
                    {EXPERIENCE.map((e) => (
                      <OptionCard
                        key={e}
                        selected={field.value === e}
                        onClick={() => {
                          field.onChange(e);
                          setTimeout(goNext, 200);
                        }}
                        title={EXPERIENCE_LABELS[e]}
                      />
                    ))}
                  </div>
                )}
              />
              <FieldError msg={errors.experience?.message} />
            </Step>
          )}

          {currentStep === "package" && (
            <Step
              title="Co tě zaujalo?"
              subtitle="Vyber balíček, nebo nech to na mě — poradím ti."
            >
              <Controller
                control={control}
                name="package"
                render={({ field }) => (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {packageList.map((p) => (
                      <OptionCard
                        key={p.name}
                        selected={field.value === p.name}
                        onClick={() => {
                          field.onChange(p.name);
                        }}
                        title={p.name}
                        subtitle={`${p.price} Kč ${p.period}`}
                      />
                    ))}
                    <OptionCard
                      selected={field.value === "Nevim"}
                      onClick={() => field.onChange("Nevim")}
                      title="Ještě nevím, poraď mi"
                      subtitle="Probereme na callu."
                    />
                  </div>
                )}
              />
              <FieldError msg={errors.package?.message} />
            </Step>
          )}

          {currentStep === "source" && (
            <Step
              title="Odkud jsi se o mně dozvěděl?"
              subtitle="Pomáhá mi vědět, co funguje — ať vím, kam dál cílit."
            >
              <Controller
                control={control}
                name="source"
                render={({ field }) => (
                  <div className="grid grid-cols-1 gap-3">
                    {SOURCES.map((s) => (
                      <OptionCard
                        key={s}
                        selected={field.value === s}
                        onClick={() => {
                          field.onChange(s);
                          setTimeout(goNext, 200);
                        }}
                        title={SOURCE_LABELS[s]}
                      />
                    ))}
                  </div>
                )}
              />
              <FieldError msg={errors.source?.message} />
            </Step>
          )}

          {currentStep === "reason" && (
            <Step
              title="Proč jsi vybral zrovna mě?"
              subtitle="Nemusíš si vymýšlet — vyber, co tě sem opravdu přivedlo."
            >
              <Controller
                control={control}
                name="reason"
                render={({ field }) => (
                  <div className="grid grid-cols-1 gap-3">
                    {REASONS.map((r) => (
                      <OptionCard
                        key={r}
                        selected={field.value === r}
                        onClick={() => {
                          field.onChange(r);
                          setTimeout(goNext, 200);
                        }}
                        title={REASON_LABELS[r]}
                      />
                    ))}
                  </div>
                )}
              />
              <FieldError msg={errors.reason?.message} />
            </Step>
          )}

          {currentStep === "contact" && (
            <Step
              title="Skoro hotovo. Kam se mám ozvat?"
              subtitle="Telefon používám primárně — call je rychlejší než řetězec e-mailů."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <Label htmlFor="name">Jméno a příjmení</Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    placeholder="Tomáš Novák"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  <FieldError msg={errors.name?.message} />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="tvuj@email.cz"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  <FieldError msg={errors.email?.message} />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="702 169 863"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  <FieldError msg={errors.phone?.message} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Zpráva (nepovinné)</Label>
                  <Textarea
                    id="message"
                    placeholder="Cokoliv co bys měl/a vědět"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  <FieldError msg={errors.message?.message} />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-bone/20 bg-ink/60 text-emerald accent-emerald cursor-pointer"
                      aria-invalid={!!errors.gdpr}
                      {...register("gdpr")}
                    />
                    <span className="text-sm text-bone/75 leading-relaxed">
                      Souhlasím se zpracováním osobních údajů za účelem
                      kontaktu — podrobnosti v{" "}
                      <a
                        href="/gdpr"
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-light hover:underline"
                      >
                        zásadách ochrany osobních údajů
                      </a>
                      .
                    </span>
                  </label>
                  <FieldError msg={errors.gdpr?.message} />
                </div>
              </div>
            </Step>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={stepIdx === 0}
          className={cn(
            "inline-flex items-center gap-2 h-11 px-4 rounded-xl text-sm transition-colors",
            stepIdx === 0
              ? "opacity-0 pointer-events-none"
              : "text-bone/70 hover:text-bone hover:bg-bone/5"
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Zpět
        </button>

        {isLast ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center justify-center gap-2 h-14 px-7 sm:w-auto w-full rounded-xl bg-emerald hover:bg-emerald-light text-bone font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? formCopy.submitting : formCopy.submit}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            disabled={!isFilled(currentStep, getValues())}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-emerald hover:bg-emerald-light text-bone font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Pokračovat
            <span aria-hidden>→</span>
          </button>
        )}
      </div>

      {submitState.status === "error" && (
        <p className="mt-4 text-sm text-red-300/90" role="alert">
          {submitState.message}
        </p>
      )}

      {isLast && (
        <p className="mt-5 text-center text-xs text-mute">{formCopy.microcopy}</p>
      )}
    </form>
  );
}

function Step({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-bone leading-tight">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-[0.95rem] text-bone/55">{subtitle}</p>
      )}
      <div className="mt-7">{children}</div>
    </div>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-2 text-sm text-red-300/90" role="alert">
      {msg}
    </p>
  );
}

function isFilled(step: StepId, values: Partial<LeadInput>): boolean {
  switch (step) {
    case "goal":
      return !!values.goal;
    case "kg":
      return !!values.kg;
    case "timeline":
      return !!values.timeline;
    case "experience":
      return !!values.experience;
    case "package":
      return !!values.package;
    case "source":
      return !!values.source;
    case "reason":
      return !!values.reason;
    case "contact":
      return (
        !!values.name && !!values.email && !!values.phone && values.gdpr === true
      );
  }
}

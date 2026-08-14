"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Brain,
  Code2,
  Database,
  Server,
  Terminal,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const competencies = [
  {
    title: "Backend Engineering",
    icon: Server,
    accent: "#1f6feb",
    blurb:
      "Designing REST APIs and services with Python, Flask and FastAPI that are reliable and easy to reason about.",
    tags: ["Flask", "FastAPI", "REST", "TypeScript"],
  },
  {
    title: "Databases & Data",
    icon: Database,
    accent: "#8957e5",
    blurb:
      "Modeling relational data, writing clean SQL and tuning queries against MySQL and SQLite.",
    tags: ["MySQL", "SQLite", "SQL"],
  },
  {
    title: "Automation & Scripting",
    icon: Zap,
    accent: "#238636",
    blurb:
      "Automating repetitive workflows, gluing tools together and building small utilities that save real time.",
    tags: ["Python", "Cron", "CLI"],
  },
  {
    title: "AI & LLMs",
    icon: Brain,
    accent: "#8957e5",
    blurb:
      "Exploring LLMs, prompt engineering, RAG and tool-calling — learning out loud as the field moves fast.",
    tags: ["LLMs", "RAG", "Prompting"],
  },
  {
    title: "Linux & Shipping",
    icon: Terminal,
    accent: "#238636",
    blurb:
      "Living in the terminal on Linux, working with Git and deploying on Vercel with confidence.",
    tags: ["Linux", "Git", "Vercel"],
  },
  {
    title: "Clean, Tested Code",
    icon: Code2,
    accent: "#1f6feb",
    blurb:
      "Clear, tested, maintainable code — readable by humans and machines alike, focused on what ships.",
    tags: ["Testing", "Docs", "Refactoring"],
  },
];

const metrics = [
  { label: "Projects shipped", value: 12, suffix: "+" },
  { label: "Open source PRs", value: 26, suffix: "" },
  { label: "Commits this year", value: 214, suffix: "" },
  { label: "Cups of coffee", value: 480, suffix: "+" },
];

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const contributionColors = [
  "rgba(22, 27, 34, 1)",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const weeks = 22;
const days = 7;

const grid = (() => {
  const rand = mulberry32(20260814);
  const cells: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = rand();
      col.push(r < 0.42 ? 0 : r < 0.62 ? 1 : r < 0.78 ? 2 : r < 0.92 ? 3 : 4);
    }
    cells.push(col);
  }
  return cells;
})();

function CountUp({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span className="font-mono text-3xl font-bold text-ink sm:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Skills() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, {
    once: true,
    margin: "-60px",
  });

  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          02 · Skills & Contributions
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          What I Work With
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          The tools I reach for every day, a few numbers that matter, and a
          snapshot of recent activity.
        </p>
      </Reveal>

      {/* Core competencies */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {competencies.map((skill, i) => (
          <Reveal key={skill.title} delay={i * 0.06}>
            <div className="group h-full rounded-lg border border-edge bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_0_1px_rgba(31,111,235,0.35),0_10px_36px_-14px_rgba(31,111,235,0.45)]">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-edge bg-canvas/60 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.accent }}
                >
                  <skill.icon size={18} />
                </span>
                <h3 className="text-base font-semibold text-ink">
                  {skill.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{skill.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-edge-soft bg-canvas/60 px-2 py-0.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Key metrics */}
      <div
        ref={metricsRef}
        className="mt-10 grid grid-cols-2 gap-5 rounded-lg border border-edge bg-card p-6 sm:grid-cols-4 sm:p-8"
      >
        {metrics.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.08} y={14}>
            <div className="text-center">
              <CountUp
                value={metric.value}
                suffix={metric.suffix}
                inView={metricsInView}
              />
              <p className="mt-1.5 text-sm text-muted">{metric.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Activity highlight grid */}
      <Reveal className="mt-10">
        <div className="rounded-lg border border-edge bg-card p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Activity size={18} className="text-accent" />
              <h3 className="font-mono text-sm font-semibold text-ink">
                Contribution Activity
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <span>Less</span>
              {contributionColors.map((color, i) => (
                <span
                  key={i}
                  className="contribution-cell h-3 w-3"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto pb-1">
            <div className="flex min-w-max">
              {/* Weekday labels */}
              <div className="mr-2 flex flex-col justify-between py-0.5">
                {["M", "", "W", "", "F", "", "S"].map((label, i) => (
                  <span key={i} className="h-3 text-[10px] leading-3 text-muted">
                    {label}
                  </span>
                ))}
              </div>
              {/* Cells */}
              <div className="flex gap-[3px]">
                {grid.map((col, w) => (
                  <div key={w} className="flex flex-col gap-[3px]">
                    {col.map((level, d) => (
                      <motion.span
                        key={d}
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.25,
                          delay: (w * days + d) * 0.002,
                        }}
                        className="contribution-cell h-3 w-3"
                        style={{
                          backgroundColor: contributionColors[level],
                          boxShadow:
                            level >= 4
                              ? "0 0 6px 0 rgba(57, 211, 83, 0.55)"
                              : undefined,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 border-t border-edge-soft pt-4 text-xs leading-5 text-muted">
            A taste of recent activity. Most of it happens on GitHub under{" "}
            <a
              href="https://github.com/nitikpsn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-accent transition-colors hover:text-ink"
            >
              @nitikpsn
            </a>
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}
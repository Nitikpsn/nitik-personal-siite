"use client";

import { motion } from "framer-motion";
import { Folder, Link2, Star, GitFork } from "lucide-react";
import Reveal from "./Reveal";

type Project = {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  tech: { name: string; color: string }[];
  stars: number;
  forks: number;
  updated: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "sentiment-sentinel",
    badge: "Public",
    badgeColor: "#238636",
    description:
      "FastAPI + Python service that streams social posts and scores sentiment in real time with LLM-based classification and a clean REST API.",
    tech: [
      { name: "Python", color: "#3572A5" },
      { name: "FastAPI", color: "#009688" },
      { name: "SQLite", color: "#003B57" },
    ],
    stars: 42,
    forks: 8,
    updated: "3 days ago",
    url: "https://github.com/nitikpsn",
  },
  {
    title: "type-checker-cli",
    badge: "Full-Stack",
    badgeColor: "#8957e5",
    description:
      "A TypeScript CLI that audits your Python codebase for type hints, generates lint reports and hooks into CI as a Vercel-deployable action.",
    tech: [
      { name: "TypeScript", color: "#3178C6" },
      { name: "Vercel", color: "#0ea5e9" },
      { name: "SQL", color: "#e38c00" },
    ],
    stars: 27,
    forks: 4,
    updated: "1 week ago",
    url: "https://github.com/nitikpsn",
  },
  {
    title: "flask-api-starter",
    badge: "Public",
    badgeColor: "#238636",
    description:
      "Production-ready Flask boilerplate with JWT auth, role-based access, migrations and MySQL — the exact stack I use for client backends.",
    tech: [
      { name: "Python", color: "#3572A5" },
      { name: "Flask", color: "#000000" },
      { name: "MySQL", color: "#4479A1" },
    ],
    stars: 58,
    forks: 15,
    updated: "2 weeks ago",
    url: "https://github.com/nitikpsn",
  },
  {
    title: "llm-playground",
    badge: "AI",
    badgeColor: "#1f6feb",
    description:
      "Experiments with LLMs and prompt engineering — streaming chat, tool-calling and RAG demos in Python notebooks. Learning out loud.",
    tech: [
      { name: "Python", color: "#3572A5" },
      { name: "Jupyter", color: "#F37626" },
      { name: "AI", color: "#8957e5" },
    ],
    stars: 19,
    forks: 3,
    updated: "1 month ago",
    url: "https://github.com/nitikpsn",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          03 · Featured Projects
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Pinned Repositories
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          A few things I’ve built and tinkered with. Hover a card — it’s
          alive, just like the code.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group block h-full rounded-lg border border-edge bg-card p-5 transition-colors duration-300 hover:border-accent hover:shadow-[0_0_0_1px_rgba(31,111,235,0.5),0_10px_40px_-12px_rgba(31,111,235,0.5)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <Folder
                    size={20}
                    className="text-accent transition-transform duration-300 group-hover:-rotate-6"
                  />
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>
                <span
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                  style={{
                    color: project.badgeColor,
                    borderColor: `${project.badgeColor}55`,
                    backgroundColor: `${project.badgeColor}1a`,
                  }}
                >
                  {project.badge}
                </span>
              </div>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-edge-soft pt-4">
                {project.tech.map((t) => (
                  <span
                    key={t.name}
                    className="flex items-center gap-1.5 font-mono text-xs text-muted"
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-edge"
                      style={{ backgroundColor: t.color }}
                    />
                    {t.name}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400/80" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} />
                  {project.forks}
                </span>
                <span>Updated {project.updated}</span>
                <span className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link2 size={16} className="text-accent" />
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
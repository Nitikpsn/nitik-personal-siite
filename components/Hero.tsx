"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code2,
  Mail,
  MapPin,
  Wrench,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const roles = [
  "a Backend Developer",
  "a Python Enthusiast",
  "an Open Source Contributor",
  "an AI & LLM Explorer",
  "an Automation Builder",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const speed = deleting ? 45 : 95;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setTimeout(() => setDeleting(true), 1700);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const techCategories = [
  {
    title: "Languages",
    icon: Code2,
    accent: "#8957e5",
    items: ["Python", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    accent: "#1f6feb",
    items: [
      "Flask",
      "FastAPI",
      "MySQL",
      "SQLite",
      "Vercel",
      "Linux",
      "Opencode",
      "Copilot",
    ],
  },
  {
    title: "Currently Exploring",
    icon: Brain,
    accent: "#238636",
    items: ["AI", "LLMs", "Open Source", "Automation", "System Design", "Cloud"],
  },
];

const socials = [
  { href: "https://github.com/nitikpsn", label: "GitHub", Icon: GitHubIcon },
  {
    href: "https://linkedin.com/in/nitikpsn",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  { href: "mailto:nitikpsn@gmail.com", label: "Email", Icon: Mail },
  { href: "https://x.com/nitikpsn", label: "X / Twitter", Icon: XIcon },
];

export default function Hero() {
  const typed = useTypewriter(roles);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-5 pb-16 sm:px-8 md:grid-cols-[auto_1fr] lg:gap-16">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-accent via-accent2 to-success opacity-80 blur-[1px]" />
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-edge bg-card sm:h-52 sm:w-52">
              {imgError ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent2/20 text-6xl font-bold text-ink">
                  N
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/profile.png"
                  alt="Profile photo of Nitik"
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full border border-edge bg-card px-2.5 py-1 text-xs font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_2px_rgba(35,134,54,0.7)]" />
              Open to work
            </div>
          </div>
        </motion.div>

        {/* Intro card */}
        <div className="rounded-xl border border-edge bg-card p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
              01 · About
            </p>

            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-muted">
              <MapPin size={14} className="text-accent" /> India · Backend &
              Automation
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              I’m Nitik and I’m{" "}
              <span className="bg-gradient-to-r from-accent via-accent2 to-success bg-clip-text text-transparent">
                {typed}
              </span>
              <span className="ml-0.5 inline-block w-[2px] animate-pulse text-accent">
                |
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-[17px]">
              I’m a developer who loves turning ideas into reliable, well-tested
              products. My background is in backend engineering with Python and
              TypeScript, and I’m passionate about open source, automation and
              the fast-moving world of AI. I write code the way I like to work —
              clear, clean, and focused on what actually ships.
            </p>

            {/* Technologies */}
            <div className="mt-7">
              <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-muted">
                Technologies I Use
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {techCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="rounded-lg border border-edge-soft bg-canvas/60 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <cat.icon
                        size={15}
                        style={{ color: cat.accent }}
                      />
                      <h3 className="text-sm font-semibold text-ink">
                        {cat.title}
                      </h3>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="rounded border border-edge bg-card px-2 py-0.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-lg border border-success/30 bg-success/5 p-5">
              <p className="text-lg font-semibold text-ink">
                Let’s Build Together
              </p>
              <p className="mt-1 text-sm text-muted">
                Have a project, an idea, or a bug that deserves a clean
                solution? I’d love to hear about it.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-success px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_-4px_rgba(35,134,54,0.9)] hover:brightness-110"
                >
                  Get in Touch
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <div className="flex items-center gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-edge bg-card text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-ink hover:shadow-[0_0_14px_-3px_rgba(31,111,235,0.8)]"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
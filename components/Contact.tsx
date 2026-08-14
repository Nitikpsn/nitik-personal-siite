"use client";

import { useState } from "react";
import { Check, Copy, Mail, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const email = "nitikpsn@gmail.com";

const socials = [
  {
    href: "https://github.com/nitikpsn",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://linkedin.com/in/nitikpsn",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  { href: "mailto:nitikpsn@gmail.com", label: "Email", Icon: Mail },
  { href: "https://x.com/nitikpsn", label: "X / Twitter", Icon: XIcon },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
          04 · Get in Touch
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Let’s Build Together
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-10 overflow-hidden rounded-xl border border-edge bg-card p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-accent2/15 blur-3xl" />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-success/40 bg-success/10 text-success">
              <Rocket size={22} />
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Have an idea, a project, or a bug worth fixing?
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              Whether it’s an API to design, an automation to build, or an
              open source project to contribute to — I’d genuinely love to hear
              about it. My inbox is always open.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 rounded-md bg-success px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(35,134,54,0.9)] hover:brightness-110"
              >
                <Mail
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Send me an email
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-edge bg-canvas px-5 py-3 text-sm font-medium text-muted transition-all duration-300 hover:border-accent hover:text-ink hover:shadow-[0_0_16px_-4px_rgba(31,111,235,0.7)]"
              >
                {copied ? (
                  <>
                    <Check size={15} className="text-success" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    Copy email
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-edge bg-canvas text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-ink hover:shadow-[0_0_14px_-3px_rgba(31,111,235,0.8)]"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-8 font-mono text-xs text-muted">
              <span className="text-success">$</span>{" "}
              <span className="text-accent">await</span> your_message →{" "}
              <span className="text-ink">“replied within 24h”</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
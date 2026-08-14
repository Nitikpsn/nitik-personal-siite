"use client";

import { ArrowUp, Mail, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-edge bg-canvas/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-edge bg-card text-accent">
            <Terminal size={14} />
          </span>
          <p className="text-sm text-muted">
            © {year} Nitik. Built with Next.js, Tailwind &amp; Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-edge bg-card text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-ink hover:shadow-[0_0_12px_-3px_rgba(31,111,235,0.8)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Back to top"
            title="Back to top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex h-9 w-9 items-center justify-center rounded-md border border-edge bg-card text-muted transition-all duration-300 hover:border-success hover:text-ink hover:shadow-[0_0_12px_-3px_rgba(35,134,54,0.8)]"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitik | Backend Developer & Open Source Enthusiast",
  description:
    "Personal portfolio of Nitik — a backend developer who builds with Python, TypeScript and SQL, exploring AI, LLMs and automation.",
  keywords: [
    "Nitik",
    "backend developer",
    "Python",
    "TypeScript",
    "Flask",
    "FastAPI",
    "portfolio",
  ],
  openGraph: {
    title: "Nitik | Backend Developer",
    description:
      "Building APIs, automation and open source tools. Let's build together.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
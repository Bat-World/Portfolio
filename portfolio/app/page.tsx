"use client";

import * as React from "react";
import { Github, Mail, Sun, Moon, MapPin, Download, Eye } from "lucide-react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FlipWords } from "../components/ui/flip-words";


function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

const Card: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "rounded-3xl border transition-all duration-300",
      "border-white/10",
      "bg-[#15161d]",
      "shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.35)]",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const IconButton: React.FC<React.ComponentProps<"button">> = ({
  className,
  children,
  ...props
}) => (
  <button
    className={cn(
      "grid h-11 w-11 place-items-center rounded-full border border-white/15",
      "hover:bg-white/10 transition-colors",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

  const words = ["engineer", "developer"];

export default function PortfolioLayout() {
  return (
    <main className="min-h-screen bg-[#090D11] text-white">
      {/* container */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20">
        {/* Bento grid */}
        <div
          className={cn(
            "grid gap-4",
            "grid-cols-1 md:grid-cols-4 lg:grid-cols-8",
            "auto-rows-[120px] md:auto-rows-[140px] lg:auto-rows-[160px]"
          )}
        >
          {/* Profile */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 p-6">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30" />
              <div className="flex-1">
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Bat-Erdene. D
                </h1>
                <p className="mt-1 text-sm text-white/70">
                  I’m <span className="text-blue-400">    <FlipWords words={words} /></span>
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500/15 px-3 py-1 text-xs text-green-400">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  Available to work
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 p-4">
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                  <MapPin className="h-4 w-4 text-blue-400" /> Mongolia
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                  🌐 EN & MN
                </span>
              </div>
            </div>
          </Card>

            {/* Marquee */}
            <Card className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 overflow-hidden flex items-center justify-center">
              <h2 className="text-xl tracking-[0.35em] uppercase">
                Personal <span className="text-blue-400">Portfolio</span>
              </h2>
            </Card>

          {/* Resume */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-6">
            <div className="flex h-full items-center justify-between">
              <div>
                <p className="text-xs text-white/60">2024 CV</p>
                <h3 className="text-2xl font-semibold">RESUME</h3>
              </div>
              <div className="flex items-center gap-2">
                <IconButton>
                  <Download className="h-5 w-5" />
                </IconButton>
                <IconButton>
                  <Eye className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
          </Card>

          {/* Tech */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JS", "Figma", "VS Code"].map((t) => (
                  <div
                    key={t}
                    className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm hover:scale-105 transition-transform"
                  >
                    {t === "HTML"
                      ? "🌐"
                      : t === "CSS"
                      ? "🎨"
                      : t === "JS"
                      ? "⚡"
                      : t === "Figma"
                      ? "🎯"
                      : "💻"}
                  </div>
                ))}
              </div>
              <div>
                <p className="mt-4 text-xs text-white/60">Current</p>
                <h4 className="text-lg font-semibold">TECHNOLOGIES I USE</h4>
              </div>
            </div>
          </Card>

          {/* GitHub */}
          <Card className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 grid place-items-center hover:scale-105 transition-transform">
            <Github className="h-14 w-14 opacity-80" />
          </Card>

          {/* Email */}
          <Card className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 grid place-items-center hover:scale-105 transition-transform">
            <Mail className="h-14 w-14 opacity-80" />
          </Card>

          {/* Weblog */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 p-6">
            <h3 className="text-xl font-semibold">Weblog</h3>
            <div className="mt-5 space-y-4">
              {[
                {
                  date: "Sunday Nov 24, 2024",
                  title: "Responsive styles",
                  status: "COMPLETED",
                  color: "green",
                  icon: "📝",
                },
                {
                  date: "Saturday Nov 23, 2024",
                  title: "Grid fixes",
                  status: "FIXES",
                  color: "amber",
                  icon: "🔧",
                },
              ].map((log) => (
                <div key={log.date} className="flex items-start gap-3">
                  <div
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-lg",
                      `bg-${log.color}-500/15`
                    )}
                  >
                    {log.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{log.date}</p>
                    <p className="text-xs text-white/60">{log.title}</p>
                    <span
                      className={cn(
                        "mt-2 inline-block rounded-full px-2 py-1 text-[10px]",
                        `bg-${log.color}-500/15 text-${log.color}-400`
                      )}
                    >
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <BackgroundBeams />
    </main>
  );
}

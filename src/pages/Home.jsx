import { useEffect, useState } from "react";

export default function Home() {
  const text =
    "A multi-modal AI powered surveillance system using Thermal, Image and Audio intelligence.";
  const [displayedText, setDisplayedText] = useState("");

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative px-6 py-24 text-center max-w-3xl mx-auto overflow-hidden">
      {/* Portal Glow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulseSlow" />
      </div>

      {/* Main Title */}
      <h1 className="glitch-title text-4xl md:text-5xl font-bold mb-6 text-red-500">
        DEMOGORGON DETECTION SYSTEM
      </h1>

      {/* Typewriter Subtitle */}
      <p className="text-slate-300 mb-6 min-h-[3rem] font-mono">
        {displayedText}
        <span className="animate-blink">▌</span>
      </p>

      {/* Status Line */}
      <p className="text-sm text-slate-400 tracking-widest uppercase">
        System Status: <span className="text-red-400">Monitoring Upside Down</span>
      </p>
    </div>
  );
}

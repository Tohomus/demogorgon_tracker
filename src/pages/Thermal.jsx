import { useEffect, useRef } from "react";

export default function Thermal() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Backend / ML team will handle:
    // - videoRef.current.srcObject OR src
    // - drawing frames onto canvasRef.current
    // Frontend does NOT interfere
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4 text-center">
        Thermal IR Detection
      </h2>

      <p className="text-sm text-slate-400 mb-6 text-center">
        Live thermal tracking feed
      </p>

      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-slate-700">
        {/* 1. RAW INPUT STREAM (HIDDEN) */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="hidden"
        />

        {/* 2. PROCESSED OUTPUT (VISIBLE) */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-fill"
        />

        {/* 3. UI OVERLAY */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <div className="text-cyan-400 font-bold text-lg drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
            SYSTEM: TRACKING
          </div>
        </div>
      </div>
    </div>
  );
}

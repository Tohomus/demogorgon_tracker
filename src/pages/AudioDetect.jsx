import { useState } from "react";

export default function AudioDetect() {
  const [listening, setListening] = useState(false);

  const toggleListening = () => {
    setListening(!listening);
  };

  return (
    <div className="p-6 md:p-10 max-w-xl mx-auto text-center">
      <h2 className="text-2xl mb-6">Audio Detection</h2>

      <div
        className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center 
        ${listening ? "bg-red-600" : "bg-slate-700"}`}
        style={{
          animation: listening ? "pulseGlow 1.5s infinite" : "none",
        }}
      >
        🎤
      </div>

      <button
        onClick={toggleListening}
        className={`px-6 py-2 rounded w-full sm:w-auto 
        ${listening ? "bg-slate-600" : "bg-red-600 hover:bg-red-700"}`}
      >
        {listening ? "Stop Listening" : "Start Listening"}
      </button>
    </div>
  );
}

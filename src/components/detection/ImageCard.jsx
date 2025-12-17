import StatusBadge from "../common/StatusBadge";

export default function ImageCard({ status }) {
  return (
    <div
      className="
        bg-slate-800 p-5 rounded border border-slate-700
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-red-500
        hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]
      "
    >
      <h3 className="text-lg mb-2 text-red-400">
        Image Detection
      </h3>

      <p className="text-sm text-slate-400 font-mono">
        AI-based visual recognition
      </p>

      <StatusBadge status={status} />
    </div>
  );
}

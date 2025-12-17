import StatusBadge from "../common/StatusBadge";

export default function ImageCard({ status }) {
  return (
    <div className="bg-slate-800 p-5 rounded border border-slate-700">
      <h3 className="text-lg mb-2">Image Detection</h3>
      <p className="text-sm text-slate-400">
        AI-based visual recognition
      </p>
      <StatusBadge status={status} />
    </div>
  );
}

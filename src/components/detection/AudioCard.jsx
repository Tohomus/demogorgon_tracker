import StatusBadge from "../common/StatusBadge";

export default function AudioCard({ status }) {
  return (
    <div className="bg-slate-800 p-5 rounded border border-slate-700">
      <h3 className="text-lg mb-2">Audio Detection</h3>
      <p className="text-sm text-slate-400">
        Detects demogorgon sound patterns
      </p>
      <StatusBadge status={status} />
    </div>
  );
}

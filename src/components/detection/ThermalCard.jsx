import StatusBadge from "../common/StatusBadge";

export default function ThermalCard({ status }) {
  return (
    <div className="bg-slate-800 p-5 rounded border border-slate-700">
      <h3 className="text-lg mb-2">Thermal IR Detection</h3>
      <p className="text-sm text-slate-400">
        Tracks heat signatures using IR sensors
      </p>
      <StatusBadge status={status} />
    </div>
  );
}

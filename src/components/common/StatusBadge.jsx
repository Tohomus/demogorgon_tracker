export default function StatusBadge({ status }) {
  const color =
    status === "Detected"
      ? "bg-red-600"
      : status === "Listening"
      ? "bg-yellow-500 text-black"
      : "bg-green-600";

  return (
    <span className={`inline-block mt-2 px-3 py-1 text-xs rounded ${color}`}>
      {status}
    </span>
  );
}

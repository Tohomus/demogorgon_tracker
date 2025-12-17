import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 px-4 md:px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
      <h1 className="text-xl font-bold text-red-500 text-center md:text-left">
        DEMOGUARD
      </h1>

      <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
        <Link to="/" className="hover:text-red-400">Home</Link>
        <Link to="/dashboard" className="hover:text-red-400">Dashboard</Link>
        <Link to="/thermal" className="hover:text-red-400">Thermal</Link>
        <Link to="/image" className="hover:text-red-400">Image</Link>
        <Link to="/audio" className="hover:text-red-400">Audio</Link>
      </div>
    </nav>
  );
}

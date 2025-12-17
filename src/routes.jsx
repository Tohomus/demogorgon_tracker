import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Thermal from "./pages/Thermal";
import ImageDetect from "./pages/ImageDetect";
import AudioDetect from "./pages/AudioDetect";
import NotFound from "./pages/NotFound";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/thermal" element={<Thermal />} />
      <Route path="/image" element={<ImageDetect />} />
      <Route path="/audio" element={<AudioDetect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

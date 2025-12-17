import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <RoutesConfig />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

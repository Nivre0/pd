import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Learning from "./pages/Leitfaden";
import FunkCodes from "./pages/FunkCodes";
import FunkCodesLearn from "./pages/FunkCodesLearn";
import Kleiderordnung from "./pages/Kleiderordnung";
import Dienstgrade from "./pages/Dienstgrade";
import PolizeiReglement from "./pages/PolizeiReglement";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <BrowserRouter>
        <ScrollToTop/>
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/learning/funk-codes" element={<FunkCodes />} />
            <Route path="/learning/funk-codes/lernen" element={<FunkCodesLearn />} />
            <Route path="/kleiderordnung" element={<Kleiderordnung />} />
            <Route path="/dienstgrade" element={<Dienstgrade />} />
            <Route path="/reglement" element={<PolizeiReglement />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Leitfaden from "./pages/Leitfaden";
import FunkCodes from "./pages/FunkCodes";
import FunkCodesLearn from "./pages/FunkCodesLearn";
import Kleiderordnung from "./pages/Kleiderordnung";
import Dienstgrade from "./pages/Dienstgrade";
import PolizeiReglement from "./pages/PolizeiReglement";
import ScrollToTop from "./components/ScrollToTop";
import Ausruestung from "./pages/Ausruestung";
import Fraktionen from "./pages/Fraktionen";
import Commands from "./pages/Commands";
import Leitung from "./pages/Leitung";
import Ortskenntnis from "./pages/Ortskenntnis";

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <BrowserRouter>
        <ScrollToTop/>
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leitfaden" element={<Leitfaden />} />
            <Route path="/leitfaden/funk-codes" element={<FunkCodes />} />
            <Route path="/leitfaden/funk-codes/lernen" element={<FunkCodesLearn />} />
            <Route path="/leitfaden/kleiderordnung" element={<Kleiderordnung />} />
            <Route path="/leitfaden/dienstgrade" element={<Dienstgrade />} />
            <Route path="/leitfaden/reglement" element={<PolizeiReglement />} />
            <Route path="/leitfaden/ausrüstung" element={<Ausruestung />} />
            <Route path="/leitfaden/commands" element={<Commands />} />
            <Route path="/leitfaden/ortskenntnis" element={<Ortskenntnis />} />
            <Route path="/fraktionen" element={<Fraktionen />} />
            <Route path="/leitung" element={<Leitung />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

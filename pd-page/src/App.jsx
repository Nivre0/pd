import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import FunkCodes from "./pages/FunkCodes";
import FunkCodesLearn from "./pages/FunkCodesLearn";
import Kleiderordnung from "./pages/Kleiderordnung";
import Dienstgrade from "./pages/Dienstgrade";

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <BrowserRouter>
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/learning/funk-codes" element={<FunkCodes />} />
            <Route path="/learning/funk-codes/lernen" element={<FunkCodesLearn />} />
            <Route path="/kleiderordnung" element={<Kleiderordnung />} />
            <Route path="/dienstgrade" element={<Dienstgrade />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-sky-200">
      <BrowserRouter>
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

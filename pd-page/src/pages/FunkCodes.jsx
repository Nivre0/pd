import { Link } from "react-router-dom";
import radioCodes from "../data/radioCodes.json";

export default function FunkCodes() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-accentText">Funk Codes</h1>

      <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead className="bg-accent text-white">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                Code
              </th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                Bedeutung
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10">
            {radioCodes.map((item, index) => (
              <tr key={index} className="hover:bg-white/5 transition">
                <td className="px-4 py-2 font-mono text-accentText whitespace-nowrap">
                  {item.code}
                </td>
                <td className="px-4 py-2 text-white/90">{item.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button LINKS */}
      <div className="flex justify-start">
        <Link
          to="/leitfaden/funk-codes/lernen"
          className="inline-flex items-center justify-center rounded-2xl border border-accent bg-accent/15 px-5 py-3 font-semibold text-accentText hover:bg-accent/25 transition"
        >
          Funk Codes lernen
        </Link>
      </div>
    </div>
  );
}

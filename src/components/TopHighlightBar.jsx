import { useApp } from "../context/AppContext";

export default function TopHighlightBar() {
  const { isDarkMode } = useApp();

  return (
    <section
      className={`w-full py-2.5 px-6 transition-colors ${
        isDarkMode
          ? "bg-slate-800 text-slate-100"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-semibold tracking-wide">
            FLASH DEAL
          </span>
          <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>
            Mid-Season Essential Bundles up to 35% off. Complimentary global
            shipping over $75.
          </span>
        </div>
        <div
          className={`flex items-center gap-6 hidden md:flex font-medium ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-emerald-500">
              verified
            </span>
            Verified 30-Day Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-blue-600">
              local_shipping
            </span>
            Express Dispatch
          </span>
        </div>
      </div>
    </section>
  );
}

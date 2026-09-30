import React from "react";
import { useApp } from "../context/AppContext";

export default function PromoBanner() {
  const { isDarkMode } = useApp();

  return (
    <section className="w-full px-6 py-10 max-w-7xl mx-auto">
      <div
        className={`relative w-full rounded-3xl p-8 md:p-14 overflow-hidden shadow-lg border ${
          isDarkMode
            ? "bg-slate-900 border-slate-800 text-white"
            : "bg-slate-900 border-slate-800 text-white"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>

        <div className="relative z-20 max-w-xl flex flex-col items-start gap-4">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
            SEASONAL PROMOTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white">
            Special offers,<br />
            better prices.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
            Save up to 35% on seasonal essentials with curated bundles. Engineered for minimalists who value durability and timeless aesthetics.
          </p>
          <div className="flex items-center gap-4 pt-3">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 text-sm font-bold hover:bg-slate-100 transition-colors shadow-md"
              href="#featured"
            >
              <span>View Deals</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_outward
              </span>
            </a>
            <span className="text-xs text-slate-400">
              Limited allocation available
            </span>
          </div>
        </div>

        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwmmjuymYZSrCkw7xcpEfeYRx51jVd4-XGJySKyKufasQ99xHHHu34wFjszw6c4xJeGtjtYU8cFtPacyXGltQX6yyZbutmelRHGH3aL8rO5B1SHp1_n4fE6HdlFMBwNtuQVNQDOa8AkSRdCQeb3G9luKmWvgeNRngGnEE_nseJuAy0jcnmM20vmCA24J_aaVCDx5ma_9v23xtdRsDJWNXSYDukvZZFCFXQCFcsNdAMbZOKmLucJipH')",
          }}
        ></div>
      </div>
    </section>
  );
}
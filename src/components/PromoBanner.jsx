import { useApp } from "../context/AppContext";

export default function PromoBanner() {
  const { isDarkMode } = useApp();

  return (
    <section className="w-full px-6 py-10 max-w-[1600px] mx-auto">
      <div
        className={`relative w-full rounded-3xl p-8 md:p-14 overflow-hidden shadow-lg ${
          isDarkMode
            ? "bg-[#1E293B] border border-[#334155] text-[#F8FAFC]"
            : "bg-blue-50 border border-blue-100 text-slate-900"
        }`}
      >
        {/* Dynamic Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: isDarkMode
              ? "linear-gradient(to right, #1E293B 0%, rgba(30, 41, 59, 0.95) 45%, rgba(30, 41, 59, 0.2) 100%)"
              : "linear-gradient(to right, #EFF6FF 0%, rgba(239, 246, 255, 0.95) 45%, rgba(239, 246, 255, 0.2) 100%)",
          }}
        ></div>

        <div className="relative z-20 max-w-xl flex flex-col items-start gap-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: isDarkMode ? "rgba(59, 130, 246, 0.15)" : "rgba(37, 99, 235, 0.1)",
              color: isDarkMode ? "#60A5FA" : "#2563EB",
              border: isDarkMode ? "1px solid #334155" : "1px solid #BFDBFE",
            }}
          >
            SEASONAL PROMOTION
          </span>

          <h2
            className={`text-3xl sm:text-4xl font-bold leading-tight tracking-tight ${
              isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
            }`}
          >
            Special offers,<br />
            better prices.
          </h2>

          <p
            className={`text-sm sm:text-base max-w-md leading-relaxed ${
              isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
            }`}
          >
            Save up to 35% on seasonal essentials with curated bundles. Engineered for minimalists who value durability and timeless aesthetics.
          </p>

          <div className="flex items-center gap-4 pt-3">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-md transition-colors"
              href="#featured"
              style={{
                backgroundColor: isDarkMode ? "#111827" : "#0F172A",
                color: "#F8FAFC",
                border: isDarkMode ? "1px solid #475569" : "1px solid #334155",
              }}
            >
              <span>View Deals</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_outward
              </span>
            </a>
            <span className="text-xs" style={{ color: "#94A3B8" }}>
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
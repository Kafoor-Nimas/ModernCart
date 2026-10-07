import { useApp } from "../context/AppContext";

export default function HeroSection() {
  const { isDarkMode } = useApp();

  return (
    <section className="w-full px-6 py-12 md:py-16 lg:py-20 max-w-[1700px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-semibold text-xs ${
              isDarkMode
                ? "bg-[rgba(59,130,246,0.15)] border border-[#334155] text-[#60A5FA]"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#3B82F6" }}
            ></span>
            NEW COLLECTION 2025
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-2xl ${
              isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
            }`}
          >
            Discover products you’ll{" "}
            <span
              className="underline decoration-wavy decoration-2 underline-offset-8"
              style={{
                color: isDarkMode ? "#60A5FA" : "#2563EB",
                textDecorationColor: isDarkMode ? "rgba(96, 165, 250, 0.4)" : "#BFDBFE",
              }}
            >
              love
            </span>
            .
          </h1>

          <p
            className={`text-base sm:text-lg max-w-xl leading-relaxed ${
              isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
            }`}
          >
            Explore carefully selected products with great quality, modern design, and exceptional value. Engineered for effortless living and curated with obsessive precision.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-semibold shadow-md transition-all duration-200"
              href="#featured"
              style={{ backgroundColor: "#3B82F6" }}
            >
              <span>Shop Now</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                isDarkMode
                  ? "bg-transparent border border-[#475569] text-[#E2E8F0] hover:bg-slate-800"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}
              href="#categories"
            >
              <span>Explore Categories</span>
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ color: isDarkMode ? "#94A3B8" : "#94A3B8" }}
              >
                grid_view
              </span>
            </a>
          </div>

          {/* Social Proof Stats */}
          <div
            className={`grid grid-cols-3 gap-6 pt-6 mt-4 w-full max-w-lg p-5 rounded-2xl shadow-sm ${
              isDarkMode
                ? "bg-[#1E293B] border border-[#334155]"
                : "bg-white border border-slate-100"
            }`}
          >
            <div>
              <div className={`text-xl font-bold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                140k+
              </div>
              <div className="text-xs" style={{ color: "#94A3B8" }}>
                Happy Customers
              </div>
            </div>
            <div>
              <div className={`text-xl font-bold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                4.92 / 5
              </div>
              <div className="text-xs" style={{ color: "#94A3B8" }}>
                Verified Rating
              </div>
            </div>
            <div>
              <div className={`text-xl font-bold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                24-48h
              </div>
              <div className="text-xs" style={{ color: "#94A3B8" }}>
                Courier Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Right Showcase Card */}
        <div className="lg:col-span-5 relative w-full">
          <div
            className="absolute -inset-4 rounded-3xl blur-2xl -z-10 pointer-events-none"
            style={{
              backgroundColor: isDarkMode ? "rgba(59, 130, 246, 0.12)" : "rgba(59, 130, 246, 0.1)",
            }}
          ></div>
          <div
            className={`relative rounded-3xl shadow-xl p-5 flex flex-col gap-5 overflow-hidden ${
              isDarkMode
                ? "bg-[#1E293B] border border-[#334155]"
                : "bg-white border border-slate-100"
            }`}
          >
            <div
              className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden group ${
                isDarkMode ? "bg-[#0F172A]" : "bg-slate-100"
              }`}
            >
              <img
                alt="Studio One ANC Wireless Headphones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeEkiBHP-gpnEPkjwiuFeBjYbuO4DZJb7oYtkCYN9fq6Z5g692SAISA1kVXwWfMxIPZhLjwsz8R7nrE8itb5o9FIuLlwwWWzumnJHTZM9Qj1XrXLp247rKFimB_jp7tkte9PzXzlCTGYQ2P2vh_L0EaY-f8g2-z_uaEfQ1vvSQLvdADFJDenYd0CSA3TYFDRVBoBpiNvpxfRniUMD0BkwauEfhD55IbJbSf3kjoaPNtHtiC-C5gp9s"
              />
              <div
                className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 ${
                  isDarkMode
                    ? "bg-[rgba(17,24,39,0.85)] border border-[#334155]"
                    : "bg-white/90"
                }`}
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{
                    color: isDarkMode ? "#FBBF24" : "#16A34A",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>
                <span className={`text-xs font-semibold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                  Editor's Pick 2025
                </span>
              </div>

              <div
                className={`absolute bottom-4 left-4 right-4 backdrop-blur-md p-3.5 rounded-xl shadow-md flex items-center justify-between ${
                  isDarkMode
                    ? "bg-[rgba(17,24,39,0.88)] border border-[#334155]"
                    : "bg-white/90"
                }`}
              >
                <div>
                  <span className="block text-xs" style={{ color: "#94A3B8" }}>
                    AuraSound Flagship
                  </span>
                  <span className={`text-base font-bold ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                    Studio One ANC
                  </span>
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ color: isDarkMode ? "#60A5FA" : "#2563EB" }}
                >
                  $249
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                className={`flex items-center gap-3 p-3.5 rounded-xl ${
                  isDarkMode ? "bg-[#111827] border border-[#334155]" : "bg-slate-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDarkMode ? "bg-[rgba(59,130,246,0.15)]" : "bg-blue-100"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ color: isDarkMode ? "#60A5FA" : "#2563EB" }}
                  >
                    local_shipping
                  </span>
                </div>
                <div className="min-w-0">
                  <div className={`text-xs font-semibold truncate ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                    Free Express
                  </div>
                  <div className="text-[11px] truncate" style={{ color: "#94A3B8" }}>
                    Orders over $75
                  </div>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 p-3.5 rounded-xl ${
                  isDarkMode ? "bg-[#111827] border border-[#334155]" : "bg-slate-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDarkMode ? "bg-[rgba(251,191,36,0.15)]" : "bg-emerald-100"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ color: isDarkMode ? "#FBBF24" : "#16A34A" }}
                  >
                    thumb_up
                  </span>
                </div>
                <div className="min-w-0">
                  <div className={`text-xs font-semibold truncate ${isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}`}>
                    4.9/5 Rating
                  </div>
                  <div className="text-[11px] truncate" style={{ color: "#94A3B8" }}>
                    14,200+ Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
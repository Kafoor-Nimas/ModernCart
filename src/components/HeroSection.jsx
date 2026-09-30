import { useApp } from "../context/AppContext";

export default function HeroSection() {
  const { isDarkMode } = useApp();

  return (
    <section className="w-full px-6 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-semibold text-xs ${
              isDarkMode
                ? "bg-slate-800 text-blue-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            NEW COLLECTION 2025
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-2xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Discover products you’ll{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-8">
              love
            </span>
            .
          </h1>
          <p
            className={`text-base sm:text-lg max-w-xl leading-relaxed ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Explore carefully selected products with great quality, modern
            design, and exceptional value. Engineered for effortless living and
            curated with obsessive precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all duration-200"
              href="#featured"
            >
              <span>Shop Now</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
            <a
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                isDarkMode
                  ? "bg-slate-800 text-white hover:bg-slate-700"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}
              href="#categories"
            >
              <span>Explore Categories</span>
              <span className="material-symbols-outlined text-[18px] text-slate-400">
                grid_view
              </span>
            </a>
          </div>

          {/* Social Proof Stats */}
          <div
            className={`grid grid-cols-3 gap-6 pt-6 mt-4 w-full max-w-lg border p-5 rounded-2xl shadow-sm ${
              isDarkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-100"
            }`}
          >
            <div>
              <div
                className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                140k+
              </div>
              <div className="text-xs text-slate-400">Happy Customers</div>
            </div>
            <div>
              <div
                className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                4.92 / 5
              </div>
              <div className="text-xs text-slate-400">Verified Rating</div>
            </div>
            <div>
              <div
                className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                24-48h
              </div>
              <div className="text-xs text-slate-400">Courier Delivery</div>
            </div>
          </div>
        </div>

        {/* Right Showcase Card */}
        <div className="lg:col-span-5 relative w-full">
          <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl -z-10 pointer-events-none"></div>
          <div
            className={`relative border rounded-3xl shadow-xl p-5 flex flex-col gap-5 overflow-hidden ${
              isDarkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-100"
            }`}
          >
            <div
              className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden group ${
                isDarkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <img
                alt="Studio One ANC Wireless Headphones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeEkiBHP-gpnEPkjwiuFeBjYbuO4DZJb7oYtkCYN9fq6Z5g692SAISA1kVXwWfMxIPZhLjwsz8R7nrE8itb5o9FIuLlwwWWzumnJHTZM9Qj1XrXLp247rKFimB_jp7tkte9PzXzlCTGYQ2P2vh_L0EaY-f8g2-z_uaEfQ1vvSQLvdADFJDenYd0CSA3TYFDRVBoBpiNvpxfRniUMD0BkwauEfhD55IbJbSf3kjoaPNtHtiC-C5gp9s"
              />
              <div
                className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 ${
                  isDarkMode ? "bg-slate-900/90" : "bg-white/90"
                }`}
              >
                <span
                  className="material-symbols-outlined text-emerald-500 text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className={`text-xs font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  Editor's Pick 2025
                </span>
              </div>
              <div
                className={`absolute bottom-4 left-4 right-4 backdrop-blur-md p-3.5 rounded-xl shadow-md flex items-center justify-between ${
                  isDarkMode ? "bg-slate-900/90" : "bg-white/90"
                }`}
              >
                <div>
                  <span className="block text-xs text-slate-400">
                    AuraSound Flagship
                  </span>
                  <span
                    className={`text-base font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Studio One ANC
                  </span>
                </div>
                <span className="text-xl font-bold text-blue-600">$249</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                className={`flex items-center gap-3 p-3.5 rounded-xl ${
                  isDarkMode ? "bg-slate-800" : "bg-slate-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDarkMode ? "bg-slate-700" : "bg-blue-100"
                  }`}
                >
                  <span className="material-symbols-outlined text-blue-600 text-[20px]">
                    local_shipping
                  </span>
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-xs font-semibold truncate ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Free Express
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    Orders over $75
                  </div>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 p-3.5 rounded-xl ${
                  isDarkMode ? "bg-slate-800" : "bg-slate-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isDarkMode ? "bg-slate-700" : "bg-emerald-100"
                  }`}
                >
                  <span className="material-symbols-outlined text-emerald-600 text-[20px]">
                    thumb_up
                  </span>
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-xs font-semibold truncate ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    4.9/5 Rating
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
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

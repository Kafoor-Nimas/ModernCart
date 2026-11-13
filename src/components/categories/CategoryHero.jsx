import { Link } from "react-router-dom";

const METRICS = [
  { value: "12+", label: "Curated Hubs", accent: "primary" },
  { value: "480+", label: "Verified Items", accent: "default" },
  { value: "99.4%", label: "In-Stock Grade", accent: "tertiary" },
  { value: "24h", label: "Dispatch Window", accent: "default" },
];

export default function CategoryHero({ isDarkMode }) {
  const getMetricValueColor = (accent) => {
    if (accent === "primary") {
      return isDarkMode ? "text-[#adc6ff]" : "text-primary";
    }
    if (accent === "tertiary") {
      return isDarkMode ? "text-[#f9bd22]" : "text-tertiary";
    }
    return isDarkMode ? "text-[#dae2fd]" : "text-on-surface";
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-lg pb-space-md">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-space-xs font-body-sm text-body-sm mb-space-sm ${
          isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
        }`}
      >
        <Link
          to="/"
          className={`transition-colors flex items-center gap-1 ${
            isDarkMode ? "hover:text-[#adc6ff]" : "hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">home</span>
          <span>Home</span>
        </Link>
        <span className="material-symbols-outlined text-[14px] opacity-50">
          chevron_right
        </span>
        <span
          className={`font-semibold ${
            isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
          }`}
        >
          Categories
        </span>
      </nav>

      {/* Page Title & Atmospheric Intro */}
      <div
        className={`relative overflow-hidden rounded-xl p-space-lg md:p-space-xl shadow-sm ${
          isDarkMode
            ? "bg-[#131b2e] border border-[#424754]/50"
            : "bg-surface-container-low"
        }`}
      >
        <div
          className={`absolute -right-20 -top-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
            isDarkMode ? "bg-[#4d8eff]/15" : "bg-primary-container/10"
          }`}
        />
        <div className="relative z-10 max-w-2xl">
          <div
            className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full font-label-sm text-label-sm mb-space-xs uppercase tracking-wider font-semibold ${
              isDarkMode
                ? "bg-[#39475d] text-[#d5e3ff]"
                : "bg-surface-container text-primary"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                isDarkMode ? "bg-[#adc6ff]" : "bg-primary"
              }`}
            />
            Directory Catalog
          </div>
          <h1
            className={`font-headline-xl text-headline-xl font-bold tracking-tight mb-space-xs ${
              isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
            }`}
          >
            Explore Categories
          </h1>
          <p
            className={`font-body-lg text-body-lg ${
              isDarkMode ? "text-[#c2c6d6]" : "text-secondary"
            }`}
          >
            Discover products across a wide range of curated collections. Find
            exactly what you are looking for with engineered precision.
          </p>
        </div>

        {/* Quick Metrics Ribbon */}
        <div
          className={`mt-space-lg pt-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-md rounded-lg p-space-md backdrop-blur ${
            isDarkMode
              ? "bg-[#171f33]/80 border border-[#424754]/40"
              : "bg-surface-container/60"
          }`}
        >
          {METRICS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span
                className={`font-headline-sm text-headline-sm font-bold ${getMetricValueColor(
                  item.accent
                )}`}
              >
                {item.value}
              </span>
              <span
                className={`font-label-sm text-label-sm uppercase tracking-wider ${
                  isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
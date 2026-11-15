import { DEAL_HIGHLIGHTS } from "../../data/dealsData";

export default function DiscountHighlights({ isDarkMode, onSelectCategory }) {
  const accentStyles = {
    error: {
      glow: "bg-[#93000a]/40",
      badge: isDarkMode
        ? "bg-[#93000a] text-[#ffdad6]"
        : "bg-error-container text-on-error-container",
      icon: "text-[#ffb4ab]",
    },
    primary: {
      glow: "bg-[#39475d]/40",
      badge: isDarkMode
        ? "bg-[#39475d] text-[#d5e3ff]"
        : "bg-secondary-container text-on-secondary-fixed",
      icon: "text-[#adc6ff]",
    },
    tertiary: {
      glow: "bg-[#f9bd22]/25",
      badge: "bg-[#f9bd22]/20 text-[#f9bd22]",
      icon: "text-[#f9bd22]",
    },
  };

  return (
    <section className="max-w-[1600px] mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {DEAL_HIGHLIGHTS.map((card) => {
          const style = accentStyles[card.accent] || accentStyles.primary;
          return (
            <div
              key={card.id}
              className={`group relative p-space-lg rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between ${
                isDarkMode
                  ? "bg-[#131b2e] border border-[#424754]/50"
                  : "bg-surface-container-lowest border border-slate-200/70"
              }`}
            >
              <div
                className={`absolute -right-6 -bottom-6 w-32 h-32 ${style.glow} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}
              />
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span
                    className={`px-space-xs py-0.5 rounded font-label-sm text-label-sm font-semibold ${style.badge}`}
                  >
                    {card.badge}
                  </span>
                  <span
                    className={`material-symbols-outlined text-2xl ${style.icon}`}
                  >
                    {card.icon}
                  </span>
                </div>

                <h3
                  className={`font-headline-md text-headline-md mb-space-xs ${
                    isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`font-body-md text-body-md mb-space-lg leading-relaxed ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                  }`}
                >
                  {card.description}
                </p>
              </div>

              <a
                href="#deals-grid"
                onClick={() => onSelectCategory?.(card.filterCategory)}
                className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-[#4d8eff] hover:text-[#adc6ff] font-semibold transition-colors"
              >
                <span>{card.cta}</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
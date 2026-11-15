import { useState, useMemo } from "react";
import { RECOMMENDED_ADDONS } from "../../data/cardData";

export default function RecommendedAddons({ isDarkMode, onAddAddon }) {
  const [startIndex, setStartIndex] = useState(0);

  const orderedAddons = useMemo(() => {
    const len = RECOMMENDED_ADDONS.length;
    return Array.from({ length: len }, (_, i) => {
      return RECOMMENDED_ADDONS[(startIndex + i) % len];
    });
  }, [startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? RECOMMENDED_ADDONS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % RECOMMENDED_ADDONS.length);
  };

  return (
    <div
      className={`mt-16 sm:mt-24 pt-8 ${
        isDarkMode ? "border-t border-[#334155]/60" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
            }`}
          >
            Recommended Add-ons
          </h2>
          <p
            className={`text-sm mt-1 ${
              isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
            }`}
          >
            Frequently paired with items in your cart.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Previous add-on"
            onClick={handlePrev}
            type="button"
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "bg-[#1E293B] border border-[#334155] hover:bg-[#243247] text-[#CBD5E1]"
                : "bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30]"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              chevron_left
            </span>
          </button>
          <button
            aria-label="Next add-on"
            onClick={handleNext}
            type="button"
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "bg-[#1E293B] border border-[#334155] hover:bg-[#243247] text-[#CBD5E1]"
                : "bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30]"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>

      {/* Add-on Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderedAddons.map((addon) => (
          <div
            key={addon.id}
            className={`rounded-xl p-4 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200 ${
              isDarkMode
                ? "bg-[#1E293B] border border-[#334155] shadow-md hover:bg-[#243247]"
                : "bg-white shadow-sm"
            }`}
          >
            <div>
              <div
                className={`w-full h-44 rounded-lg overflow-hidden relative mb-4 ${
                  isDarkMode
                    ? "bg-[#111827] border border-[#334155]"
                    : "bg-[#eff4ff]"
                }`}
              >
                <img
                  alt={addon.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={addon.image}
                />
                {addon.badge && (
                  <span
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-semibold ${
                      isDarkMode
                        ? "bg-[#111827]/90 border border-[#334155] text-[#60A5FA]"
                        : "bg-white/90 text-[#0b1c30]"
                    }`}
                  >
                    {addon.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                }`}
              >
                {addon.brand}
              </span>
              <h4
                className={`text-base font-semibold mt-1 line-clamp-1 ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                }`}
              >
                {addon.name}
              </h4>

              <div className="flex items-center gap-1.5 mt-1.5">
                <div
                  className={`flex ${
                    isDarkMode ? "text-[#FBBF24]" : "text-amber-500"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <span
                  className={`text-xs font-semibold ${
                    isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                  }`}
                >
                  {addon.rating.toFixed(1)}
                </span>
                <span
                  className={`text-xs ${
                    isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                  }`}
                >
                  ({addon.reviews})
                </span>
              </div>
            </div>

            <div
              className={`flex items-center justify-between mt-5 pt-3 ${
                isDarkMode ? "border-t border-[#334155]" : "bg-white"
              }`}
            >
              <span
                className={`text-base font-semibold ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                }`}
              >
                ${addon.price.toFixed(2)}
              </span>
              <button
                onClick={() => onAddAddon(addon)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                  isDarkMode
                    ? "bg-[#111827] border border-[#334155] hover:bg-[#3B82F6] text-[#60A5FA] hover:text-white"
                    : "bg-[#dce9ff] hover:bg-[#004ac6] hover:text-white text-[#004ac6]"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  add
                </span>
                <span>Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
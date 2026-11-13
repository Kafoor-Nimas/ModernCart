import { FILTER_PILLS } from "../../data/categoriesData";

export default function CategoryFilterBar({
  isDarkMode,
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-margin-mobile lg:px-margin py-space-sm">
      <div
        className={`flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md p-space-md rounded-xl shadow-sm ${
          isDarkMode
            ? "bg-[#131b2e] border border-[#424754]/50"
            : "bg-surface-container-low"
        }`}
      >
        {/* Search Box */}
        <div className="relative w-full lg:max-w-md">
          <span
            className={`material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] pointer-events-none ${
              isDarkMode ? "text-[#8c909f]" : "text-on-surface-variant"
            }`}
          >
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 12+ categories..."
            className={`w-full h-11 pl-11 pr-10 rounded-lg font-body-sm text-body-sm focus:outline-none transition-all ${
              isDarkMode
                ? "bg-[#171f33] text-[#dae2fd] placeholder:text-[#8c909f] border border-[#424754] focus:border-[#adc6ff]"
                : "bg-surface-container text-on-surface placeholder:text-on-surface-variant focus:bg-surface-container-high"
            }`}
          />
          {searchQuery.length > 0 && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                isDarkMode
                  ? "text-[#8c909f] hover:text-[#dae2fd]"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          )}
        </div>

        {/* Quick Filter Pills */}
        <div className="flex items-center gap-space-xs overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
          {FILTER_PILLS.map((pill) => {
            const isActive = activeFilter === pill.id;
            return (
              <button
                key={pill.id}
                type="button"
                onClick={() => setActiveFilter(pill.id)}
                className={`px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${
                  isActive
                    ? isDarkMode
                      ? "bg-[#4d8eff] text-[#001a42] font-bold shadow-sm"
                      : "bg-primary-container text-on-primary font-bold shadow-sm"
                    : isDarkMode
                    ? "bg-[#171f33] text-[#c2c6d6] hover:bg-[#222a3d] hover:text-[#dae2fd]"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
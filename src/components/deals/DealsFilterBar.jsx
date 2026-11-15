import { DEAL_CATEGORY_PILLS, QUICK_FILTERS } from "../../data/dealsData";

export default function DealsFilterBar({
  isDarkMode,
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
  activeQuickFilters,
  onToggleQuickFilter,
  categoryCounts,
  filteredCount,
  totalCount,
}) {
  return (
    <section
      id="deals-grid"
      className="max-w-[1600px] px-margin-mobile lg:px-20 pb-space-lg scroll-mt-24 "
    >
      <div
        className={`p-space-md rounded-xl shadow-sm flex flex-col gap-space-md ${
          isDarkMode
            ? "bg-[#131b2e] border border-[#424754]/50"
            : "bg-surface-container-lowest border border-slate-200/70"
        }`}
      >
        {/* Top Filter Bar: Categories and Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          {/* Category Pills */}
          <div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none">
            {DEAL_CATEGORY_PILLS.map((pill) => {
              const isActive = activeCategory === pill.id;
              const count = categoryCounts[pill.id] ?? 0;

              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setActiveCategory(pill.id)}
                  className={`whitespace-nowrap px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all ${
                    isActive
                      ? isDarkMode
                        ? "bg-[#dae2fd] text-[#0b1326] font-bold shadow-sm"
                        : "bg-primary-container text-on-primary font-bold shadow-sm"
                      : isDarkMode
                      ? "bg-[#171f33] text-[#c2c6d6] hover:bg-[#222a3d] hover:text-[#dae2fd]"
                      : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {pill.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-space-xs self-end lg:self-auto min-w-[210px]">
            <span
              className={`font-body-sm text-body-sm whitespace-nowrap ${
                isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
              }`}
            >
              Sort:
            </span>
            <div className="relative w-full">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`w-full font-label-md text-label-md rounded-lg py-2 px-space-sm pr-8 appearance-none focus:outline-none cursor-pointer shadow-sm ${
                  isDarkMode
                    ? "bg-[#171f33] text-[#dae2fd] border border-[#424754]/60 focus:border-[#adc6ff]"
                    : "bg-surface-container-low text-on-surface focus:bg-surface-container"
                }`}
              >
                <option value="discount">Biggest Discount</option>
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <span
                className={`material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-sm ${
                  isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                }`}
              >
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Filter Tags and Counter */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
          <div className="flex flex-wrap items-center gap-space-xs">
            <span
              className={`font-body-sm text-body-sm mr-1 ${
                isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
              }`}
            >
              Quick Filters:
            </span>

            {QUICK_FILTERS.map((qf) => {
              const isSelected = activeQuickFilters.includes(qf.id);
              return (
                <button
                  key={qf.id}
                  type="button"
                  onClick={() => onToggleQuickFilter(qf.id)}
                  className={`inline-flex items-center gap-1 px-space-sm py-1 rounded-md text-label-sm font-label-sm transition-colors ${
                    isSelected
                      ? "bg-[#4d8eff] text-[#001a42] font-bold shadow-sm"
                      : isDarkMode
                      ? "bg-[#171f33] text-[#dae2fd] hover:bg-[#222a3d]"
                      : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-xs ${
                      !isSelected && qf.id === "inStock" ? "text-[#f9bd22]" : ""
                    }`}
                  >
                    {qf.icon}
                  </span>
                  {qf.label}
                </button>
              );
            })}
          </div>

          <p
            className={`font-body-sm text-body-sm ${
              isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
            }`}
          >
            Showing{" "}
            <span
              className={`font-semibold ${
                isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
              }`}
            >
              {filteredCount} of {totalCount}
            </span>{" "}
            active discounted items
          </p>
        </div>
      </div>
    </section>
  );
}
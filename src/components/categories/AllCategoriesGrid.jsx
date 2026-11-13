import { Link } from "react-router-dom";

export default function AllCategoriesGrid({
  isDarkMode,
  categories,
  totalCount,
  onResetFilters,
}) {
  return (
    <section
      id="all-categories"
      className={`w-full py-space-xl ${
        isDarkMode ? "bg-[#131b2e]/60" : "bg-surface-container-low/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg gap-space-xs">
          <div>
            <p
              className={`font-label-sm text-label-sm uppercase tracking-widest font-semibold ${
                isDarkMode ? "text-[#adc6ff]" : "text-primary"
              }`}
            >
              Comprehensive Index
            </p>
            <h2
              className={`font-headline-lg text-headline-lg font-bold tracking-tight ${
                isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
              }`}
            >
              Shop by Category
            </h2>
            <p
              className={`font-body-md text-body-md mt-1 ${
                isDarkMode ? "text-[#c2c6d6]" : "text-secondary"
              }`}
            >
              Browse all {totalCount} engineered departments across everyday
              hardware and living essentials.
            </p>
          </div>
          <div
            className={`flex items-center gap-space-xs font-label-sm text-label-sm ${
              isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isDarkMode ? "bg-[#f9bd22]" : "bg-tertiary"
              }`}
            />
            <span>
              Showing {categories.length} of {totalCount} categories
            </span>
          </div>
        </div>

        {categories.length === 0 ? (
          <div
            className={`rounded-xl p-space-2xl text-center ${
              isDarkMode
                ? "bg-[#171f33] border border-[#424754]/50"
                : "bg-surface-container-lowest"
            }`}
          >
            <p
              className={`font-headline-sm text-headline-sm font-semibold mb-2 ${
                isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
              }`}
            >
              No matching categories found
            </p>
            <p
              className={`font-body-sm text-body-sm mb-4 ${
                isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
              }`}
            >
              Try clearing your search filter or choosing another collection
              pill.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className={`px-4 py-2 rounded-lg font-label-md text-label-md font-semibold ${
                isDarkMode
                  ? "bg-[#4d8eff] text-[#001a42]"
                  : "bg-primary-container text-on-primary"
              }`}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className={`group flex items-center gap-space-md p-space-md rounded-xl transition-all duration-200 shadow-sm ${
                  isDarkMode
                    ? "bg-[#171f33] hover:bg-[#222a3d] border border-[#424754]/40"
                    : "bg-surface-container-lowest hover:bg-surface-container-high border border-outline-variant/20"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                    isDarkMode ? "bg-[#222a3d]" : "bg-surface-container-high"
                  }`}
                >
                  <img
                    alt={cat.name}
                    src={cat.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4
                    className={`font-headline-sm text-headline-sm font-semibold truncate transition-colors ${
                      isDarkMode
                        ? "text-[#dae2fd] group-hover:text-[#adc6ff]"
                        : "text-on-surface group-hover:text-primary"
                    }`}
                  >
                    {cat.name}
                  </h4>
                  <span
                    className={`font-body-sm text-body-sm ${
                      isDarkMode ? "text-[#c2c6d6]" : "text-secondary"
                    }`}
                  >
                    {cat.count} products
                  </span>
                  <span
                    className={`font-label-sm text-label-sm mt-1 flex items-center gap-0.5 font-semibold ${
                      isDarkMode ? "text-[#adc6ff]" : "text-primary"
                    }`}
                  >
                    Explore{" "}
                    <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
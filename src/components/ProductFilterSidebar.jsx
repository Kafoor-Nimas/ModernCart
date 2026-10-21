import { useApp } from "../context/AppContext";

export default function ProductFilterSidebar({
  selectedCategories = [],
  setSelectedCategories = () => {},
  minPrice = 0,
  setMinPrice = () => {},
  maxPrice = 500,
  setMaxPrice = () => {},
  ratingFilter = 0,
  setRatingFilter = () => {},
  inStockOnly = false,
  setInStockOnly = () => {},
  onSaleOnly = false,
  setOnSaleOnly = () => {},
  selectedBrands = [], 
  setSelectedBrands = () => {},
  resetFilters = () => {},
}) {
  const { isDarkMode } = useApp();

  const handleCategoryToggle = (catName) => {
    setSelectedCategories((prev) =>
      prev.includes(catName)
        ? prev.filter((c) => c !== catName)
        : [...prev, catName]
    );
  };

  const handleBrandToggle = (brandName) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

  return (
    <aside
      className={`w-full lg:w-[280px] shrink-0 p-6 rounded-xl shadow-sm lg:sticky lg:top-28 flex flex-col gap-6 border ${
        isDarkMode
          ? "bg-[#111827] border-[#334155] text-[#CBD5E1]"
          : "bg-white border-slate-100 text-slate-700"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ color: isDarkMode ? "#38BDF8" : "#2563EB" }}
          >
            tune
          </span>
          <h2
            className={`font-semibold text-base ${
              isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
            }`}
          >
            Filters
          </h2>
        </div>
        <button
          className={`text-xs hover:underline ${
            isDarkMode ? "text-[#38BDF8]" : "text-blue-600"
          }`}
          type="button"
          onClick={resetFilters}
        >
          Reset
        </button>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-col gap-3">
        <span
          className={`text-xs uppercase tracking-wider font-semibold ${
            isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
          }`}
        >
          Categories
        </span>
        <div className="flex flex-col gap-2.5 text-xs">
          {[
            { name: "Electronics", count: 42 },
            { name: "Fashion", count: 58 },
            { name: "Beauty", count: 24 },
            { name: "Home & Living", count: 35 },
            { name: "Accessories", count: 18 },
          ].map((cat) => {
            const checked = selectedCategories.includes(cat.name);
            return (
              <label
                key={cat.name}
                className="flex items-center justify-between cursor-pointer group"
              >
                <span className="flex items-center gap-2.5">
                  <input
                    checked={checked}
                    className={`w-4 h-4 rounded cursor-pointer ${
                      isDarkMode
                        ? "bg-[#1E293B] border-[#334155] accent-blue-500"
                        : "bg-slate-100 border-slate-300 accent-blue-600"
                    }`}
                    type="checkbox"
                    onChange={() => handleCategoryToggle(cat.name)}
                  />
                  <span
                    className={`group-hover:text-white transition-colors ${
                      checked
                        ? isDarkMode
                          ? "text-[#F8FAFC] font-medium"
                          : "text-slate-900 font-medium"
                        : isDarkMode
                        ? "text-[#CBD5E1]"
                        : "text-slate-600"
                    }`}
                  >
                    {cat.name}
                  </span>
                </span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded border ${
                    isDarkMode
                      ? "text-[#94A3B8] bg-[#1E293B] border-[#334155]"
                      : "text-slate-400 bg-slate-100 border-slate-200"
                  }`}
                >
                  {cat.count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span
            className={`text-xs uppercase tracking-wider font-semibold ${
              isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
            }`}
          >
            Price Range
          </span>
          <span
            className={`text-xs font-bold ${
              isDarkMode ? "text-[#38BDF8]" : "text-blue-600"
            }`}
          >
            ${minPrice} -${maxPrice}
          </span>
        </div>

        {/* Range Slider Visual Track */}
        <div className="relative w-full py-2">
          <div
            className={`w-full h-1.5 rounded-full relative overflow-hidden ${
              isDarkMode ? "bg-[#334155]" : "bg-slate-200"
            }`}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${Math.min(100, Math.max(0, (maxPrice / 500) * 100))}%`,
                backgroundColor: "#3B82F6",
              }}
            ></div>
          </div>
          <div className="flex justify-between items-center -mt-2">
            <div
              className="w-4 h-4 rounded-full shadow cursor-pointer ring-2 ring-blue-400"
              style={{ backgroundColor: "#3B82F6" }}
            ></div>
            <div
              className="w-4 h-4 rounded-full shadow cursor-pointer ring-2 ring-blue-400 mr-1/2"
              style={{ backgroundColor: "#3B82F6" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <div
            className={`rounded-lg p-2 flex flex-col border ${
              isDarkMode
                ? "bg-[#1E293B] border-[#334155]"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <span
              className={`text-[10px] uppercase ${
                isDarkMode ? "text-[#94A3B8]" : "text-slate-400"
              }`}
            >
              Min
            </span>
            <div
              className={`flex items-center text-xs font-semibold ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              <span>$</span>
              <input
                className="w-full bg-transparent pl-0.5 focus:outline-none"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
              />
            </div>
          </div>

          <div
            className={`rounded-lg p-2 flex flex-col border ${
              isDarkMode
                ? "bg-[#1E293B] border-[#334155]"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <span
              className={`text-[10px] uppercase ${
                isDarkMode ? "text-[#94A3B8]" : "text-slate-400"
              }`}
            >
              Max
            </span>
            <div
              className={`flex items-center text-xs font-semibold ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              <span>$</span>
              <input
                className="w-full bg-transparent pl-0.5 focus:outline-none"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value) || 0)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="flex flex-col gap-3">
        <span
          className={`text-xs uppercase tracking-wider font-semibold ${
            isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
          }`}
        >
          Rating
        </span>
        <div className="flex flex-col gap-2 text-xs">
          <label className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-2">
              <input
                checked={ratingFilter === 4}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                name="rating-filter"
                type="radio"
                onChange={() => setRatingFilter(ratingFilter === 4 ? 0 : 4)}
              />
              <div className="flex items-center text-[#FBBF24]">
                {[1, 2, 3, 4].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{
                    color: isDarkMode ? "#475569" : "#CBD5E1",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>
              </div>
              <span
                className={isDarkMode ? "text-[#CBD5E1]" : "text-slate-700"}
              >
                & Up
              </span>
            </div>
            <span className={isDarkMode ? "text-[#94A3B8]" : "text-slate-400"}>
              84
            </span>
          </label>

          <label className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-2">
              <input
                checked={ratingFilter === 3}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                name="rating-filter"
                type="radio"
                onChange={() => setRatingFilter(ratingFilter === 3 ? 0 : 3)}
              />
              <div className="flex items-center text-[#FBBF24]">
                {[1, 2, 3].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                {[1, 2].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[16px]"
                    style={{
                      color: isDarkMode ? "#475569" : "#CBD5E1",
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span
                className={isDarkMode ? "text-[#94A3B8]" : "text-slate-600"}
              >
                & Up
              </span>
            </div>
            <span className={isDarkMode ? "text-[#94A3B8]" : "text-slate-400"}>
              120
            </span>
          </label>
        </div>
      </div>

      {/* Availability Filter */}
      <div className="flex flex-col gap-3">
        <span
          className={`text-xs uppercase tracking-wider font-semibold ${
            isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
          }`}
        >
          Availability
        </span>
        <div className="flex flex-col gap-3 text-xs">
          <label className="flex items-center justify-between cursor-pointer">
            <span
              className={`font-medium ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              In Stock only
            </span>
            <div className="relative inline-flex items-center cursor-pointer">
              <input
                checked={inStockOnly}
                className="sr-only peer"
                type="checkbox"
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              <div
                className={`w-10 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                  isDarkMode
                    ? "bg-[#334155] peer-checked:bg-[#3B82F6]"
                    : "bg-slate-200 peer-checked:bg-blue-600"
                }`}
              ></div>
            </div>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              checked={onSaleOnly}
              className={`w-4 h-4 rounded cursor-pointer ${
                isDarkMode
                  ? "bg-[#1E293B] border-[#334155] accent-blue-500"
                  : "bg-slate-100 border-slate-300 accent-blue-600"
              }`}
              type="checkbox"
              onChange={(e) => setOnSaleOnly(e.target.checked)}
            />
            <span className={isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"}>
              On Sale / Discounted
            </span>
          </label>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="flex flex-col gap-3">
        <span
          className={`text-xs uppercase tracking-wider font-semibold ${
            isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
          }`}
        >
          Brand
        </span>
        <div className="flex flex-col gap-2 text-xs">
          {[
            { name: "AuraSound", count: 14 },
            { name: "Lumixel", count: 9 },
            { name: "Kanso", count: 11 },
            { name: "Forma", count: 8 },
            { name: "KeyCraft", count: 6 },
          ].map((brand) => {
            const checked = selectedBrands.includes(brand.name);
            return (
              <label
                key={brand.name}
                className="flex items-center justify-between cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  <input
                    checked={checked}
                    className={`w-4 h-4 rounded cursor-pointer ${
                      isDarkMode
                        ? "bg-[#1E293B] border-[#334155] accent-blue-500"
                        : "bg-slate-100 border-slate-300 accent-blue-600"
                    }`}
                    type="checkbox"
                    onChange={() => handleBrandToggle(brand.name)}
                  />
                  <span
                    className={`font-medium ${
                      checked
                        ? isDarkMode
                          ? "text-[#F8FAFC]"
                          : "text-slate-900"
                        : isDarkMode
                        ? "text-[#CBD5E1] group-hover:text-white"
                        : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {brand.name}
                  </span>
                </span>
                <span
                  className={isDarkMode ? "text-[#94A3B8]" : "text-slate-400"}
                >
                  {brand.count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 pt-2">
        <button
          className="w-full py-2 px-4 text-white font-semibold text-xs rounded-xl shadow-sm transition-all text-center hover:brightness-110"
          style={{ backgroundColor: "#3B82F6" }}
          type="button"
        >
          Apply Filters
        </button>
        <button
          className={`w-full py-2 px-4 font-semibold text-xs rounded-xl transition-all text-center border ${
            isDarkMode
              ? "bg-[#1E293B] border-[#334155] text-[#CBD5E1] hover:bg-[#334155]"
              : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
          }`}
          type="button"
          onClick={resetFilters}
        >
          Reset All Filters
        </button>
      </div>
    </aside>
  );
}
import  { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import ProductCatalogCard from "../components/ProductCatalogCard";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import { PRODUCTS_DATA } from "../data/data";

export default function Products() {
  const { isDarkMode } = useApp();
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [sortOption, setSortOption] = useState("featured");

  // Interactive Filter States
  const [selectedCategories, setSelectedCategories] = useState(["Electronics"]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [ratingFilter, setRatingFilter] = useState(4);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Filter Reset Handler
  const resetFilters = () => {
    setSelectedCategories([]);
    setMinPrice(0);
    setMaxPrice(500);
    setRatingFilter(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setSelectedBrands([]);
  };

  // Compute Active Filter Pills for Header
  const activeFiltersPills = useMemo(() => {
    const pills = [...selectedCategories];
    if (maxPrice < 500 || minPrice > 0) pills.push(`$${minPrice} - $${maxPrice}`);
    if (ratingFilter > 0) pills.push(`${ratingFilter}★ & Above`);
    if (inStockOnly) pills.push("In Stock");
    if (onSaleOnly) pills.push("On Sale");
    return [...pills, ...selectedBrands];
  }, [selectedCategories, minPrice, maxPrice, ratingFilter, inStockOnly, onSaleOnly, selectedBrands]);

  const removeFilterPill = (pill) => {
    if (selectedCategories.includes(pill)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== pill));
    } else if (selectedBrands.includes(pill)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== pill));
    } else if (pill.includes("★")) {
      setRatingFilter(0);
    } else if (pill.includes("$")) {
      setMinPrice(0);
      setMaxPrice(500);
    } else if (pill === "In Stock") {
      setInStockOnly(false);
    } else if (pill === "On Sale") {
      setOnSaleOnly(false);
    }
  };

  // Perform Real-Time Filtering & Sorting
  const filteredAndSortedProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category Filter
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }

      // Brand Filter
      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      // Price Filter
      const priceNum = parseFloat(product.price);
      if (priceNum < minPrice || priceNum > maxPrice) {
        return false;
      }

      // Rating Filter
      if (ratingFilter > 0 && parseFloat(product.rating) < ratingFilter) {
        return false;
      }

      // Stock Filter
      if (inStockOnly && !product.stockStatus.includes("In Stock")) {
        return false;
      }

      // On Sale Filter
      if (onSaleOnly && !product.discountBadge) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === "price-asc") {
        return parseFloat(a.price) - parseFloat(b.price);
      }
      if (sortOption === "price-desc") {
        return parseFloat(b.price) - parseFloat(a.price);
      }
      if (sortOption === "rating") {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }
      return 0; // Default (Featured)
    });
  }, [
    selectedCategories,
    selectedBrands,
    minPrice,
    maxPrice,
    ratingFilter,
    inStockOnly,
    onSaleOnly,
    sortOption,
  ]);

  return (
    <div
      className={`w-full mt-18 transition-colors ${
        isDarkMode ? "bg-[#0F172A] text-[#F8FAFC]" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Catalog Header Banner */}
      <section
        className={`w-full py-6 px-6 transition-colors ${
          isDarkMode
            ? "bg-[#111827] border-b border-[#334155]"
            : "bg-white border-b border-slate-200"
        }`}
      >
        <div className="max-w-[1700px] mx-auto flex flex-col gap-4">
          {/* Breadcrumbs */}
          <nav
            className={`flex items-center gap-1.5 text-xs ${
              isDarkMode ? "text-[#94A3B8]" : "text-slate-500"
            }`}
          >
            <a
              className={`transition-colors ${
                isDarkMode ? "hover:text-white" : "hover:text-blue-600"
              }`}
              href="#"
            >
              Home
            </a>
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ color: isDarkMode ? "#64748B" : "#94A3B8" }}
            >
              chevron_right
            </span>
            <a
              className={`transition-colors ${
                isDarkMode ? "hover:text-white" : "hover:text-blue-600"
              }`}
              href="#"
            >
              Products
            </a>
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ color: isDarkMode ? "#64748B" : "#94A3B8" }}
            >
              chevron_right
            </span>
            <span
              className={`font-semibold ${
                isDarkMode ? "text-[#CBD5E1]" : "text-slate-900"
              }`}
            >
              All Items
            </span>
          </nav>

          {/* Catalog Title & Sync Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span
                className={`text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full self-start font-bold ${
                  isDarkMode
                    ? "text-[#60A5FA] bg-[#3B82F6]/15 border border-[#3B82F6]/30"
                    : "text-blue-600 bg-blue-50 border border-blue-100"
                }`}
              >
                Curated Catalog
              </span>
              <h1
                className={`text-4xl font-bold tracking-tight ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
                }`}
              >
                All Products
              </h1>
              <p
                className={`text-sm max-w-xl ${
                  isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
                }`}
              >
                Browse our complete collection of modern curated essentials, crafted with intentional minimalism and reliable engineering.
              </p>
            </div>

            <div
              className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl self-start md:self-auto ${
                isDarkMode
                  ? "text-[#22C55E] bg-[#1E293B] border border-[#334155]"
                  : "text-emerald-700 bg-emerald-50 border border-emerald-100"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
              <span>148 items synchronized</span>
            </div>
          </div>

          {/* Control Bar: Showing count, View Toggles & Sorting */}
          <div
            className={`p-4 rounded-xl shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border ${
              isDarkMode
                ? "bg-[#111827] border-[#334155]"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex items-center gap-4 flex-wrap">
              <span
                className={`text-xs ${
                  isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
                }`}
              >
                Showing{" "}
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
                  }`}
                >
                  {filteredAndSortedProducts.length}
                </span>{" "}
                of {PRODUCTS_DATA.length} products
              </span>

              <div
                className={`h-4 w-px hidden sm:block ${
                  isDarkMode ? "bg-[#334155]" : "bg-slate-200"
                }`}
              ></div>

              {/* View Switchers */}
              <div
                className={`flex items-center gap-1.5 p-1 rounded-lg border ${
                  isDarkMode
                    ? "bg-[#1E293B] border-[#334155]"
                    : "bg-slate-100 border-slate-200"
                }`}
              >
                <button
                  aria-label="Grid View"
                  className={`p-1.5 rounded transition-all flex items-center justify-center ${
                    viewMode === "grid"
                      ? isDarkMode
                        ? "bg-[#334155] text-[#38BDF8] shadow-sm"
                        : "bg-white text-blue-600 shadow-sm"
                      : isDarkMode
                      ? "text-[#94A3B8] hover:text-[#F8FAFC]"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  type="button"
                  onClick={() => setViewMode("grid")}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    grid_view
                  </span>
                </button>
                <button
                  aria-label="List View"
                  className={`p-1.5 rounded transition-all flex items-center justify-center ${
                    viewMode === "list"
                      ? isDarkMode
                        ? "bg-[#334155] text-[#38BDF8] shadow-sm"
                        : "bg-white text-blue-600 shadow-sm"
                      : isDarkMode
                      ? "text-[#94A3B8] hover:text-[#F8FAFC]"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  type="button"
                  onClick={() => setViewMode("list")}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    view_list
                  </span>
                </button>
              </div>
            </div>

            {/* Sorting Select Dropdown */}
            <div className="flex items-center gap-2 w-full lg:w-auto justify-between lg:justify-end">
              <label
                className={`text-xs whitespace-nowrap hidden sm:inline ${
                  isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
                }`}
                htmlFor="catalog-sort"
              >
                Sort by:
              </label>
              <div className="relative w-full sm:w-56">
                <select
                  className={`w-full appearance-none text-xs py-2 pl-3.5 pr-9 rounded-xl focus:outline-none transition-colors cursor-pointer border ${
                    isDarkMode
                      ? "bg-[#1E293B] border-[#334155] text-[#F8FAFC] focus:border-blue-500"
                      : "bg-slate-100 border-slate-200 text-slate-900 focus:border-blue-600"
                  }`}
                  id="catalog-sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Default (Featured)</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <span
                  className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[18px]"
                  style={{ color: isDarkMode ? "#94A3B8" : "#94A3B8" }}
                >
                  expand_more
                </span>
              </div>
            </div>
          </div>

          {/* Active Filter Pills */}
          {activeFiltersPills.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span
                className={`text-xs uppercase tracking-wider mr-1 ${
                  isDarkMode ? "text-[#94A3B8]" : "text-slate-400"
                }`}
              >
                Active filters:
              </span>

              {activeFiltersPills.map((filter) => (
                <button
                  key={filter}
                  className={`group flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                    isDarkMode
                      ? "bg-[#1E293B] border-[#334155] text-[#CBD5E1] hover:border-slate-500"
                      : "bg-blue-50 border-blue-100 text-blue-800 hover:bg-blue-100"
                  }`}
                  type="button"
                  onClick={() => removeFilterPill(filter)}
                >
                  <span>{filter}</span>
                  <span
                    className={`material-symbols-outlined text-[14px] ${
                      isDarkMode
                        ? "text-[#94A3B8] group-hover:text-[#F8FAFC]"
                        : "text-blue-500 group-hover:text-blue-900"
                    }`}
                  >
                    close
                  </span>
                </button>
              ))}

              <button
                className={`text-xs underline underline-offset-4 ml-2 transition-colors ${
                  isDarkMode
                    ? "text-[#38BDF8] hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-800"
                }`}
                type="button"
                onClick={resetFilters}
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Grid Content Area */}
      <div className="max-w-[1700px] mx-auto w-full px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Filters */}
          <ProductFilterSidebar
            inStockOnly={inStockOnly}
            maxPrice={maxPrice}
            minPrice={minPrice}
            onSaleOnly={onSaleOnly}
            ratingFilter={ratingFilter}
            resetFilters={resetFilters}
            selectedBrands={selectedBrands}
            selectedCategories={selectedCategories}
            setInStockOnly={setInStockOnly}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            setOnSaleOnly={setOnSaleOnly}
            setRatingFilter={setRatingFilter}
            setSelectedBrands={setSelectedBrands}
            setSelectedCategories={setSelectedCategories}
          />

          {/* Product Listing Main Container */}
          <main className="flex-1 w-full min-w-0">
            {filteredAndSortedProducts.length === 0 ? (
              <div
                className={`text-center py-16 text-sm font-medium rounded-xl border ${
                  isDarkMode
                    ? "bg-[#111827] border-[#334155] text-slate-400"
                    : "bg-white border-slate-200 text-slate-500"
                }`}
              >
                No products match your active filters.
              </div>
            ) : (
              <div
                id="product-grid"
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
                    : "grid grid-cols-1 gap-6"
                }
              >
                {filteredAndSortedProducts.map((product) => (
                  <ProductCatalogCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}

            {/* Pagination controls */}
            <div
              className={`mt-12 p-4 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 border ${
                isDarkMode
                  ? "bg-[#111827] border-[#334155]"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs ${
                    isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
                  }`}
                >
                  Items per page:
                </span>
                <select
                  className={`text-xs px-2.5 py-1.5 rounded-lg focus:outline-none cursor-pointer border ${
                    isDarkMode
                      ? "bg-[#1E293B] border-[#334155] text-[#F8FAFC]"
                      : "bg-slate-100 border-slate-200 text-slate-900"
                  }`}
                >
                  <option value="24">24</option>
                  <option value="48">48</option>
                  <option value="96">96</option>
                </select>
              </div>

              <nav className="flex items-center gap-1">
                <button
                  disabled
                  className={`p-2 rounded-lg opacity-40 cursor-not-allowed flex items-center justify-center ${
                    isDarkMode ? "text-slate-600" : "text-slate-400"
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button
                  className="w-9 h-9 rounded-lg bg-[#3B82F6] text-white font-bold text-xs flex items-center justify-center shadow-sm"
                  type="button"
                >
                  1
                </button>
                <button
                  className={`w-9 h-9 rounded-lg text-xs flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC]"
                      : "hover:bg-slate-100 text-slate-600"
                  }`}
                  type="button"
                >
                  2
                </button>
                <button
                  className={`w-9 h-9 rounded-lg text-xs flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC]"
                      : "hover:bg-slate-100 text-slate-600"
                  }`}
                  type="button"
                >
                  3
                </button>
                <span
                  className={`px-1 text-xs ${
                    isDarkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  ...
                </span>
                <button
                  className={`w-9 h-9 rounded-lg text-xs flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC]"
                      : "hover:bg-slate-100 text-slate-600"
                  }`}
                  type="button"
                >
                  7
                </button>
                <button
                  className={`p-2 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode
                      ? "text-slate-300 hover:bg-[#1E293B]"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
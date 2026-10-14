import  { useState } from "react";
import { useApp } from "../context/AppContext";
import ProductCatalogCard from "../components/ProductCatalogCard";
import ProductFilterSidebar from "../components/ProductFilterSidebar";

const PRODUCTS_DATA = [
  {
    id: "p1",
    title: "Studio One ANC",
    brand: "AuraSound",
    price: "189.00",
    originalPrice: "239.00",
    discountBadge: "-20%",
    rating: "4.9",
    reviewsCount: "340",
    stockStatus: "In Stock",
    category: "Electronics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNxixyRR7xU9vPaLjBuyBha1nJOJCyjWwjXof2rIdB6fe87un-eaMYgCdq-d7M6pVKGe8q5xUzfxZAh9hhLWTLqG_8LIk4O1ELveyEPfyo1PArF28lHOwmh1PYrSPuDBWd_GuizBSCYmAy0NWCYw9VzgyyLPeOeP-9K3eemJRpiYim5gdpbkNB-pYV7JhKPz86kiAsd7s5PFofeZhhJR7U1PvzSR3YrEhfivE1h8qPd2GEhapEZ7_O",
  },
  {
    id: "p2",
    title: "Lumen Arc Desk Task",
    brand: "Lumixel",
    price: "125.00",
    originalPrice: "149.00",
    discountBadge: "-15%",
    rating: "4.8",
    reviewsCount: "128",
    stockStatus: "In Stock",
    category: "Electronics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlIqxV6RalkMCgEnyXY-92dfIQWO3UlECAhy9Cjdwe2-H97rl-DxfcHRJZ3yALQma6kzuuzW-v1iRFhUiMSx0Ld7AdDnYjyNtuc_J_6_eGAKlrDPYpYH94AOfvAZPrzE-u-_QzcV3W1wcfPRTivPw3ycIvBZW4wBL4pTB_O0fHyqASp3IvjID99l-CT54zwXZHsC8C-VUK-59KDbKosHcmARYs0FSSwa0V4Fs3PVNo_BDwqBAAkT8U",
  },
  {
    id: "p3",
    title: "Tactile 75 Artisan",
    brand: "KeyCraft",
    price: "168.00",
    originalPrice: "240.00",
    discountBadge: "-30%",
    rating: "5.0",
    reviewsCount: "89",
    stockStatus: "Low Stock - 3 left",
    category: "Electronics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbqffo5jeHx-VklAn6ugDaka6GqGUEzu_8ERHZJUvRJKxLrm2X7Z8ot7rG15ll1FdXE3O_8yE5wxayOv5STDvq7BOc7NJlPj7sNXbtUbMp7smlfD2E5QBXd_t1_tCWoCCxkrZN3DjU-dsJg5T8zqzuU5hFJzkdUzAZVU-Sod5Z-CArm1F_zUh1HHN_9U8PVKQLP-suQ92SvgYp9D8gIje4gogbemGilOgLHjRRhVkapuUCL7M8ABG5",
  },
  {
    id: "p4",
    title: "Artisan Dripper Set",
    brand: "Kanso",
    price: "78.00",
    originalPrice: null,
    discountBadge: null,
    rating: "4.7",
    reviewsCount: "64",
    stockStatus: "In Stock",
    category: "Home & Living",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_7YZl2S5ARae3o8uNLCxkSsvqYPfMSgEuBpCIO9mgrFkicAUxEGhbBe0fUu_gbkGIX-obbUmGL4UP7ycLj9I2MJbGFpxYnWw4zOWUqtsD_BKMspXBDsn2AqtAaukngoK_qz8TgHKhyXZx8QzyjUDsXvlCiw6GYjXYWREx6Rg4nrnkk-MnUSmVRby4K15YUt2oqcb50pHJk-3ALwOgv7mXWsEjoFMcGgYNfCCsY12TEHOylP079h7m",
  },
  {
    id: "p5",
    title: "Chronos Pulse Elite",
    brand: "Forma",
    price: "245.00",
    originalPrice: "325.00",
    discountBadge: "-25%",
    rating: "4.9",
    reviewsCount: "210",
    stockStatus: "In Stock",
    category: "Accessories",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpDGlCv0_IMPbuNFjdfY_H-aol5oIxyxpcOxZeA2DRPKo0weXgtRutAVYt97VAFtx4bPcnT9_Ven50DZyxGZg1c0AAnDMgtYqcAjgnHCx53D7Q-791zCnAl6i_z6k5Q00gB60gi0l_1qxMqFdhkaXpTUTRMOa-HZ1c1mJpKf-JGj3HEuqsR7-zv8_q6qbCrz6IYkz98op7dYBpIq4aAGwcncM0qYHh0FKWY7-mCgNyJiFngbOe7QGe",
  },
  {
    id: "p6",
    title: "Terra Curved Vases",
    brand: "Kanso",
    price: "92.00",
    originalPrice: null,
    discountBadge: null,
    rating: "4.6",
    reviewsCount: "45",
    stockStatus: "In Stock",
    category: "Home & Living",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMx7KiwTP-Nvu0nZn4A-2GXpIfJOxY-AMw4c9Q1RT9ehwPH7rLQMWKs0z_we7g9HYu5iNvItkppab1jREI2-YG7lhsLCcxk6QSG1P67e41nSDlSHhBBi035ST9DK6f3yvvLuX2XixOUI7R5fnlm-HB9ca_6BmCbXTKLEKqbO-_7AUct1KFqTS7WPgM6SDIETwPIkPCxdE050ptaKvp-F34esS-se412oAnfR804qLb2LaarfFV0Xmk",
  },
  {
    id: "p7",
    title: "Slate MagPower Dock",
    brand: "AuraSound",
    price: "79.00",
    originalPrice: "89.00",
    discountBadge: "-10%",
    rating: "4.8",
    reviewsCount: "182",
    stockStatus: "Low Stock - 5 left",
    category: "Electronics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRJWgZFB3oMqSeMATffMCHlf-3g2cI-iQlqi3ZnhwUWjrkyTkJ5FYytZj6Dob1lFkdsTtnBRD52z8sUaoUx62XtQtI5i1h4KqpF_tDGWdR3oE1V3HsLe2zv2xCjUHWUAqAGIKDxtK_T39uzdzXVn3OuFFJbY7IVWTdsXNzFPjzN6y5yx_MMxjeuXaNaiO4HkQ_VhesC9MtavSuc3aUSJbtl8thet-Jy_x2cISwWCGpCY0oo-Dnj-Nx",
  },
  {
    id: "p8",
    title: "Aura Pods True Wireless",
    brand: "AuraSound",
    price: "149.00",
    originalPrice: "189.00",
    discountBadge: "-20%",
    rating: "4.9",
    reviewsCount: "512",
    stockStatus: "In Stock",
    category: "Electronics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAsnD9FFxexp85bObfry9k5-_Ul2AHclvbzqviJh00EI0F_MSVKzfDD7tfcJJq1fkoapW58xqYom5Aw4oAsbfI3IpgF_mfhu-fGYdONxj9LGwLM4pgvkReRSq3gi1SDoHjRUmqxf5BPDjhr-4Jl35hCitUaDyEY6MHtv5L5cbiU30aexjcJpXjNkh5wsR6H_Tz_mkIbY00WteV0tunasSDl_uuEpiSkP3B5WPRZtEQnONBQl3JEVj-",
  },
];

export default function Products() {
  const { isDarkMode } = useApp();
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [sortOption, setSortOption] = useState("featured");
  const [activeFilters, setActiveFilters] = useState([
    "Electronics",
    "Under $200",
    "4★ & Above",
  ]);

  const removeFilter = (filterToRemove) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div
      className={`w-full transition-colors ${
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
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
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
                className={`text-3xl font-bold tracking-tight ${
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
                  24
                </span>{" "}
                of 148 products
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
                  <option value="newest">Newest Arrivals</option>
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
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span
                className={`text-xs uppercase tracking-wider mr-1 ${
                  isDarkMode ? "text-[#94A3B8]" : "text-slate-400"
                }`}
              >
                Active filters:
              </span>

              {activeFilters.map((filter) => (
                <button
                  key={filter}
                  className={`group flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                    isDarkMode
                      ? "bg-[#1E293B] border-[#334155] text-[#CBD5E1] hover:border-slate-500"
                      : "bg-blue-50 border-blue-100 text-blue-800 hover:bg-blue-100"
                  }`}
                  type="button"
                  onClick={() => removeFilter(filter)}
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
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Grid Content Area */}
      <div className="max-w-7xl mx-auto w-full px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Filters */}
          <ProductFilterSidebar />

          {/* Product Listing Main Container */}
          <main className="flex-1 w-full min-w-0">
            <div
              id="product-grid"
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
                  : "grid grid-cols-1 gap-6"
              }
            >
              {PRODUCTS_DATA.map((product) => (
                <ProductCatalogCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>

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
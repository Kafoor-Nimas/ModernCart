import { useApp } from "../context/AppContext";
import { CATEGORIES } from "../data/data";

export default function CategoriesSection({ onSelectCategory }) {
  const { isDarkMode } = useApp();

  return (
    <section
      className="w-full px-6 py-12 max-w-[1600px] mx-auto"
      id="categories"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-1">
            Curated Catalog
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Browse by Category
          </h2>
        </div>
        <a
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          href="#featured"
        >
          <span>View all 18 departments</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            east
          </span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat, idx) => (
          <a
            key={idx}
            className={`group rounded-2xl p-3 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 ${
              isDarkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-100"
            }`}
            href="#featured"
            onClick={() => onSelectCategory && onSelectCategory(cat.filterKey)}
          >
            <div
              className={`relative w-full aspect-square rounded-xl overflow-hidden ${
                isDarkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <img
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                src={cat.image}
              />
            </div>
            <div className="px-1 pb-1">
              <h3
                className={`text-sm font-semibold group-hover:text-blue-600 transition-colors leading-tight ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {cat.title}
              </h3>
              <span className="inline-block mt-1 text-xs text-slate-400">
                {cat.count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

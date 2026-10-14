import { useApp } from "../context/AppContext";

export default function ProductFilterSidebar() {
  const { isDarkMode } = useApp();

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
            { name: "Electronics", count: 42, checked: true },
            { name: "Fashion", count: 58, checked: false },
            { name: "Beauty", count: 24, checked: false },
            { name: "Home & Living", count: 35, checked: false },
            { name: "Accessories", count: 18, checked: false },
          ].map((cat) => (
            <label
              key={cat.name}
              className="flex items-center justify-between cursor-pointer group"
            >
              <span className="flex items-center gap-2.5">
                <input
                  defaultChecked={cat.checked}
                  className={`w-4 h-4 rounded cursor-pointer ${
                    isDarkMode
                      ? "bg-[#1E293B] border-[#334155] accent-blue-500"
                      : "bg-slate-100 border-slate-300 accent-blue-600"
                  }`}
                  type="checkbox"
                />
                <span
                  className={`group-hover:text-white transition-colors ${
                    cat.checked
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
          ))}
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
            $0 - $500
          </span>
        </div>

        {/* Range Slider Track Graphic */}
        <div className="relative w-full py-2">
          <div
            className={`w-full h-1.5 rounded-full relative overflow-hidden ${
              isDarkMode ? "bg-[#334155]" : "bg-slate-200"
            }`}
          >
            <div
              className="absolute left-0 top-0 h-full w-1/2 rounded-full"
              style={{ backgroundColor: "#3B82F6" }}
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
                defaultValue={0}
                className="w-full bg-transparent pl-0.5 focus:outline-none"
                type="number"
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
                defaultValue={500}
                className="w-full bg-transparent pl-0.5 focus:outline-none"
                type="number"
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
                defaultChecked
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                name="rating-filter"
                type="radio"
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
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div
                className={`w-10 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                  isDarkMode
                    ? "bg-[#334155] peer-checked:bg-[#3B82F6]"
                    : "bg-slate-200 peer-checked:bg-blue-600"
                }`}
              ></div>
            </div>
          </label>
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
        >
          Reset All Filters
        </button>
      </div>
    </aside>
  );
}
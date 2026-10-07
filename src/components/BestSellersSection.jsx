import { useRef } from "react";
import { useApp } from "../context/AppContext";

export default function BestSellersSection({ bestSellers }) {
  const { addToCart, isDarkMode } = useApp();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`w-full py-14 px-6 transition-colors ${
        isDarkMode ? "bg-slate-900/60" : "bg-slate-100"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-semibold text-xs mb-1">
              <span className="material-symbols-outlined text-[18px]">
                local_fire_department
              </span>
              <span>HIGH VELOCITY DEMAND</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Weekly Best Sellers
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                isDarkMode
                  ? "bg-slate-800 text-white hover:bg-slate-700"
                  : "bg-white text-slate-900 hover:bg-slate-200"
              }`}
              type="button"
              onClick={() => scroll("left")}
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button
              aria-label="Next"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                isDarkMode
                  ? "bg-slate-800 text-white hover:bg-slate-700"
                  : "bg-white text-slate-900 hover:bg-slate-200"
              }`}
              type="button"
              onClick={() => scroll("right")}
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-4 border shadow-sm flex flex-col justify-between group hover:shadow-md transition-all min-w-[260px] sm:min-w-0 ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800 text-white"
                  : "bg-white border-slate-100 text-slate-900"
              }`}
            >
              <div>
                <div
                  className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 ${
                    isDarkMode ? "bg-slate-800" : "bg-slate-100"
                  }`}
                >
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={item.image}
                  />
                  <span
                    className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-red-500 text-xs font-semibold flex items-center gap-1 shadow-sm backdrop-blur-sm ${
                      isDarkMode ? "bg-slate-900/90" : "bg-white/90"
                    }`}
                  >
                    {item.salesTag}
                  </span>
                </div>
                <div className="text-xs text-slate-400">{item.brand}</div>
                <h4
                  className={`text-base font-semibold mt-1 truncate ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 mt-2">
                  <span
                    className="material-symbols-outlined text-amber-400 text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.rating}
                  </span>
                  <span className="text-xs text-slate-400">
                    ({item.reviewsCount})
                  </span>
                </div>
              </div>

              <div
                className={`mt-4 pt-3 flex items-center justify-between px-3 py-2 rounded-xl ${
                  isDarkMode ? "bg-slate-800/60" : "bg-slate-50"
                }`}
              >
                <div>
                  <span
                    className={`font-bold text-lg ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    ${item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-slate-400 line-through text-xs ml-1.5">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>
                <button
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1 active:scale-95"
                  type="button"
                  onClick={() => addToCart(item)}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add
                  </span>
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

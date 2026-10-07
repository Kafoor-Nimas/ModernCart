import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist, isDarkMode } = useApp();
  const isFavorited = wishlist.includes(product.id);

  return (
    <div
      className={`rounded-2xl p-4 shadow-sm border transition-all duration-300 flex flex-col justify-between group ${
        isDarkMode
          ? "bg-[#1E293B] border-[#334155] text-[#CBD5E1]"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      <div>
        <div
          className={`relative w-full aspect-square rounded-xl overflow-hidden mb-3.5 ${
            isDarkMode ? "bg-[#0F172A]" : "bg-slate-100"
          }`}
        >
          <img
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={product.image}
          />

          {product.discountBadge && (
            <span
              className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-white font-bold text-xs"
              style={{ backgroundColor: "#F43F5E" }}
            >
              {product.discountBadge}
            </span>
          )}

          <button
            aria-label="Save to Wishlist"
            className={`wishlist-btn absolute top-2.5 right-2.5 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
              isDarkMode
                ? "bg-[rgba(17,24,39,0.8)] border border-[#334155] text-[#CBD5E1]"
                : "bg-white/80 text-slate-400 hover:text-red-500"
            } ${isFavorited ? "text-[#F43F5E]" : ""}`}
            type="button"
            onClick={() => toggleWishlist(product.id)}
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>

        <div className="flex items-center justify-between text-xs" style={{ color: "#94A3B8" }}>
          <span>{product.brand}</span>
          <span
            className="inline-flex items-center gap-1 font-semibold"
            style={{ color: product.stockStatus === "Low Stock" ? "#F59E0B" : "#22C55E" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: product.stockStatus === "Low Stock" ? "#F59E0B" : "#22C55E" }}
            ></span>{" "}
            {product.stockStatus}
          </span>
        </div>

        <h3
          className={`font-semibold text-base mt-1 line-clamp-1 ${
            isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
          }`}
        >
          {product.title}
        </h3>

        <div className="flex items-center gap-1 mt-2">
          <span
            className="material-symbols-outlined text-[16px]"
            style={{ color: "#FBBF24", fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className={`font-semibold text-xs ${
              isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
            }`}
          >
            {product.rating}
          </span>
          <span className="text-xs" style={{ color: "#94A3B8" }}>
            ({product.reviewsCount} reviews)
          </span>
        </div>
      </div>

      <div
        className="mt-5 pt-3 flex items-center justify-between"
        style={{ borderTop: isDarkMode ? "1px solid #334155" : "1px solid #F1F5F9" }}
      >
        <div>
          <span
            className={`font-bold text-lg ${
              isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
            }`}
          >
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="line-through text-xs ml-1.5" style={{ color: "#64748B" }}>
              ${product.originalPrice}
            </span>
          )}
        </div>

        <button
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-xs font-semibold transition-colors shadow-sm active:scale-95 hover:brightness-110"
          style={{ backgroundColor: "#3B82F6" }}
          type="button"
          onClick={() => addToCart(product)}
        >
          <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
import  { useState } from "react";
import { useApp } from "../context/AppContext";

export default function ProductCatalogCard({ product, viewMode }) {
  const { addToCart, toggleWishlist, wishlist, isDarkMode } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const isFavorited = wishlist.includes(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  return (
    <article
      className={`group rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex ${
        viewMode === "list" ? "flex-col md:flex-row gap-6" : "flex-col justify-between"
      } border ${
        isDarkMode
          ? "bg-[#1E293B] hover:bg-[#243247] border-[#334155] text-[#CBD5E1]"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      <div className={viewMode === "list" ? "flex-1 flex flex-col md:flex-row gap-6" : ""}>
        {/* Product Image Box */}
        <div
          className={`relative aspect-square rounded-lg overflow-hidden mb-3 flex items-center justify-center ${
            viewMode === "list" ? "w-full md:w-48 mb-0 shrink-0" : "w-full"
          } ${isDarkMode ? "bg-[#0F172A]" : "bg-slate-100"}`}
        >
          <img
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={product.image}
          />

          {product.discountBadge && (
            <div
              className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-white font-bold text-xs shadow-sm"
              style={{ backgroundColor: "#F43F5E" }}
            >
              {product.discountBadge}
            </div>
          )}

          <button
            aria-label="Toggle Wishlist"
            className={`wishlist-btn absolute top-2 right-2 p-1.5 rounded-full backdrop-blur transition-colors shadow-sm ${
              isDarkMode
                ? "bg-[#1E293B]/80 border border-[#334155] hover:bg-[#1E293B]"
                : "bg-white/80 hover:bg-white"
            } ${isFavorited ? "text-[#F43F5E]" : isDarkMode ? "text-slate-400" : "text-slate-500"}`}
            type="button"
            onClick={() => toggleWishlist(product.id)}
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{
                fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Info Area */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span
                className={`text-xs uppercase tracking-wider ${
                  isDarkMode ? "text-[#94A3B8]" : "text-slate-400"
                }`}
              >
                {product.brand}
              </span>
              <div className="flex items-center gap-1 text-xs">
                <span
                  className="material-symbols-outlined text-[#FBBF24] text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className={`font-bold ${
                    isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
                  }`}
                >
                  {product.rating}
                </span>
                <span style={{ color: isDarkMode ? "#94A3B8" : "#94A3B8" }}>
                  ({product.reviewsCount})
                </span>
              </div>
            </div>

            <h3
              className={`font-semibold text-base mb-2 truncate transition-colors ${
                isDarkMode
                  ? "text-[#F8FAFC] group-hover:text-[#38BDF8]"
                  : "text-slate-900 group-hover:text-blue-600"
              }`}
            >
              {product.title}
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <span
                className={`font-bold text-lg ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
                }`}
              >
                ${product.price}
              </span>
              {product.originalPrice && (
                <span
                  className={`line-through text-xs ${
                    isDarkMode ? "text-[#64748B]" : "text-slate-400"
                  }`}
                >
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: product.stockStatus.includes("Low Stock")
                    ? "#F59E0B"
                    : "#22C55E",
                }}
              ></span>
              <span
                className="text-xs font-medium"
                style={{
                  color: product.stockStatus.includes("Low Stock")
                    ? isDarkMode
                      ? "#FBBF24"
                      : "#D97706"
                    : "#22C55E",
                }}
              >
                {product.stockStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Add To Cart Button */}
      <button
        className={`w-full py-2 px-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all ${
          isAdding
            ? "bg-[#22C55E] text-white"
            : "text-white active:scale-95 hover:brightness-110"
        }`}
        style={{
          backgroundColor: isAdding ? "#22C55E" : "#3B82F6",
        }}
        type="button"
        onClick={handleAddToCart}
      >
        <span
          className={`material-symbols-outlined text-[18px] ${
            isAdding ? "animate-spin" : ""
          }`}
        >
          {isAdding ? "refresh" : "add_shopping_cart"}
        </span>
        <span>{isAdding ? "Adding..." : "Add to Cart"}</span>
      </button>
    </article>
  );
}
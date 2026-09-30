import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist, isDarkMode } = useApp();
  const isFavorited = wishlist.includes(product.id);

  return (
    <div
      className={`rounded-2xl p-4 shadow-sm border transition-all duration-300 flex flex-col justify-between group ${
        isDarkMode
          ? "bg-slate-900 border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      <div>
        <div
          className={`relative w-full aspect-square rounded-xl overflow-hidden mb-3.5 ${
            isDarkMode ? "bg-slate-800" : "bg-slate-100"
          }`}
        >
          <img
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={product.image}
          />
          {product.discountBadge && (
            <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-red-600 text-white font-bold text-xs">
              {product.discountBadge}
            </span>
          )}
          <button
            aria-label="Save to Wishlist"
            className={`wishlist-btn absolute top-2.5 right-2.5 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
              isDarkMode ? "bg-slate-900/80" : "bg-white/80"
            } ${isFavorited ? "text-red-500" : "text-slate-400 hover:text-red-500"}`}
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

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{product.brand}</span>
          <span
            className={`inline-flex items-center gap-1 font-semibold ${
              product.stockStatus === "Low Stock"
                ? "text-amber-500"
                : "text-emerald-600"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                product.stockStatus === "Low Stock"
                  ? "bg-amber-500"
                  : "bg-emerald-600"
              }`}
            ></span>{" "}
            {product.stockStatus}
          </span>
        </div>

        <h3
          className={`font-semibold text-base mt-1 line-clamp-1 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {product.title}
        </h3>

        <div className="flex items-center gap-1 mt-2">
          <span
            className="material-symbols-outlined text-amber-400 text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className={`font-semibold text-xs ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {product.rating}
          </span>
          <span className="text-xs text-slate-400">
            ({product.reviewsCount} reviews)
          </span>
        </div>
      </div>

      <div className="mt-5 pt-3 flex items-center justify-between">
        <div>
          <span
            className={`font-bold text-lg ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-slate-400 line-through text-xs ml-1.5">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <button
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm active:scale-95"
          type="button"
          onClick={() => addToCart(product)}
        >
          <span className="material-symbols-outlined text-[18px]">
            shopping_bag
          </span>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

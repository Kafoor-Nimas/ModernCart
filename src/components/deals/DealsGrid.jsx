import { useApp } from "../../context/AppContext";

export default function DealsGrid({ isDarkMode, products, onResetFilters }) {
  const appContext = useApp();
  const wishlist = appContext?.wishlist || [];
  const toggleWishlist = appContext?.toggleWishlist;
  const addToCart = appContext?.addToCart;

  return (
    <section className="max-w-[1600px] mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
      <div className="mb-space-lg">
        <h2
          className={`font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tight ${
            isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
          }`}
        >
          Deals You'll Love
        </h2>
        <p
          className={`font-body-md text-body-md mt-1 ${
            isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
          }`}
        >
          Save more on selected products from our collection. Prices reflect
          verified discounts.
        </p>
      </div>

      {products.length === 0 ? (
        <div
          className={`rounded-xl p-12 text-center ${
            isDarkMode
              ? "bg-[#131b2e] border border-[#424754]/50"
              : "bg-surface-container-lowest border border-slate-200/70"
          }`}
        >
          <span className="material-symbols-outlined text-4xl text-[#8c909f] mb-2">
            search_off
          </span>
          <h3
            className={`font-headline-sm text-headline-sm mb-1 ${
              isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
            }`}
          >
            No deals match your selected filters
          </h3>
          <p
            className={`font-body-md text-body-md mb-4 ${
              isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
            }`}
          >
            Try clearing some quick filters or switching back to all categories.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-lg bg-[#4d8eff] hover:bg-[#3b82f6] text-[#001a42] font-bold font-label-md text-label-md transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {products.map((product) => {
            const isWishlisted = wishlist.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className={`group relative rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden ${
                  isDarkMode
                    ? "bg-[#131b2e] border border-[#424754]/50"
                    : "bg-surface-container-lowest border border-slate-200/70"
                }`}
              >
                {/* Image & Badges */}
                <div
                  className={`relative w-full aspect-square overflow-hidden ${
                    isDarkMode ? "bg-[#171f33]" : "bg-surface-container-low"
                  }`}
                >
                  <img
                    alt={product.name}
                    src={product.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />

                  <span className="absolute top-space-sm left-space-sm px-space-xs py-0.5 rounded bg-[#ffb4ab] text-[#690005] font-label-sm text-label-sm font-bold shadow-sm">
                    -{product.discountPercent}% OFF
                  </span>

                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    onClick={() => toggleWishlist?.(product)}
                    className={`absolute top-space-sm right-space-sm p-1.5 rounded-full backdrop-blur-sm transition-colors shadow-sm ${
                      isWishlisted
                        ? "bg-[#ffb4ab] text-[#690005]"
                        : isDarkMode
                        ? "bg-[#060e20]/75 text-[#dae2fd] hover:text-[#ffb4ab]"
                        : "bg-white/80 text-slate-700 hover:text-red-500"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-lg block"
                      style={{
                        fontVariationSettings: isWishlisted
                          ? "'FILL' 1"
                          : "'FILL' 0",
                      }}
                    >
                      favorite
                    </span>
                  </button>
                </div>

                {/* Card Details */}
                <div className="p-space-md flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-space-xs mb-1">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#8c909f]">
                        {product.brand}
                      </span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#f9bd22]/15 text-[#f9bd22] font-label-sm text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f9bd22]" />
                        {product.inStock ? "In Stock" : "Low Stock"}
                      </span>
                    </div>

                    <h3
                      className={`font-headline-sm text-headline-sm font-semibold truncate mb-1 ${
                        isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                      }`}
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-space-sm">
                      <span
                        className="material-symbols-outlined text-amber-500 text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className={`font-label-md text-label-md font-bold ${
                          isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                        }`}
                      >
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="font-body-sm text-body-sm text-[#8c909f]">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-space-xs mb-space-md">
                      <span
                        className={`font-headline-md text-headline-md font-bold ${
                          isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                        }`}
                      >
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="font-body-sm text-body-sm line-through text-[#8c909f]">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart?.(product)}
                      className="w-full py-2.5 px-space-md bg-[#4d8eff] hover:bg-[#3b82f6] text-[#001a42] font-bold font-label-md text-label-md rounded-lg shadow-sm transition-colors flex items-center justify-center gap-space-xs"
                    >
                      <span className="material-symbols-outlined text-base">
                        shopping_bag
                      </span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { POPULAR_PRODUCTS } from "../../data/categoriesData";

export default function PopularProductsGrid({ isDarkMode }) {
  const [wishlist, setWishlist] = useState({});
  const [addedToCart, setAddedToCart] = useState({});

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (addedToCart[id]) return;
    setAddedToCart((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg">
        <div>
          <p
            className={`font-label-sm text-label-sm uppercase tracking-widest font-semibold ${
              isDarkMode ? "text-[#adc6ff]" : "text-primary"
            }`}
          >
            Curated Highlights
          </p>
          <h2
            className={`font-headline-lg text-3xl font-bold tracking-tight ${
              isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
            }`}
          >
            Popular Products across Categories
          </h2>
        </div>
        <Link
          to="/products"
          className={`inline-flex items-center gap-1 font-label-md text-label-md hover:underline mt-2 sm:mt-0 font-semibold ${
            isDarkMode ? "text-[#adc6ff]" : "text-primary"
          }`}
        >
          View Entire Catalog
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {POPULAR_PRODUCTS.map((prod) => {
          const isWishlisted = !!wishlist[prod.id];
          const isAdded = !!addedToCart[prod.id];
          return (
            <Link
              key={prod.id}
              to={`/product/${prod.id}`}
              className={`group flex flex-col rounded-xl p-space-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ${
                isDarkMode
                  ? "bg-[#171f33] border border-[#424754]/50"
                  : "bg-surface-container-lowest border border-outline-variant/20"
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative w-full aspect-square rounded-lg overflow-hidden mb-space-sm ${
                  isDarkMode ? "bg-[#222a3d]" : "bg-surface-container-low"
                }`}
              >
                <img
                  alt={prod.title}
                  src={isDarkMode ? prod.darkImg : prod.lightImg}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {prod.badgeType === "discount" ? (
                  <span
                    className={`absolute top-2 left-2 px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold ${
                      isDarkMode
                        ? "bg-[#93000a] text-[#ffdad6]"
                        : "bg-error text-on-error"
                    }`}
                  >
                    {prod.badge}
                  </span>
                ) : (
                  <span
                    className={`absolute top-2 left-2 px-2 py-0.5 rounded-full backdrop-blur font-label-sm text-label-sm font-bold ${
                      isDarkMode
                        ? "bg-[#060e20]/85 text-[#f9bd22]"
                        : "bg-tertiary-fixed text-on-tertiary-fixed"
                    }`}
                  >
                    {prod.category}
                  </span>
                )}

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  onClick={(e) => toggleWishlist(e, prod.id)}
                  className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur transition-colors ${
                    isWishlisted
                      ? isDarkMode
                        ? "bg-[#060e20]/85 text-[#ffb4ab]"
                        : "bg-surface-container-lowest/90 text-error"
                      : isDarkMode
                      ? "bg-[#060e20]/80 text-[#c2c6d6] hover:text-[#ffb4ab]"
                      : "bg-surface-container-lowest/80 text-on-surface-variant hover:text-error"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
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

              {/* Rating */}
              <div className="flex items-center gap-1 mb-1">
                <span
                  className="material-symbols-outlined text-[#F59E0B] text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className={`font-label-md text-label-md font-bold ${
                    isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                  }`}
                >
                  {prod.rating}
                </span>
                <span
                  className={`font-body-sm text-body-sm ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-secondary"
                  }`}
                >
                  ({prod.reviews})
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-headline-sm text-headline-sm font-semibold line-clamp-1 transition-colors ${
                  isDarkMode
                    ? "text-[#dae2fd] group-hover:text-[#adc6ff]"
                    : "text-on-surface group-hover:text-primary"
                }`}
              >
                {prod.title}
              </h3>
              <p
                className={`font-body-sm text-body-sm line-clamp-1 mt-0.5 mb-space-sm ${
                  isDarkMode ? "text-[#c2c6d6]" : "text-secondary"
                }`}
              >
                {prod.subtitle}
              </p>

              {/* Price & Action */}
              <div className="mt-auto pt-space-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`font-headline-sm text-headline-sm font-bold ${
                        isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                      }`}
                    >
                      {prod.price}
                    </span>
                    {prod.originalPrice && (
                      <span
                        className={`font-body-sm text-body-sm line-through ${
                          isDarkMode
                            ? "text-[#8c909f]"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {prod.originalPrice}
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-label-sm text-label-sm ${
                      prod.badgeType === "discount"
                        ? isDarkMode
                          ? "text-[#ffb4ab]"
                          : "text-[#FF0000]"
                        : isDarkMode
                        ? "text-[#c2c6d6]"
                        : "text-secondary"
                    }`}
                  >
                    {prod.subNote}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleAddToCart(e, prod.id)}
                  className={`px-3 py-2 rounded-lg font-label-md text-label-md font-semibold flex items-center gap-1 transition-all active:scale-95 ${
                    isAdded
                      ? isDarkMode
                        ? "bg-[#b88900] text-[#261a00]"
                        : "bg-tertiary-container text-on-tertiary"
                      : isDarkMode
                      ? "bg-[#4d8eff] text-[#001a42] hover:bg-[#adc6ff]"
                      : "bg-primary-container text-on-primary hover:bg-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isAdded ? "check" : "add_shopping_cart"}
                  </span>
                  <span>{isAdded ? "Added" : "Add"}</span>
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import { FEATURED_CATEGORIES } from "../../data/categoriesData";

export default function FeaturedCategories({ isDarkMode }) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-margin-mobile lg:px-margin pt-space-lg pb-space-xl">
      <div className="flex items-end justify-between mb-space-md">
        <div>
          <p
            className={`font-label-sm text-label-sm uppercase tracking-widest font-semibold ${
              isDarkMode ? "text-[#adc6ff]" : "text-primary"
            }`}
          >
            Flagship Disciplines
          </p>
          <h2
            className={`font-headline-lg text-3xl font-bold tracking-tight ${
              isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
            }`}
          >
            Featured Collections
          </h2>
        </div>
        <a
          href="#all-categories"
          className={`hidden sm:inline-flex items-center gap-1 font-label-md text-label-md transition-colors ${
            isDarkMode
              ? "text-[#c2c6d6] hover:text-[#adc6ff]"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          Updated weekly
          <span
            className={`material-symbols-outlined text-[16px] ${
              isDarkMode ? "text-[#f9bd22]" : "text-[#8df740]"
            }`}
          >
            verified
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter gap-5">
        {FEATURED_CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.id}`}
            className={`group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
              isDarkMode
                ? "bg-[#171f33] border border-[#424754]/50"
                : "bg-surface-container-lowest border border-outline-variant/20"
            }`}
          >
            <div
              className={`relative h-56 w-full overflow-hidden ${
                isDarkMode ? "bg-[#222a3d]" : "bg-surface-container-high"
              }`}
            >
              <img
                alt={cat.title}
                src={isDarkMode ? cat.darkImg : cat.lightImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkMode
                    ? "from-[#171f33] via-[#171f33]/30 to-transparent"
                    : "from-surface-container-lowest/90 via-transparent to-transparent"
                }`}
              />
              <div
                className={`absolute top-3 left-3 backdrop-blur px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold ${
                  isDarkMode
                    ? "bg-[#060e20]/85 text-[#dae2fd]"
                    : "bg-surface-container-lowest/85 text-on-surface"
                }`}
              >
                {cat.count} items
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span
                  className={`p-2 rounded-lg flex items-center justify-center ${
                    isDarkMode
                      ? "bg-[#4d8eff] text-[#001a42]"
                      : "bg-primary-container text-on-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {cat.icon}
                  </span>
                </span>
                {cat.badge && (
                  <span
                    className={`font-label-sm text-label-sm px-2 py-0.5 rounded backdrop-blur font-semibold ${
                      isDarkMode
                        ? "bg-[#060e20]/80 text-[#adc6ff]"
                        : "bg-surface-container-lowest/80 text-primary"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="p-space-md flex flex-col flex-1 justify-between">
              <div>
                <h3
                  className={`font-headline-sm text-headline-sm font-bold transition-colors ${
                    isDarkMode
                      ? "text-[#dae2fd] group-hover:text-[#adc6ff]"
                      : "text-on-surface group-hover:text-primary"
                  }`}
                >
                  {cat.title}
                </h3>
                <p
                  className={`font-body-sm text-body-sm mt-1.5 line-clamp-2 ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-secondary"
                  }`}
                >
                  {cat.description}
                </p>
              </div>
              <div
                className={`pt-space-md mt-space-md flex items-center font-label-md text-label-md font-semibold group-hover:translate-x-1 transition-transform ${
                  isDarkMode ? "text-[#adc6ff]" : "text-primary"
                }`}
              >
                <span>Explore Category</span>
                <span className="material-symbols-outlined text-[18px] ml-1">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
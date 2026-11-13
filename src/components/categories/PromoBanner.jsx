import { Link } from "react-router-dom";

const PROMO_PERKS = [
  { icon: "local_shipping", label: "Carbon-Neutral Delivery" },
  { icon: "verified_user", label: "2-Year Warranty" },
  { icon: "sync", label: "Hassle-Free Returns" },
];

export default function PromoBanner({ isDarkMode }) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-margin-mobile lg:px-margin pt-space-md pb-space-2xl">
      <div
        className={`relative overflow-hidden rounded-2xl p-space-lg md:p-space-xl shadow-xl ${
          isDarkMode
            ? "bg-[#171f33] border border-[#424754]/60"
            : "bg-inverse-surface text-inverse-on-surface"
        }`}
      >
        <div
          className={`absolute -left-16 -bottom-16 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
            isDarkMode ? "bg-[#4d8eff]/15" : "bg-primary/20"
          }`}
        />
        <div
          className={`absolute right-0 top-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
            isDarkMode ? "bg-[#adc6ff]/10" : "bg-primary-container/20"
          }`}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="max-w-2xl">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold mb-space-sm ${
                isDarkMode
                  ? "bg-[#222a3d] text-[#adc6ff]"
                  : "bg-surface-container-low/40 text-inverse-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                auto_awesome
              </span>
              Engineered Excellence Guaranteed
            </div>
            <h2
              className={`font-headline-xl text-3xl font-bold tracking-tight mb-space-xs ${
                isDarkMode ? "text-[#dae2fd]" : "text-inverse-on-surface"
              }`}
            >
              Find Something You'll Love
            </h2>
            <p
              className={`font-body-lg text-body-lg ${
                isDarkMode ? "text-[#c2c6d6]" : "text-inverse-on-surface/80"
              }`}
            >
              Join over 50,000 discerning collectors and gear enthusiasts. Fast
              global shipping, 30-day trial periods, and certified lifetime
              craftsmanship warranties across all departments.
            </p>

            <div
              className={`mt-space-md flex flex-wrap items-center gap-space-md font-label-md text-label-md ${
                isDarkMode ? "text-[#c2c6d6]" : "text-inverse-on-surface/90"
              }`}
            >
              {PROMO_PERKS.map((perk) => (
                <div key={perk.label} className="flex items-center gap-1.5">
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      isDarkMode ? "text-[#adc6ff]" : "text-primary"
                    }`}
                  >
                    {perk.icon}
                  </span>
                  <span>{perk.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto">
            <Link
              to="/products"
              className={`w-full sm:w-auto px-space-lg py-3 rounded-xl font-label-lg text-label-lg font-bold text-center shadow-lg transition-all duration-200 active:scale-95 ${
                isDarkMode
                  ? "bg-[#4d8eff] text-[#001a42] hover:bg-[#adc6ff]"
                  : "bg-primary-container text-on-primary hover:bg-primary"
              }`}
            >
              Shop All Products
            </Link>
            <Link
              to="/deals"
              className={`w-full sm:w-auto px-space-lg py-3 rounded-xl font-label-lg text-label-lg font-semibold text-center transition-all duration-200 ${
                isDarkMode
                  ? "bg-[#222a3d] text-[#dae2fd] hover:bg-[#31394d]"
                  : "bg-surface-container-highest/20 text-inverse-on-surface hover:bg-surface-container-highest/30"
              }`}
            >
              View Promotions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
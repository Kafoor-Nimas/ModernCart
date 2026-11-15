import { Link } from "react-router-dom";
import DealsHeroImg from "../../assets/DealsHero.jfif"

export default function DealsHero({ isDarkMode }) {
  return (
    <section className="relative max-w-[1600px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Hero Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div
            className={`inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider mb-space-md shadow-sm ${
              isDarkMode
                ? "bg-[#93000a] text-[#ffdad6]"
                : "bg-error-container text-on-error-container"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Special Offers • Limited Time
          </div>

          <h1
            className={`font-display-lg text-display-lg-mobile md:text-display-lg mb-space-md tracking-tight ${
              isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
            }`}
          >
            Great Deals.
            <br className="hidden sm:inline" />
            <span className="text-[#4d8eff]"> Better Prices.</span>
          </h1>

          <p
            className={`font-body-lg text-body-lg max-w-xl mb-space-xl leading-relaxed ${
              isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
            }`}
          >
            Discover exclusive discounts on selected premium essentials and enjoy
            exceptional value on every purchase. Curated daily with guaranteed
            authenticity and express dispatch.
          </p>

          <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
            <a
              href="#deals-grid"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-[#4d8eff] hover:bg-[#3b82f6] text-[#001a42] font-bold font-label-lg text-label-lg rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Deals</span>
              <span className="material-symbols-outlined text-lg">
                arrow_downward
              </span>
            </a>

            <Link
              to="/products"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm font-label-lg text-label-lg rounded-xl shadow-sm transition-all ${
                isDarkMode
                  ? "bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] border border-[#424754]/50"
                  : "bg-surface-container-lowest hover:bg-surface-container-high text-on-surface border border-slate-200"
              }`}
            >
              <span>View All Products</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Trust Badges Bar */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-2xl pt-space-lg border-t w-full max-w-lg ${
              isDarkMode ? "border-[#424754]/40" : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#4d8eff] text-xl">
                verified
              </span>
              <div>
                <p
                  className={`font-label-md text-label-md font-semibold ${
                    isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                  }`}
                >
                  100% Genuine
                </p>
                <p
                  className={`font-body-sm text-body-sm ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                  }`}
                >
                  Direct from brands
                </p>
              </div>
            </div>

            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#4d8eff] text-xl">
                local_shipping
              </span>
              <div>
                <p
                  className={`font-label-md text-label-md font-semibold ${
                    isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                  }`}
                >
                  Fast Shipping
                </p>
                <p
                  className={`font-body-sm text-body-sm ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                  }`}
                >
                  Overnight available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#4d8eff] text-xl">
                replay
              </span>
              <div>
                <p
                  className={`font-label-md text-label-md font-semibold ${
                    isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                  }`}
                >
                  30-Day Return
                </p>
                <p
                  className={`font-body-sm text-body-sm ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                  }`}
                >
                  Hassle-free guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="lg:col-span-5 relative">
          <div
            className={`relative w-full h-[600px] rounded-xl overflow-hidden shadow-xl p-space-md flex flex-col justify-between ${
              isDarkMode
                ? "bg-[#131b2e] border border-[#424754]/50"
                : "bg-surface-container-low border border-slate-200/70"
            }`}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-[#171f33] group">
              <img
                alt="Audiophile & Workspace Collective"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                src={DealsHeroImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e20]/90 via-transparent to-transparent" />

              {/* Top floating badge */}
              <div className="absolute top-space-md left-space-md">
                <span className="px-space-sm py-1 rounded-md bg-[#ffb4ab] text-[#690005] font-label-md text-label-md font-bold shadow-md tracking-wide">
                  UP TO 35% OFF
                </span>
              </div>



            </div>
              {/* Featured badge card overlay */}
              <div
                className={`absolute bottom-space-md left-space-md right-space-md backdrop-blur-md p-space-md rounded-lg shadow-lg ${
                  isDarkMode
                    ? "bg-[#060e20]/90 border border-[#424754]/50"
                    : "bg-white/95"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#4d8eff] font-semibold">
                    Editor's Choice
                  </span>
                  <div className="flex items-center gap-1">
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
                      4.9
                    </span>
                  </div>
                </div>

                  <div className="flex items-center justify-between pt-space-xs">
                      <div>
                         <h3
                  className={`font-headline-sm text-headline-sm truncate ${
                    isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                  }`}
                >
                  Audiophile &amp; Workspace Collective
                </h3>
                <p
                  className={`font-body-sm text-body-sm mb-space-xs ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                  }`}
                >
                  Featuring Studio One ANC &amp; Tactile 75 Bundles
                </p>
                      </div>
               

              
                  <div className="flex flex-col items-baseline gap-space-xs">
                    <span className="font-body-sm  text-sm text-right line-through text-[#8c909f]">
                      $539.00
                    </span>
                    <span
                      className={`font-headline-md text-headline-md font-bold ${
                        isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                      }`}
                    >
                      $379.00
                    </span>
                  </div>
                 
                </div>
              </div>
          </div>

          {/* Decorative Floating Card */}
          <div
            className={`hidden sm:flex absolute -bottom-6 -left-8 p-space-md rounded-xl shadow-xl items-center gap-space-sm ${
              isDarkMode
                ? "bg-[#131b2e] border border-[#424754]/50"
                : "bg-surface-container-lowest border border-slate-200/70"
            }`}
          >
            <div className="w-12 h-12 rounded-lg bg-[#f9bd22]/20 flex items-center justify-center text-[#f9bd22]">
              <span className="material-symbols-outlined text-2xl">bolt</span>
            </div>
            <div>
              <p
                className={`font-label-sm text-label-sm uppercase tracking-wider ${
                  isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                }`}
              >
                Live Inventory
              </p>
              <p
                className={`font-label-lg text-label-lg font-bold ${
                  isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                }`}
              >
                148 Claimed Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
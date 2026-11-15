import { useRef } from "react";
import { BIGGEST_SAVINGS } from "../../data/dealsData";
import { useApp } from "../../context/AppContext";

export default function BiggestSavingsCarousel({ isDarkMode }) {
  const carouselRef = useRef(null);
  const appContext = useApp();
  const addToCart = appContext?.addToCart;

  const scrollByAmount = (offset) => {
    carouselRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="max-w-[1600px] mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg">
        <div>
          <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-[#ffb4ab] uppercase font-bold tracking-wider mb-1">
            <span className="material-symbols-outlined text-base">
              local_fire_department
            </span>
            Maximum Clearance
          </div>
          <h2
            className={`font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tight ${
              isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
            }`}
          >
            Biggest Savings
          </h2>
          <p
            className={`font-body-md text-body-md mt-1 ${
              isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
            }`}
          >
            Explore products with the highest percentage discounts this season.
          </p>
        </div>

        <div className="flex items-center gap-space-xs mt-space-md sm:mt-0">
          <button
            type="button"
            aria-label="Previous Deal"
            onClick={() => scrollByAmount(-360)}
            className={`p-2 rounded-lg shadow-sm transition-colors ${
              isDarkMode
                ? "bg-[#131b2e] text-[#dae2fd] hover:bg-[#171f33] border border-[#424754]/50"
                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-slate-200"
            }`}
          >
            <span className="material-symbols-outlined text-xl block">
              chevron_left
            </span>
          </button>
          <button
            type="button"
            aria-label="Next Deal"
            onClick={() => scrollByAmount(360)}
            className={`p-2 rounded-lg shadow-sm transition-colors ${
              isDarkMode
                ? "bg-[#131b2e] text-[#dae2fd] hover:bg-[#171f33] border border-[#424754]/50"
                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-slate-200"
            }`}
          >
            <span className="material-symbols-outlined text-xl block">
              chevron_right
            </span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={carouselRef}
        className="flex gap-space-lg overflow-x-auto pb-space-xs scrollbar-none snap-x snap-mandatory"
      >
        {BIGGEST_SAVINGS.map((deal) => (
          <div
            key={deal.id}
            className={`min-w-[290px] sm:min-w-[350px] lg:min-w-[380px] snap-start p-space-md rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between ${
              isDarkMode
                ? "bg-[#131b2e] border border-[#424754]/50"
                : "bg-surface-container-lowest border border-slate-200/70"
            }`}
          >
            <div>
              <div
                className={`relative w-full aspect-video rounded-lg overflow-hidden mb-space-md ${
                  isDarkMode ? "bg-[#171f33]" : "bg-surface-container-low"
                }`}
              >
                <img
                  alt={deal.name}
                  src={deal.image}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-space-xs left-space-xs px-2 py-0.5 rounded bg-[#ffb4ab] text-[#690005] font-label-md text-label-md font-bold shadow-sm">
                  -{deal.discountPercent}% OFF
                </span>
              </div>

              <div className="flex items-center justify-between mb-1">
                <span className="font-label-sm text-label-sm text-[#8c909f] uppercase tracking-wider">
                  {deal.brand}
                </span>
                <span className="font-label-sm text-label-sm text-[#ffb4ab] font-bold">
                  Ends in {deal.endsIn}
                </span>
              </div>

              <h3
                className={`font-headline-sm text-headline-sm font-semibold mb-space-xs ${
                  isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                }`}
              >
                {deal.name}
              </h3>

              <div className="flex items-baseline gap-space-xs mb-space-md">
                <span
                  className={`font-headline-md text-headline-md font-bold ${
                    isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                  }`}
                >
                  ${deal.price.toFixed(2)}
                </span>
                <span className="font-body-sm text-body-sm line-through text-[#8c909f]">
                  ${deal.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div>
              {/* Stock Progress */}
              <div className="w-full mb-space-md">
                <div
                  className={`flex justify-between items-center text-label-sm font-label-sm mb-1 ${
                    isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                  }`}
                >
                  <span>Stock Claimed ({deal.stockLabel})</span>
                  <span
                    className={`font-bold ${
                      isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                    }`}
                  >
                    {deal.claimedPercent}% claimed
                  </span>
                </div>
                <div
                  className={`w-full h-2 rounded-full overflow-hidden ${
                    isDarkMode ? "bg-[#171f33]" : "bg-surface-container"
                  }`}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      deal.urgent ? "bg-[#ffb4ab]" : "bg-[#4d8eff]"
                    }`}
                    style={{ width: `${deal.claimedPercent}%` }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart?.(deal)}
                className={`w-full py-2.5 px-space-md font-label-md text-label-md font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-space-xs ${
                  isDarkMode
                    ? "bg-[#dae2fd] text-[#0b1326] hover:bg-white"
                    : "bg-on-surface text-surface hover:opacity-90"
                }`}
              >
                <span className="material-symbols-outlined text-base">bolt</span>
                <span>Claim Deal Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
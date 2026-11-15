import { Link } from "react-router-dom";

export default function CartPromoBar({
  isDarkMode,
  promoInput,
  setPromoInput,
  appliedPromo,
  discountAmount,
  promoError,
  onApplyPromo,
  onRemovePromo,
}) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pt-4">
      <Link
        to="/products"
        className={`inline-flex items-center gap-2 font-semibold text-sm hover:underline group ${
          isDarkMode ? "text-[#60A5FA] hover:text-[#93C5FD]" : "text-[#004ac6]"
        }`}
      >
        <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
        <span>Continue Shopping</span>
      </Link>

      <div className="flex flex-col items-stretch sm:items-end gap-1.5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <form onSubmit={onApplyPromo} className="relative flex items-center">
            <span
              className={`material-symbols-outlined absolute left-3.5 text-[18px] pointer-events-none ${
                isDarkMode ? "text-[#94A3B8]" : "text-[#737686]"
              }`}
            >
              sell
            </span>
            <input
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              placeholder="Promo or gift code"
              type="text"
              className={`pl-10 pr-24 py-2.5 rounded-xl text-xs uppercase tracking-wider focus:outline-none shadow-sm w-full sm:w-64 transition-colors ${
                isDarkMode
                  ? "bg-[#1E293B] border border-[#334155] text-[#F8FAFC] focus:border-[#3B82F6]"
                  : "bg-white text-[#0b1c30] focus:ring-1 focus:ring-[#004ac6]"
              }`}
            />
            <button
              type="submit"
              className={`absolute right-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                isDarkMode
                  ? "bg-[#111827] border border-[#334155] hover:bg-[#1E293B] text-[#CBD5E1]"
                  : "bg-[#dce9ff] hover:bg-[#e5eeff] text-[#0b1c30]"
              }`}
            >
              Apply
            </button>
          </form>

          {appliedPromo && discountAmount > 0 && (
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium self-start sm:self-auto ${
                isDarkMode
                  ? "bg-[#111827] border border-[#22C55E]/40 text-[#22C55E] shadow-sm"
                  : "bg-[#c7ffca]/40 text-[#006329]"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                check_circle
              </span>
              <span className="font-bold">
                {appliedPromo.code}: -${discountAmount.toFixed(2)}
              </span>
              <button
                aria-label="Remove promo code"
                onClick={onRemovePromo}
                type="button"
                className={`ml-1 transition-colors ${
                  isDarkMode ? "hover:text-[#EF4444]" : "hover:text-[#ba1a1a]"
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  close
                </span>
              </button>
            </div>
          )}
        </div>

        {promoError && (
          <span
            className={`text-xs ${
              isDarkMode ? "text-[#EF4444]" : "text-[#ba1a1a]"
            }`}
          >
            {promoError}
          </span>
        )}
      </div>
    </div>
  );
}
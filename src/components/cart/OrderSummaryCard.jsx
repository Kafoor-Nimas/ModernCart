export default function OrderSummaryCard({
  isDarkMode,
  totalCount,
  subtotal,
  appliedPromo,
  discountAmount,
  estimatedTax,
  total,
  isEmpty,
  onCheckout,
}) {
  return (
    <div className="lg:col-span-4 sticky top-28 flex flex-col gap-6">
      <div
        className={`rounded-xl p-6 flex flex-col gap-6 ${
          isDarkMode
            ? "bg-[#1E293B] border border-[#334155] shadow-xl"
            : "bg-white shadow-md"
        }`}
      >
        <div
          className={`flex items-center justify-between pb-4 ${
            isDarkMode ? "border-b border-[#334155]" : ""
          }`}
        >
          <h2
            className={`text-xl font-semibold ${
              isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
            }`}
          >
            Order Summary
          </h2>
          <span
            className={`text-xs font-semibold ${
              isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
            }`}
          >
            {totalCount} {totalCount === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* Breakdown Ledger */}
        <div className="flex flex-col gap-3.5 text-sm">
          <div
            className={`flex items-center justify-between ${
              isDarkMode ? "text-[#CBD5E1]" : "text-[#565e74]"
            }`}
          >
            <span>Items Subtotal</span>
            <span
              className={`font-medium ${
                isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
              }`}
            >
              ${subtotal.toFixed(2)}
            </span>
          </div>

          {appliedPromo && discountAmount > 0 && (
            <div
              className={`flex items-center justify-between font-medium ${
                isDarkMode ? "text-[#22C55E]" : "text-[#006329]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span>Promotional Discount</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded font-semibold ${
                    isDarkMode
                      ? "bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E]"
                      : "bg-[#c7ffca]/50 text-[#006329]"
                  }`}
                >
                  {Math.round(appliedPromo.discountRate * 100)}%
                </span>
              </span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}

          <div
            className={`flex items-center justify-between ${
              isDarkMode ? "text-[#CBD5E1]" : "text-[#565e74]"
            }`}
          >
            <span className="flex items-center gap-1">
              <span>Estimated Shipping</span>
              <span
                className={`material-symbols-outlined text-[16px] cursor-help ${
                  isDarkMode ? "text-[#94A3B8]" : "text-[#737686]"
                }`}
                title="Free standard delivery applied"
              >
                info
              </span>
            </span>
            <span
              className={`font-medium ${
                isDarkMode ? "text-[#22C55E]" : "text-[#006329]"
              }`}
            >
              FREE ($0.00)
            </span>
          </div>

          <div
            className={`flex items-center justify-between ${
              isDarkMode ? "text-[#CBD5E1]" : "text-[#565e74]"
            }`}
          >
            <span>Estimated Sales Tax</span>
            <span
              className={`font-medium ${
                isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
              }`}
            >
              ${estimatedTax.toFixed(2)}
            </span>
          </div>

          <div
            className={`h-px my-1 ${
              isDarkMode ? "bg-[#334155]" : "bg-[#e5eeff]"
            }`}
          />

          <div className="flex items-baseline justify-between pt-1">
            <div>
              <span
                className={`text-lg font-bold block ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                }`}
              >
                Total
              </span>
              <span
                className={`text-xs ${
                  isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                }`}
              >
                Including ${estimatedTax.toFixed(2)} in taxes
              </span>
            </div>
            <span
              className={`text-2xl font-bold tabular-nums ${
                isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
              }`}
            >
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Checkout CTA */}
        <div className="flex flex-col gap-3">
          <button
            disabled={isEmpty}
            onClick={onCheckout}
            type="button"
            className={`w-full h-12 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] disabled:opacity-50 ${
              isDarkMode
                ? "bg-[#3B82F6] hover:bg-[#60A5FA] shadow-lg shadow-[#3B82F6]/25"
                : "bg-[#2563eb] hover:bg-[#004ac6] shadow-sm"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">lock</span>
            <span>Proceed to Checkout</span>
          </button>
          <p
            className={`text-center text-sm ${
              isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
            }`}
          >
            Safe &amp; encrypted 256-bit checkout
          </p>
        </div>

        {/* Trust Badges & Payment Methods */}
        <div
          className={`pt-4 flex flex-col gap-3 ${
            isDarkMode ? "border-t border-[#334155]" : ""
          }`}
        >
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`flex items-center gap-2 p-2.5 rounded-lg ${
                isDarkMode
                  ? "bg-[#111827] border border-[#334155]"
                  : "bg-[#eff4ff]"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  isDarkMode ? "text-[#60A5FA]" : "text-[#004ac6]"
                }`}
              >
                verified_user
              </span>
              <div className="flex flex-col">
                <span
                  className={`text-xs font-semibold ${
                    isDarkMode ? "text-[#CBD5E1]" : "text-[#0b1c30]"
                  }`}
                >
                  256-Bit SSL
                </span>
                <span
                  className={`text-[11px] ${
                    isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                  }`}
                >
                  Strict Encryption
                </span>
              </div>
            </div>

            <div
              className={`flex items-center gap-2 p-2.5 rounded-lg ${
                isDarkMode
                  ? "bg-[#111827] border border-[#334155]"
                  : "bg-[#eff4ff]"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  isDarkMode ? "text-[#60A5FA]" : "text-[#004ac6]"
                }`}
              >
                published_with_changes
              </span>
              <div className="flex flex-col">
                <span
                  className={`text-xs font-semibold ${
                    isDarkMode ? "text-[#CBD5E1]" : "text-[#0b1c30]"
                  }`}
                >
                  30-Day Returns
                </span>
                <span
                  className={`text-[11px] ${
                    isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                  }`}
                >
                  Money Back Guarantee
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-2 pt-2">
            {["Visa", "Mastercard", "Apple Pay", "Amex"].map((method) => (
              <span
                key={method}
                className={`px-2.5 py-1 rounded text-xs font-medium ${
                  isDarkMode
                    ? "bg-[#111827] border border-[#334155] text-[#94A3B8]"
                    : "bg-[#eff4ff] text-[#565e74]"
                }`}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function FreeShippingBanner({
  isDarkMode,
  amountRemaining,
  shippingPercent,
}) {
  return (
    <div
      className={`w-full rounded-xl p-5 mb-10 relative overflow-hidden ${
        isDarkMode
          ? "bg-[#111827] border border-[#334155] shadow-lg shadow-black/20"
          : "bg-[#eff4ff] shadow-sm"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              isDarkMode
                ? "bg-[#3B82F6]/20 text-[#60A5FA]"
                : "bg-[#004ac6]/10 text-[#004ac6]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              local_shipping
            </span>
          </div>

          {amountRemaining > 0 ? (
            <p
              className={`text-base sm:text-lg font-semibold ${
                isDarkMode ? "text-[#CBD5E1]" : "text-[#0b1c30]"
              }`}
            >
              You are{" "}
              <span
                className={`font-bold ${
                  isDarkMode ? "text-[#60A5FA]" : "text-[#004ac6]"
                }`}
              >
                ${amountRemaining.toFixed(2)}
              </span>{" "}
              away from{" "}
              <span
                className={`font-bold ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                }`}
              >
                Free Express Delivery!
              </span>
            </p>
          ) : (
            <p
              className={`text-base sm:text-lg font-semibold ${
                isDarkMode ? "text-[#22C55E]" : "text-[#006329]"
              }`}
            >
              Congratulations! You&apos;ve unlocked{" "}
              <span className="font-bold">Free Express Delivery!</span>
            </p>
          )}
        </div>

        <span
          className={`text-xs font-semibold self-start sm:self-auto uppercase tracking-wider ${
            isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
          }`}
        >
          {shippingPercent}% Unlocked
        </span>
      </div>

      <div
        className={`w-full h-2.5 rounded-full overflow-hidden ${
          isDarkMode
            ? "bg-[#1E293B] border border-[#334155]/60"
            : "bg-[#d3e4fe]"
        }`}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isDarkMode ? "bg-[#3B82F6]" : "bg-[#004ac6]"
          }`}
          style={{ width: `${shippingPercent}%` }}
        />
      </div>
    </div>
  );
}
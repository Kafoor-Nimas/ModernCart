export default function CartItemRow({
  item,
  isDarkMode,
  onUpdateQuantity,
  onSaveForLater,
  onRemove,
}) {
  const qty = item.quantity || 1;
  const rowTotal = item.price * qty;

  return (
    <div
      className={`rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 relative group transition-all duration-200 ${
        isDarkMode
          ? "bg-[#1E293B] border border-[#334155] shadow-md hover:border-[#475569]"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Product Image */}
      <div
        className={`w-full sm:w-36 h-36 rounded-lg overflow-hidden shrink-0 relative flex items-center justify-center ${
          isDarkMode
            ? "bg-[#111827] border border-[#334155]"
            : "bg-[#eff4ff]"
        }`}
      >
        <img
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={item.image}
        />
        {item.badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[11px] ${
              item.badgeType === "discount"
                ? isDarkMode
                  ? "bg-[#EF4444]/20 border border-[#EF4444]/40 text-[#EF4444] font-bold"
                  : "bg-[#ffdad6] text-[#ba1a1a] font-bold"
                : isDarkMode
                ? "bg-[#111827]/90 backdrop-blur-sm border border-[#334155] text-[#CBD5E1] font-medium"
                : "bg-white/90 backdrop-blur-sm text-[#0b1c30] font-medium"
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                }`}
              >
                {item.brand}
              </span>
              <h3
                className={`text-lg font-semibold mt-0.5 ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                }`}
              >
                {item.name}
              </h3>

              <div className="flex flex-wrap items-center gap-3 mt-1.5">
                {item.colorName && (
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3 h-3 rounded-full ring-2 inline-block ${
                        isDarkMode ? "ring-[#334155]" : "ring-white"
                      }`}
                      style={{ backgroundColor: item.colorHex || "#18181b" }}
                    />
                    <span
                      className={`text-xs ${
                        isDarkMode ? "text-[#CBD5E1]" : "text-[#565e74]"
                      }`}
                    >
                      {item.colorName}
                    </span>
                  </div>
                )}
                {item.colorName && (
                  <span
                    className={
                      isDarkMode ? "text-[#334155]" : "text-[#c3c6d7]"
                    }
                  >
                    •
                  </span>
                )}
                <span
                  className={`text-xs font-medium flex items-center gap-1 ${
                    isDarkMode ? "text-[#22C55E]" : "text-[#006329]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isDarkMode ? "bg-[#22C55E]" : "bg-[#006329]"
                    }`}
                  />
                  In Stock
                </span>
              </div>
            </div>

            {/* Subtotal Right */}
            <div className="text-right shrink-0">
              {item.originalPrice ? (
                <>
                  <div className="flex items-center justify-end gap-2">
                    <span
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                      }`}
                    >
                      ${rowTotal.toFixed(2)}
                    </span>
                    <span
                      className={`text-xs line-through ${
                        isDarkMode ? "text-[#64748B]" : "text-[#737686]"
                      }`}
                    >
                      ${(item.originalPrice * qty).toFixed(2)}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      isDarkMode ? "text-[#22C55E]" : "text-[#565e74]"
                    }`}
                  >
                    Save ${((item.originalPrice - item.price) * qty).toFixed(2)}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={`text-lg font-semibold block ${
                      isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
                    }`}
                  >
                    ${rowTotal.toFixed(2)}
                  </span>
                  <span
                    className={`text-xs ${
                      isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                    }`}
                  >
                    ${item.price.toFixed(2)} / unit
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Quantity & Row Actions */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 ${
            isDarkMode ? "border-t border-[#334155]" : "bg-white"
          }`}
        >
          {/* Stepper */}
          <div
            className={`flex items-center rounded-xl px-1.5 py-1 ${
              isDarkMode
                ? "bg-[#111827] border border-[#334155]"
                : "bg-[#eff4ff]"
            }`}
          >
            <button
              aria-label="Decrease quantity"
              disabled={qty <= 1}
              onClick={() => onUpdateQuantity(item.id, -1)}
              type="button"
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-35 ${
                isDarkMode
                  ? "text-[#CBD5E1] hover:bg-[#1E293B] hover:text-[#F8FAFC] disabled:hover:bg-transparent"
                  : "text-[#0b1c30] hover:bg-[#e5eeff] disabled:hover:bg-transparent"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                remove
              </span>
            </button>
            <span
              className={`w-10 text-center font-semibold text-sm tabular-nums ${
                isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
              }`}
            >
              {qty}
            </span>
            <button
              aria-label="Increase quantity"
              onClick={() => onUpdateQuantity(item.id, 1)}
              type="button"
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                isDarkMode
                  ? "text-[#CBD5E1] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                  : "text-[#0b1c30] hover:bg-[#e5eeff]"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>

          {/* Secondary Item Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSaveForLater(item)}
              type="button"
              className={`flex items-center gap-1.5 transition-colors text-xs font-semibold ${
                isDarkMode
                  ? "text-[#94A3B8] hover:text-[#CBD5E1]"
                  : "text-[#565e74] hover:text-[#004ac6]"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                bookmark_border
              </span>
              <span>Save for later</span>
            </button>
            <span
              className={isDarkMode ? "text-[#334155]" : "text-[#d3e4fe]"}
            >
              |
            </span>
            <button
              aria-label="Remove item"
              onClick={() => onRemove(item.id)}
              type="button"
              className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode
                  ? "text-[#94A3B8] hover:text-[#EF4444] hover:bg-[#EF4444]/10"
                  : "text-[#565e74] hover:text-[#ba1a1a] hover:bg-[#ffdad6]/40"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                delete_outline
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
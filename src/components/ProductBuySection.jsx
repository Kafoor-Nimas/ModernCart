import { useApp } from "../context/AppContext";

export default function ProductBuySection({
  selectedColor,
  setSelectedColor,
  qty,
  setQty,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBuyNow,
}) {
  const { isDarkMode } = useApp();

  const colors = [
    { name: "Midnight Black", bg: "#18181B" },
    { name: "Silver Aluminum", bg: "#E2E8F0" },
    { name: "Sand Dune Beige", bg: "#D6C7B2" },
  ];

  return (
    <div className="lg:col-span-5 flex flex-col gap-space-md">
      {/* Title & SKU */}
      <div>
        <div className="flex items-center justify-between mb-space-xs">
          <span
            className={`font-label-sm text-label-sm tracking-widest uppercase font-bold ${
              isDarkMode ? "" : "text-primary"
            }`}
            style={{ color: isDarkMode ? "#94A3B8" : undefined }}
          >
            AURASOUND AUDIO
          </span>
          <span
            className="font-label-sm text-label-sm"
            style={{ color: isDarkMode ? "#64748B" : undefined }}
          >
            SKU: AS-ST1-BLK
          </span>
        </div>
        <h1
          className={`font-headline-lg text-headline-lg font-bold tracking-tight leading-tight ${
            isDarkMode ? "" : "text-on-surface"
          }`}
          style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
        >
          Studio One ANC Wireless Headphones
        </h1>
      </div>

      {/* Rating & Recommends */}
      <div className="flex items-center flex-wrap gap-x-space-md gap-y-space-xs pb-space-xs">
        <div className="flex items-center gap-1">
          <div
            className="flex items-center"
            style={{ color: isDarkMode ? "#FBBF24" : "#F59E0B" }}
          >
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <span
            className={`font-label-md text-label-md font-bold ${
              isDarkMode ? "" : "text-on-surface"
            }`}
            style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
          >
            4.8
          </span>
          <a
            className="font-body-sm text-body-sm transition-colors underline"
            href="#reviews-section"
            style={{
              color: isDarkMode ? "#94A3B8" : undefined,
              textDecorationColor: isDarkMode ? "#475569" : undefined,
            }}
          >
            (342 reviews)
          </a>
        </div>
        <span
          className="h-3 w-px"
          style={{ backgroundColor: isDarkMode ? "#334155" : undefined }}
        ></span>
        <div
          className="flex items-center gap-1"
          style={{ color: isDarkMode ? "#22C55E" : undefined }}
        >
          <span className="material-symbols-outlined text-[16px]">thumb_up</span>
          <span className="font-label-sm text-label-sm font-semibold">
            98% recommended
          </span>
        </div>
      </div>

      {/* Pricing Card */}
      <div
        className={`p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs ${
          isDarkMode ? "border" : "bg-surface-container-lowest"
        }`}
        style={{
          backgroundColor: isDarkMode ? "#1E293B" : undefined,
          borderColor: isDarkMode ? "#334155" : undefined,
        }}
      >
        <div className="flex items-baseline gap-space-sm">
          <span
            className="font-display-lg text-[32px] leading-none font-bold tabular-nums"
            style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
          >
            $249.00
          </span>
          <span
            className="font-headline-sm text-headline-sm line-through tabular-nums"
            style={{ color: isDarkMode ? "#64748B" : undefined }}
          >
            $299.00
          </span>
          <span
            className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold tracking-tight ${
              isDarkMode ? "" : "bg-error-container text-on-error-container"
            }`}
            style={{
              backgroundColor: isDarkMode ? "rgba(244, 63, 94, 0.2)" : undefined,
              color: isDarkMode ? "#F43F5E" : undefined,
            }}
          >
            Save $50 (17% OFF)
          </span>
        </div>
        <p
          className="font-body-sm text-body-sm"
          style={{ color: isDarkMode ? "#94A3B8" : undefined }}
        >
          Price includes all domestic duties &amp; standard courier transit.
        </p>
      </div>

      {/* Stock Alert */}
      <div
        className={`flex items-center gap-space-xs px-space-sm py-2 rounded-lg ${
          isDarkMode ? "border" : "bg-surface-container-low"
        }`}
        style={{
          backgroundColor: isDarkMode ? "#111827" : undefined,
          borderColor: isDarkMode ? "#334155" : undefined,
        }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: isDarkMode ? "#22C55E" : undefined }}
          ></span>
          <span
            className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ backgroundColor: isDarkMode ? "#22C55E" : undefined }}
          ></span>
        </span>
        <span
          className="font-label-sm text-label-sm"
          style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
        >
          <strong
            className="font-bold"
            style={{ color: isDarkMode ? "#22C55E" : undefined }}
          >
            In Stock
          </strong>{" "}
          — Ships today from Chicago distribution hub (Order within 3 hrs)
        </span>
      </div>

      {/* Color Selection */}
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <span
            className="font-label-md text-label-md"
            style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
          >
            Colorway:
          </span>
          <span
            className="font-label-sm text-label-sm font-bold"
            style={{ color: isDarkMode ? "#60A5FA" : undefined }}
          >
            {selectedColor}
          </span>
        </div>
        <div className="flex items-center gap-space-sm" id="swatch-container">
          {colors.map((c) => {
            const isSelected = selectedColor === c.name;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c.name)}
                className={`color-chip group relative flex items-center gap-2 px-3 py-2 rounded-xl shadow-sm hover:shadow transition-all ${
                  isSelected
                    ? isDarkMode
                      ? "border-2"
                      : "ring-2 ring-primary"
                    : isDarkMode
                    ? "border"
                    : "ring-0"
                }`}
                style={{
                  backgroundColor: isDarkMode
                    ? isSelected
                      ? "#1E293B"
                      : "#111827"
                    : "#ffffff",
                  borderColor: isDarkMode
                    ? isSelected
                      ? "#3B82F6"
                      : "#334155"
                    : undefined,
                  color: isDarkMode ? (isSelected ? "#F8FAFC" : "#CBD5E1") : undefined,
                }}
              >
                <span
                  className="w-4 h-4 rounded-full shadow-inner"
                  style={{ backgroundColor: c.bg }}
                ></span>
                <span className="font-label-sm text-label-sm">{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-space-sm">
        <span
          className="font-label-md text-label-md shrink-0"
          style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
        >
          Quantity:
        </span>
        <div
          className={`flex items-center rounded-xl shadow-sm p-1 ${
            isDarkMode ? "border" : "bg-surface-container-lowest"
          }`}
          style={{
            backgroundColor: isDarkMode ? "#1E293B" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
          }}
        >
          <button
            type="button"
            disabled={qty <= 1}
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-8 h-8 rounded-lg flex items-center justify-center disabled:opacity-30 transition-colors"
            style={{ color: isDarkMode ? "#94A3B8" : undefined }}
          >
            <span className="material-symbols-outlined text-[18px]">remove</span>
          </button>
          <span
            className="w-10 text-center font-label-md text-label-md font-bold tabular-nums"
            style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
          >
            {qty}
          </span>
          <button
            type="button"
            disabled={qty >= 5}
            onClick={() => setQty(Math.min(5, qty + 1))}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: isDarkMode ? "#94A3B8" : undefined }}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
        </div>
        <span
          className="font-body-sm text-[12px]"
          style={{ color: isDarkMode ? "#64748B" : undefined }}
        >
          Max 5 units per verified account
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-space-xs pt-space-xs">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-xs">
          <button
            type="button"
            onClick={onAddToCart}
            className={`sm:col-span-8 flex items-center justify-center gap-space-xs py-3.5 px-space-lg rounded-xl font-label-lg text-label-lg font-bold shadow-md hover:brightness-105 active:scale-[0.99] transition-all ${
              isDarkMode ? "" : "bg-primary-container text-on-primary"
            }`}
            style={{
              backgroundColor: isDarkMode ? "#3B82F6" : undefined,
              color: isDarkMode ? "#FFFFFF" : undefined,
            }}
          >
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
            <span>Add to Cart • ${(249 * qty).toFixed(2)}</span>
          </button>

          <button
            type="button"
            onClick={onBuyNow}
            className={`sm:col-span-4 flex items-center justify-center py-3.5 px-space-md rounded-xl font-label-lg text-label-lg font-semibold shadow-md active:scale-[0.99] transition-all ${
              isDarkMode ? "border" : "bg-on-surface text-surface hover:bg-on-surface-variant"
            }`}
            style={{
              backgroundColor: isDarkMode ? "#1E293B" : undefined,
              borderColor: isDarkMode ? "#475569" : undefined,
              color: isDarkMode ? "#F8FAFC" : undefined,
            }}
          >
            <span>Instant Buy</span>
          </button>
        </div>

        <button
          type="button"
          onClick={onToggleWishlist}
          className={`flex items-center justify-center gap-space-xs py-2.5 px-space-md rounded-xl font-label-md text-label-md shadow-sm transition-all ${
            isDarkMode ? "border" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
          }`}
          style={{
            backgroundColor: isDarkMode ? "#111827" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
            color: isDarkMode ? "#CBD5E1" : undefined,
          }}
        >
          <span
            className={`material-symbols-outlined text-[18px] ${
              isWishlisted ? "text-error" : ""
            }`}
            style={{
              color: isDarkMode && !isWishlisted ? "#94A3B8" : undefined,
              fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            favorite
          </span>
          <span>{isWishlisted ? "Saved in Wishlist" : "Save to Wishlist"}</span>
        </button>
      </div>

      {/* Specifications Summary */}
      <div
        className={`p-space-md rounded-xl flex flex-col gap-space-xs mt-space-xs ${
          isDarkMode ? "border" : "bg-surface-container-low/70"
        }`}
        style={{
          backgroundColor: isDarkMode ? "#1E293B" : undefined,
          borderColor: isDarkMode ? "#334155" : undefined,
        }}
      >
        <h4
          className={`font-label-sm text-label-sm font-bold tracking-wider uppercase ${
            isDarkMode ? "" : "text-on-surface"
          }`}
          style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
        >
          Engineered Specifications
        </h4>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-1 font-body-sm text-body-sm"
          style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
        >
          <li className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] shrink-0"
              style={{ color: isDarkMode ? "#3B82F6" : undefined }}
            >
              graphic_eq
            </span>
            <span>Custom 40mm Beryllium Drivers</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] shrink-0"
              style={{ color: isDarkMode ? "#3B82F6" : undefined }}
            >
              battery_charging_full
            </span>
            <span>45-Hour Playback + Fast Fuel</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] shrink-0"
              style={{ color: isDarkMode ? "#3B82F6" : undefined }}
            >
              hearing
            </span>
            <span>Hybrid Active Noise Cancelling</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] shrink-0"
              style={{ color: isDarkMode ? "#3B82F6" : undefined }}
            >
              hub
            </span>
            <span>Multipoint Bluetooth 5.3 + LDAC</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { FREE_SHIPPING_THRESHOLD, INITIAL_CART_ITEMS, } from "../data/cardData";


import FreeShippingBanner from "../components/cart/FreeShippingBanner";
import CartItemRow from "../components/cart/CartItemRow";
import CartPromoBar from "../components/cart/CartPromoBar";
import OrderSummaryCard from "../components/cart/OrderSummaryCard";
import RecommendedAddons from "../components/cart/RecommendedAddons";

export default function CartPage() {
  const {
    isDarkMode,
    cartItems: contextCartItems,
    setCartItems: setContextCartItems,
    toggleWishlist,
    showToast,
  } = useApp();

  const [localCartItems, setLocalCartItems] = useState(INITIAL_CART_ITEMS);
  const items = contextCartItems ?? localCartItems;
  const setItems = setContextCartItems ?? setLocalCartItems;

  const [promoInput, setPromoInput] = useState("WELCOME10");
  const [appliedPromo, setAppliedPromo] = useState({
    code: "WELCOME10",
    discountRate: 0.1,
  });
  const [promoError, setPromoError] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notify = (msg) => {
    if (showToast) {
      showToast(msg);
      return;
    }
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? "" : prev));
    }, 2800);
  };

  const handleUpdateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    notify("Item removed from cart");
  };

  const handleSaveForLater = (item) => {
    toggleWishlist?.(item);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    notify(`Saved "${item.name}" for later`);
  };

  const handleAddAddon = (addon) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === addon.id);
      if (existing) {
        return prev.map((i) =>
          i.id === addon.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [
        ...prev,
        {
          ...addon,
          inStock: true,
          badgeType: "neutral",
          originalPrice: null,
          quantity: 1,
        },
      ];
    });
    notify(`Added "${addon.name}" to cart`);
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const normalized = promoInput.trim().toUpperCase();
    if (!normalized) return;

    const validCodes = {
      WELCOME10: 0.1,
      SAVE15: 0.15,
      MODERN20: 0.2,
    };

    if (validCodes[normalized]) {
      setAppliedPromo({
        code: normalized,
        discountRate: validCodes[normalized],
      });
      setPromoError("");
      notify(`Promo code ${normalized} applied`);
    } else {
      setPromoError("Invalid code. Try WELCOME10 or SAVE15.");
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoInput("");
    setPromoError("");
  };

  const {
    totalCount,
    subtotal,
    discountAmount,
    estimatedTax,
    total,
    amountRemaining,
    shippingPercent,
  } = useMemo(() => {
    const count = items.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const sub = items.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    const discount = appliedPromo ? sub * appliedPromo.discountRate : 0;
    const tax = sub > 0 ? (sub - discount) * 0.0645 : 0;
    const finalTotal = Math.max(0, sub - discount + tax);

    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - sub);
    const pct =
      sub === 0
        ? 0
        : remaining === 0
        ? 100
        : Math.min(99, Math.round((sub / FREE_SHIPPING_THRESHOLD) * 100));

    return {
      totalCount: count,
      subtotal: sub,
      discountAmount: discount,
      estimatedTax: tax,
      total: finalTotal,
      amountRemaining: remaining,
      shippingPercent: pct,
    };
  }, [items, appliedPromo]);

  return (
    <div
      className={`flex flex-col w-full min-h-screen transition-colors pt-20 relative ${
        isDarkMode
          ? "bg-[#0F172A] text-[#F8FAFC]"
          : "bg-[#f8f9ff] text-[#0b1c30]"
      }`}
    >
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Header */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-baseline gap-3">
            <h1
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                isDarkMode ? "text-[#F8FAFC]" : "text-[#0b1c30]"
              }`}
            >
              Shopping Cart
            </h1>
            <span
              className={`text-sm font-semibold px-3 py-0.5 rounded-full ${
                isDarkMode
                  ? "bg-[#1E293B] border border-[#334155] text-[#94A3B8]"
                  : "bg-[#e5eeff] text-[#434655]"
              }`}
            >
              ({totalCount} {totalCount === 1 ? "item" : "items"})
            </span>
          </div>
          <p
            className={`text-sm md:text-base ${
              isDarkMode ? "text-[#CBD5E1]" : "text-[#565e74]"
            }`}
          >
            Review your curated items and proceed to secure checkout.
          </p>
        </div>

        <FreeShippingBanner
          isDarkMode={isDarkMode}
          amountRemaining={amountRemaining}
          shippingPercent={shippingPercent}
        />

        {/* Main 12-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {items.length === 0 ? (
              <div
                className={`rounded-xl p-10 text-center flex flex-col items-center gap-4 ${
                  isDarkMode
                    ? "bg-[#1E293B] border border-[#334155]"
                    : "bg-white shadow-sm"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    isDarkMode
                      ? "bg-[#111827] text-[#94A3B8]"
                      : "bg-[#eff4ff] text-[#004ac6]"
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    shopping_bag
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Your cart is empty</h2>
                  <p
                    className={`text-sm mt-1 ${
                      isDarkMode ? "text-[#94A3B8]" : "text-[#565e74]"
                    }`}
                  >
                    Looks like you haven&apos;t added any curated essentials yet.
                  </p>
                </div>
                <Link
                  to="/products"
                  className={`mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isDarkMode
                      ? "bg-[#3B82F6] hover:bg-[#60A5FA] text-white"
                      : "bg-[#2563eb] hover:bg-[#004ac6] text-white"
                  }`}
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    isDarkMode={isDarkMode}
                    onUpdateQuantity={handleUpdateQuantity}
                    onSaveForLater={handleSaveForLater}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>
            )}

            <CartPromoBar
              isDarkMode={isDarkMode}
              promoInput={promoInput}
              setPromoInput={setPromoInput}
              appliedPromo={appliedPromo}
              discountAmount={discountAmount}
              promoError={promoError}
              onApplyPromo={handleApplyPromo}
              onRemovePromo={handleRemovePromo}
            />
          </div>

          {/* Right Column (4 cols) */}
          <OrderSummaryCard
            isDarkMode={isDarkMode}
            totalCount={totalCount}
            subtotal={subtotal}
            appliedPromo={appliedPromo}
            discountAmount={discountAmount}
            estimatedTax={estimatedTax}
            total={total}
            isEmpty={items.length === 0}
            onCheckout={() =>
              notify("Proceeding to secure 256-bit checkout...")
            }
          />
        </div>

        <RecommendedAddons
          isDarkMode={isDarkMode}
          onAddAddon={handleAddAddon}
        />
      </div>

      {/* Fallback Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium shadow-xl transition-all ${
            isDarkMode
              ? "bg-[#1E293B] border border-[#334155] text-[#F8FAFC]"
              : "bg-[#0b1c30] text-white"
          }`}
        >
          <span className="material-symbols-outlined text-[18px] text-[#22C55E]">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
import  { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(["fp-1"]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, icon = "check_circle") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, icon }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`Added "${product.title}" to your cart`);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const isFav = prev.includes(productId);
      if (isFav) {
        showToast("Removed from wishlist", "favorite_border");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved to your wishlist", "favorite");
        return [...prev, productId];
      }
    });
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        cartCount,
        wishlist,
        isDarkMode,
        toasts,
        addToCart,
        toggleWishlist,
        toggleDarkMode,
        showToast,
      }}
    >
      <div
        className={
          isDarkMode
            ? "min-h-screen antialiased bg-[#0F172A] text-[#CBD5E1]"
            : "min-h-screen antialiased bg-slate-50 text-slate-900"
        }
      >
        {children}
      </div>
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
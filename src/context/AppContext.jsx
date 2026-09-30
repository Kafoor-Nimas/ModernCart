import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Global States
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(["fp-1"]);
  const [user, setUser] = useState(null); // { name: "Admin", role: "admin" }
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cart Functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Wishlist Functions
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  // Auth Functions
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  // Dark Mode Toggle
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Total Item Count in Cart
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        cartCount,
        wishlist,
        user,
        isDarkMode,
        addToCart,
        removeFromCart,
        toggleWishlist,
        login,
        logout,
        toggleDarkMode,
      }}
    >
      <div className={isDarkMode ? "dark" : ""}>{children}</div>
    </AppContext.Provider>
  );
}

// Custom Hook for easy consumption in components
export const useApp = () => useContext(AppContext);

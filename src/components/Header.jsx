import { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Header() {
  const { cartCount, wishlist, isDarkMode, toggleDarkMode } = useApp();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b shadow-sm transition-colors ${
        isDarkMode
          ? "bg-slate-900/90 border-slate-800 text-white"
          : "bg-white/90 border-slate-200 text-slate-900"
      }`}
    >
      <div className="h-20 max-w-[1600px] mx-auto px-6 flex items-center justify-between gap-6">
        {/* Brand & Navigation */}
        <div className="flex items-center gap-8">
          <Link className="flex items-center gap-2 shrink-0" to="/">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              ModernCart
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-blue-600 font-bold transition-colors" to="/">
              Home
            </Link>
            <Link
              className={`font-medium text-sm transition-colors ${
                isDarkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              to="/products"
            >
              Products
            </Link>
            <Link
              className={`font-medium text-sm transition-colors ${
                isDarkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              to="/categories"
            >
              Categories
            </Link>
            <Link
              className={`font-medium text-sm transition-colors ${
                isDarkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              to="/deals"
            >
              Deals
            </Link>
          </nav>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-lg hidden md:block">
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[20px]">
              search
            </span>
            <input
              className={`w-full pl-10 pr-14 py-2 text-sm rounded-xl border focus:outline-none focus:border-blue-600 transition-all ${
                isDarkMode
                  ? "bg-slate-800 text-white placeholder:text-slate-500 border-slate-700"
                  : "bg-slate-100 text-slate-900 placeholder:text-slate-400 border-slate-200"
              }`}
              placeholder="Search products, brands, and categories..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div
              className={`absolute right-3 flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-semibold pointer-events-none ${
                isDarkMode
                  ? "bg-slate-700 text-slate-400"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
        </div>

        {/* User Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            aria-label="Wishlist"
            className={`relative p-2 rounded-full transition-colors ${
              isDarkMode
                ? "hover:bg-slate-800 text-slate-300"
                : "hover:bg-slate-100 text-slate-600"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              favorite
            </span>
            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold leading-none">
              {wishlist?.length || 0}
            </span>
          </button>

          <button
            aria-label="Cart"
            className={`relative p-2 rounded-full transition-colors ${
              isDarkMode
                ? "hover:bg-slate-800 text-slate-300"
                : "hover:bg-slate-100 text-slate-600"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              shopping_bag
            </span>
            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold leading-none">
              {cartCount || 0}
            </span>
          </button>

          <button
            aria-label="Toggle Theme"
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "hover:bg-slate-800 text-slate-300"
                : "hover:bg-slate-100 text-slate-600"
            }`}
            type="button"
            onClick={toggleDarkMode}
          >
            <span className="material-symbols-outlined text-[22px]">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <div
            className={`h-6 w-px mx-1 hidden sm:block ${
              isDarkMode ? "bg-slate-700" : "bg-slate-200"
            }`}
          ></div>

          <button
            className={`flex items-center gap-1 p-1 rounded-full transition-colors ${
              isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
            }`}
            type="button"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
              U
            </div>
            <span className="material-symbols-outlined text-slate-400 text-[18px]">
              expand_more
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

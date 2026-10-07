import  { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Header() {
  const { cartCount, wishlist, isDarkMode, toggleDarkMode } = useApp();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-colors ${
        isDarkMode
          ? "bg-[#111827]/95 border-[#334155] shadow-[0_1px_8px_rgba(0,0,0,0.03)] text-[#CBD5E1]"
          : "bg-white/90 border-slate-200 text-slate-900 shadow-sm"
      }`}
    >
      <div className="h-20 max-w-[1600px] mx-auto px-6 flex items-center justify-between gap-6">
        {/* Brand & Nav */}
        <div className="flex items-center gap-8">
          <Link className="flex items-center gap-2 shrink-0" to="/">
            <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              ModernCart
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link
              className="font-bold transition-colors"
              style={{ color: isDarkMode ? "#F8FAFC" : "#2563EB" }}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`font-medium text-sm transition-colors ${
                isDarkMode ? "text-[#CBD5E1] hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
              to="/products"
            >
              Products
            </Link>
            <Link
              className={`font-medium text-sm transition-colors ${
                isDarkMode ? "text-[#CBD5E1] hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
              to="/categories"
            >
              Categories
            </Link>
            <Link
              className={`font-medium text-sm transition-colors ${
                isDarkMode ? "text-[#CBD5E1] hover:text-white" : "text-slate-600 hover:text-slate-900"
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
            <span
              className="material-symbols-outlined absolute left-3 text-[20px] pointer-events-none"
              style={{ color: isDarkMode ? "#737686" : "#94A3B8" }}
            >
              search
            </span>
            <input
              className={`w-full pl-10 pr-14 py-2 text-sm rounded-xl border focus:outline-none focus:border-[#3B82F6] transition-all ${
                isDarkMode
                  ? "bg-[#1E293B] border-[#334155] text-[#F8FAFC] placeholder:text-[#737686]"
                  : "bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400"
              }`}
              placeholder="Search products, brands, and categories..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div
              className={`absolute right-3 flex items-center gap-0.5 px-1.5 py-0.5 rounded border text-xs font-semibold pointer-events-none ${
                isDarkMode
                  ? "bg-[#111827] border-[#334155] text-[#94A3B8]"
                  : "bg-slate-200 border-slate-300 text-slate-500"
              }`}
            >
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            aria-label="Wishlist"
            className={`relative p-2 rounded-full transition-colors ${
              isDarkMode ? "hover:bg-slate-800 text-[#CBD5E1]" : "hover:bg-slate-100 text-slate-600"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">favorite</span>
            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-[#F43F5E] text-white text-[10px] font-bold leading-none">
              {wishlist?.length || 0}
            </span>
          </button>

          <button
            aria-label="Cart"
            className={`relative p-2 rounded-full transition-colors ${
              isDarkMode ? "hover:bg-slate-800 text-[#CBD5E1]" : "hover:bg-slate-100 text-slate-600"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-[#3B82F6] text-white text-[10px] font-bold leading-none">
              {cartCount || 0}
            </span>
          </button>

          <button
            aria-label="Toggle Theme"
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-[#FBBF24] bg-[#1E293B] border border-[#334155] hover:bg-slate-800 shadow-[0_0_12px_rgba(251,191,36,0.25)]"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            type="button"
            onClick={toggleDarkMode}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: isDarkMode ? "'FILL' 1" : "'FILL' 0" }}
            >
              {isDarkMode ? "dark_mode" : "light_mode"}
            </span>
          </button>

          <div className={`h-6 w-px mx-0.5 hidden sm:block ${isDarkMode ? "bg-[#334155]" : "bg-slate-200"}`}></div>

          <button
            className={`flex items-center gap-1 p-1 rounded-full transition-colors ${
              isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
            }`}
            type="button"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
              U
            </div>
            <span className="material-symbols-outlined text-[18px]" style={{ color: isDarkMode ? "#94A3B8" : "#94A3B8" }}>
              expand_more
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
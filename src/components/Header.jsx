import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Categories", to: "/categories" },
  { label: "Deals", to: "/deals" },
];

export default function Header() {
  const { cartCount, wishlist, isDarkMode, toggleDarkMode } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-colors ${
        isDarkMode
          ? "bg-[#111827]/95 border-[#334155] shadow-[0_1px_8px_rgba(0,0,0,0.03)] text-[#CBD5E1]"
          : "bg-white/90 border-slate-200 text-slate-900 shadow-sm"
      }`}
    >
      <div className="h-20 max-w-[1700px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Hamburger (Mobile/Tablet) + Brand + Desktop Nav */}
        <div className="flex items-center gap-3 sm:gap-8">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden p-2 -ml-2 rounded-xl transition-colors ${
              isDarkMode
                ? "hover:bg-slate-800 text-[#CBD5E1]"
                : "hover:bg-slate-100 text-slate-700"
            }`}
          >
            <span className="material-symbols-outlined text-[26px] block">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

          <Link
            className="flex items-center gap-2 shrink-0"
            to="/"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span
              className={`text-lg sm:text-xl font-bold tracking-tight ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              ModernCart
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm transition-colors ${
                    isActive
                      ? isDarkMode
                        ? "font-bold text-[#F8FAFC]"
                        : "font-bold text-[#2563EB]"
                      : isDarkMode
                      ? "font-medium text-[#CBD5E1] hover:text-white"
                      : "font-medium text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Center: Global Search Bar (md and up) */}
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

        {/* Right: User Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            aria-label="Wishlist"
            className={`relative p-2 rounded-full transition-colors ${
              isDarkMode
                ? "hover:bg-slate-800 text-[#CBD5E1]"
                : "hover:bg-slate-100 text-slate-600"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
              favorite
            </span>
            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-[#F43F5E] text-white text-[10px] font-bold leading-none">
              {wishlist?.length || 0}
            </span>
          </button>

          <button
            aria-label="Cart"
            className={`relative p-2 rounded-full transition-colors ${
              isDarkMode
                ? "hover:bg-slate-800 text-[#CBD5E1]"
                : "hover:bg-slate-100 text-slate-600"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
              shopping_bag
            </span>
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
              className="material-symbols-outlined text-[20px] sm:text-[22px]"
              style={{
                fontVariationSettings: isDarkMode ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {isDarkMode ? "dark_mode" : "light_mode"}
            </span>
          </button>

          <div
            className={`h-6 w-px mx-0.5 hidden sm:block ${
              isDarkMode ? "bg-[#334155]" : "bg-slate-200"
            }`}
          />

          <button
            className={`hidden sm:flex items-center gap-1 p-1 rounded-full transition-colors ${
              isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
            }`}
            type="button"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
              U
            </div>
            <span className="material-symbols-outlined text-[18px] text-[#94A3B8]">
              expand_more
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-4 pt-4 pb-6 space-y-4 transition-all ${
            isDarkMode
              ? "bg-[#111827] border-[#334155]"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Mobile Search Bar */}
          <div className="md:hidden relative flex items-center w-full">
            <span
              className="material-symbols-outlined absolute left-3 text-[20px] pointer-events-none"
              style={{ color: isDarkMode ? "#737686" : "#94A3B8" }}
            >
              search
            </span>
            <input
              className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:border-[#3B82F6] transition-all ${
                isDarkMode
                  ? "bg-[#1E293B] border-[#334155] text-[#F8FAFC] placeholder:text-[#737686]"
                  : "bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400"
              }`}
              placeholder="Search products, brands, and categories..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className={`px-3 py-2.5 rounded-xl text-base transition-colors ${
                    isActive
                      ? isDarkMode
                        ? "bg-[#1E293B] text-[#F8FAFC] font-bold"
                        : "bg-blue-50 text-[#2563EB] font-bold"
                      : isDarkMode
                      ? "text-[#CBD5E1] hover:bg-[#1E293B]/60 hover:text-white font-medium"
                      : "text-slate-700 hover:bg-slate-100 font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Account Row */}
          <div
            className={`sm:hidden pt-3 border-t flex items-center justify-between ${
              isDarkMode ? "border-[#334155]" : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                U
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
                  }`}
                >
                  User Account
                </span>
                <span className="text-xs text-slate-400">
                  Manage profile & orders
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-[#94A3B8]">
              chevron_right
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
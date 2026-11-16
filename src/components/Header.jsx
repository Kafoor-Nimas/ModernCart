import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/useApp";
import { SEARCH_CATALOG } from "../data/searchCatalog";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Categories", to: "/categories" },
  { label: "Deals", to: "/deals" },
];

export default function Header() {
  const { cartCount, wishlist, isDarkMode, toggleDarkMode } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(
    () => new URLSearchParams(location.search).get("search") ?? ""
  );
  const [prevSearch, setPrevSearch] = useState(location.search);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const desktopInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Sync input when URL query param changes (no useEffect needed)
  if (location.search !== prevSearch) {
    setPrevSearch(location.search);
    const q = new URLSearchParams(location.search).get("search");
    if (q !== null) {
      setSearchQuery(q);
    }
  }

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Global Cmd+K / Ctrl+K shortcut & Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        desktopInputRef.current?.focus();
        setIsSearchOpen(true);
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
        desktopInputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_CATALOG.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);

    if (trimmed) {
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
    } else {
      navigate("/products");
    }
  };

  const handleSelectResult = (item) => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setSearchQuery("");
    navigate(item.route);
  };

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
        {/* Left: Hamburger + Brand + Desktop Nav */}
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
        <div
          ref={searchContainerRef}
          className="flex-1 max-w-lg hidden md:block relative"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center w-full"
          >
            <span
              className="material-symbols-outlined absolute left-3 text-[20px] pointer-events-none"
              style={{ color: isDarkMode ? "#737686" : "#94A3B8" }}
            >
              search
            </span>
            <input
              ref={desktopInputRef}
              className={`w-full pl-10 pr-20 py-2 text-sm rounded-xl border focus:outline-none focus:border-[#3B82F6] transition-all ${
                isDarkMode
                  ? "bg-[#1E293B] border-[#334155] text-[#F8FAFC] placeholder:text-[#737686]"
                  : "bg-slate-100 border-slate-200 text-slate-900 placeholder:text-slate-400"
              }`}
              placeholder="Search products, brands, and categories..."
              type="text"
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
            />

            {searchQuery ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setSearchQuery("");
                  desktopInputRef.current?.focus();
                }}
                className={`absolute right-3 p-0.5 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-[#94A3B8] hover:text-white hover:bg-[#334155]"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span className="material-symbols-outlined text-[16px] block">
                  close
                </span>
              </button>
            ) : (
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
            )}
          </form>

          {/* Live Search Results Dropdown */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div
              className={`absolute left-0 right-0 mt-2 rounded-2xl border overflow-hidden shadow-2xl z-50 ${
                isDarkMode
                  ? "bg-[#1E293B] border-[#334155] text-[#F8FAFC]"
                  : "bg-white border-slate-200 text-slate-900"
              }`}
            >
              {searchResults.length > 0 ? (
                <>
                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-200/10">
                    {searchResults.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectResult(item)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          isDarkMode
                            ? "hover:bg-[#111827]"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-11 h-11 rounded-lg object-cover shrink-0 ${
                            isDarkMode ? "bg-[#111827]" : "bg-slate-100"
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">
                            {item.title}
                          </p>
                          <p
                            className={`text-xs truncate ${
                              isDarkMode ? "text-[#94A3B8]" : "text-slate-500"
                            }`}
                          >
                            {item.brand} • {item.category}
                          </p>
                        </div>
                        <span
                          className={`text-sm font-bold shrink-0 ${
                            isDarkMode ? "text-[#60A5FA]" : "text-[#2563EB]"
                          }`}
                        >
                          ${item.price.toFixed(2)}
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className={`w-full px-4 py-2.5 text-xs font-semibold flex items-center justify-between border-t transition-colors ${
                      isDarkMode
                        ? "bg-[#111827] border-[#334155] text-[#60A5FA] hover:text-[#93C5FD]"
                        : "bg-slate-50 border-slate-200 text-[#2563EB] hover:text-[#1D4ED8]"
                    }`}
                  >
                    <span>
                      View all results for &ldquo;{searchQuery.trim()}&rdquo;
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </>
              ) : (
                <div className="px-4 py-6 text-center">
                  <p
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-[#CBD5E1]" : "text-slate-700"
                    }`}
                  >
                    No matches found for &ldquo;{searchQuery.trim()}&rdquo;
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      isDarkMode ? "text-[#94A3B8]" : "text-slate-500"
                    }`}
                  >
                    Try searching for headphones, leather, charger, or audio.
                  </p>
                </div>
              )}
            </div>
          )}
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
            onClick={() => navigate("/cart")}
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
          <form
            onSubmit={handleSearchSubmit}
            className="md:hidden relative flex items-center w-full"
          >
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
          </form>

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
                  Manage profile &amp; orders
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
import { Link } from "react-router-dom";

export default function Header({
  cartCount,
  wishlistCount,
  searchQuery,
  setSearchQuery,
  isDarkMode,
  setIsDarkMode,
}) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-xl">
          <Link className="flex items-center gap-space-xs shrink-0" to="/">
            <img
              alt="ModernCart Brand Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UAqGD7EwQs_2QFm0R7kECexy6CSa7krT6jRp2GZB62y0-sxVOnI_mxd_PRTMQu6ufxbikzucc-QpJKYSflets27mS7sS5x4-heVycAOm7FjwvH1OMCHIC6pA123iK7-Nf2hnfyOOgOHYu4qUuNhuBzFvsR6yrkUa5rYRQuW6Ub_rRHLl-XFQvoO2EryyxgRYkXrSPcwl3b5LKtgCdGUKv0ddXv5q-GoUSypd7PT44B0-qorNTNF3a4Snc"
            />
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
              ModernCart
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-space-lg">
            <Link className="transition-colors text-primary font-bold" to="/">
              Home
            </Link>
            <Link
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
              to="/categories"
            >
              Categories
            </Link>
            <Link
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
              to="/deals"
            >
              Deals
            </Link>
          </nav>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-lg hidden md:block">
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-space-sm text-outline pointer-events-none text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-14 py-space-xs font-body-sm text-body-sm bg-surface-container-low text-on-surface placeholder:text-outline rounded-xl border border-outline-variant/40 focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
              placeholder="Search products, brands, and categories..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-space-sm flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-outline font-label-sm text-label-sm pointer-events-none">
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            aria-label="Wishlist"
            className="relative p-space-xs rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              favorite
            </span>
            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-primary text-on-primary font-label-sm text-[10px] font-bold leading-none">
              {wishlistCount}
            </span>
          </button>
          <button
            aria-label="Cart"
            className="relative p-space-xs rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              shopping_bag
            </span>
            <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] font-bold leading-none">
              {cartCount}
            </span>
          </button>
          <button
            aria-label="Toggle Theme"
            className="p-space-xs rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors"
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <span className="material-symbols-outlined text-[22px]">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <div className="h-6 w-px bg-outline-variant/40 mx-0.5 hidden sm:block"></div>
          <button
            className="flex items-center gap-space-xs p-1 rounded-full hover:bg-surface-container-high transition-colors"
            type="button"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5b_zDkuV8ns25MNMrkMhNV5Wkq0vpqoZX_OI_pdiyJWgGkxZMDtEtRd7U2sjkCrM8hbwlLQnn0ZfFQGkp1zu-JosjDeLKvVxq5yq3NSs4BAPDTGtCIBTXsY3a9uw6F7lp4pvvdw2G_vY0C_--pmKId6ILDbtK6h3b_zJ2wUV-cE2-9skqJLHZJud1bTG-CvW-WX01dJhPUzTR-hT2eCBLOrtUlEa41IZnGRaiXDOHLeoAjFavOduY"
            />
            <span className="material-symbols-outlined text-outline text-[18px]">
              expand_more
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

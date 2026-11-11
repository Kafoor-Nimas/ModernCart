import { useApp } from "../context/AppContext";

export default function ProductBreadcrumb() {
  const { isDarkMode } = useApp();

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 py-space-md">
      <nav className="flex items-center gap-space-xs font-body-sm text-body-sm">
        <a
          className="hover:text-primary transition-colors"
          href="#"
          style={{ color: isDarkMode ? "#94A3B8" : undefined }}
        >
          Home
        </a>
        <span
          className="material-symbols-outlined text-[16px]"
          style={{ color: isDarkMode ? "#64748B" : undefined }}
        >
          chevron_right
        </span>
        <a
          className="hover:text-primary transition-colors"
          href="#"
          style={{ color: isDarkMode ? "#94A3B8" : undefined }}
        >
          Electronics
        </a>
        <span
          className="material-symbols-outlined text-[16px]"
          style={{ color: isDarkMode ? "#64748B" : undefined }}
        >
          chevron_right
        </span>
        <a
          className="hover:text-primary transition-colors"
          href="#"
          style={{ color: isDarkMode ? "#94A3B8" : undefined }}
        >
          Headphones
        </a>
        <span
          className="material-symbols-outlined text-[16px]"
          style={{ color: isDarkMode ? "#64748B" : undefined }}
        >
          chevron_right
        </span>
        <span
          className={`font-label-sm text-label-sm truncate ${
            isDarkMode ? "" : "text-on-surface"
          }`}
          style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
        >
          Studio One ANC Wireless Headphones
        </span>
      </nav>
    </div>
  );
}
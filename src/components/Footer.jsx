import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Footer() {
  const { isDarkMode } = useApp();

  const linkClass = `transition-colors ${
    isDarkMode ? "hover:text-white" : "hover:text-slate-900"
  }`;

  return (
    <footer
      className={`w-full border-t transition-colors ${
        isDarkMode
          ? "bg-[#0B1120] border-[#334155]"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: isDarkMode ? "#94A3B8" : "#64748B" }}>
              <li><Link className={linkClass} to="/about">About Us</Link></li>
              <li><Link className={linkClass} to="/careers">Careers</Link></li>
              <li><Link className={linkClass} to="/press">Press</Link></li>
              <li><Link className={linkClass} to="/sustainability">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              Customer Service
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: isDarkMode ? "#94A3B8" : "#64748B" }}>
              <li><Link className={linkClass} to="/help">Help Center</Link></li>
              <li><Link className={linkClass} to="/track">Track Order</Link></li>
              <li><Link className={linkClass} to="/shipping">Shipping & Delivery</Link></li>
              <li><Link className={linkClass} to="/returns">Returns & Refunds</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              Shop & Explore
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: isDarkMode ? "#94A3B8" : "#64748B" }}>
              <li><Link className={linkClass} to="/category/electronics">Electronics</Link></li>
              <li><Link className={linkClass} to="/category/home">Minimalist Home</Link></li>
              <li><Link className={linkClass} to="/category/fashion">Lifestyle & Fashion</Link></li>
              <li><Link className={linkClass} to="/category/beauty">Beauty & Care</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              Legal & Trust
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: isDarkMode ? "#94A3B8" : "#64748B" }}>
              <li><Link className={linkClass} to="/privacy">Privacy Policy</Link></li>
              <li><Link className={linkClass} to="/terms">Terms of Service</Link></li>
              <li><Link className={linkClass} to="/cookies">Cookie Preferences</Link></li>
              <li><Link className={linkClass} to="/accessibility">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDarkMode ? "border-[#334155]" : "border-slate-200"
          }`}
        >
          <p className="text-xs" style={{ color: "#64748B" }}>
            © 2025 ModernCart Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {["Visa", "Mastercard", "Apple Pay", "PayPal"].map((card) => (
              <span
                key={card}
                className={`px-2 py-1 text-[11px] rounded ${
                  isDarkMode
                    ? "bg-[#1E293B] border border-[#334155] text-[#CBD5E1]"
                    : "bg-slate-100 border border-slate-200 text-slate-600"
                }`}
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
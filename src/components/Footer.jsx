import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Footer() {
  const { isDarkMode } = useApp();

  return (
    <footer
      className={`w-full border-t transition-colors ${
        isDarkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/press"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/sustainability"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Customer Service
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/help"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/track"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/shipping"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/returns"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Shop & Explore
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/category/electronics"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/category/home"
                >
                  Minimalist Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/category/fashion"
                >
                  Lifestyle & Fashion
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Legal & Trust
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/terms"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  to="/cookies"
                >
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDarkMode ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <p className="text-xs text-slate-400">
            © 2025 ModernCart Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 text-[11px] rounded border ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300 border-slate-700"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              Visa
            </span>
            <span
              className={`px-2 py-1 text-[11px] rounded border ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300 border-slate-700"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              Mastercard
            </span>
            <span
              className={`px-2 py-1 text-[11px] rounded border ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300 border-slate-700"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              Apple Pay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

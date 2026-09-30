import { useApp } from "../context/AppContext";

export default function ValuePropsSection() {
  const { isDarkMode } = useApp();

  return (
    <section className="w-full px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className={`p-6 rounded-2xl border shadow-sm flex items-start gap-4 ${
            isDarkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isDarkMode ? "bg-slate-800" : "bg-blue-50"
            }`}
          >
            <span className="material-symbols-outlined text-blue-600 text-[24px]">
              verified_user
            </span>
          </div>
          <div>
            <h4
              className={`text-base font-semibold mb-1 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Authenticity Guaranteed
            </h4>
            <p className="text-xs text-slate-400">
              Every product is sourced directly from authenticated master craftsmen and licensed brands.
            </p>
          </div>
        </div>

        <div
          className={`p-6 rounded-2xl border shadow-sm flex items-start gap-4 ${
            isDarkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isDarkMode ? "bg-slate-800" : "bg-emerald-50"
            }`}
          >
            <span className="material-symbols-outlined text-emerald-600 text-[24px]">
              published_with_changes
            </span>
          </div>
          <div>
            <h4
              className={`text-base font-semibold mb-1 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              30-Day Hassle-Free Returns
            </h4>
            <p className="text-xs text-slate-400">
              Not completely satisfied? Initiate a doorstep pickup return within thirty days for an instant refund.
            </p>
          </div>
        </div>

        <div
          className={`p-6 rounded-2xl border shadow-sm flex items-start gap-4 ${
            isDarkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-100"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isDarkMode ? "bg-slate-800" : "bg-blue-50"
            }`}
          >
            <span className="material-symbols-outlined text-blue-600 text-[24px]">
              support_agent
            </span>
          </div>
          <div>
            <h4
              className={`text-base font-semibold mb-1 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              24/7 Dedicated Concierge
            </h4>
            <p className="text-xs text-slate-400">
              Our team of human product specialists is available day and night to answer specs and styling inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
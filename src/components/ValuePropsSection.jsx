import { useApp } from "../context/AppContext";

export default function ValuePropsSection() {
  const { isDarkMode } = useApp();

  return (
    <section className="w-full px-6 py-12 max-w-[1700px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className={`p-6 rounded-2xl shadow-sm flex items-start gap-4 ${
            isDarkMode
              ? "bg-[#1E293B] border border-[#334155]"
              : "bg-white border border-slate-100"
          }`}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isDarkMode ? "rgba(59, 130, 246, 0.15)" : "#EFF6FF",
            }}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ color: isDarkMode ? "#60A5FA" : "#2563EB" }}
            >
              verified_user
            </span>
          </div>
          <div>
            <h4
              className={`text-lg font-semibold mb-1 ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              Authenticity Guaranteed
            </h4>
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              Every product is sourced directly from authenticated master craftsmen and licensed brands.
            </p>
          </div>
        </div>

        <div
          className={`p-6 rounded-2xl shadow-sm flex items-start gap-4 ${
            isDarkMode
              ? "bg-[#1E293B] border border-[#334155]"
              : "bg-white border border-slate-100"
          }`}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isDarkMode ? "rgba(34, 197, 94, 0.15)" : "#F0FDF4",
            }}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ color: isDarkMode ? "#22C55E" : "#16A34A" }}
            >
              published_with_changes
            </span>
          </div>
          <div>
            <h4
              className={`text-lg font-semibold mb-1 ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              30-Day Hassle-Free Returns
            </h4>
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              Not completely satisfied? Initiate a doorstep pickup return within thirty days for an instant refund.
            </p>
          </div>
        </div>

        <div
          className={`p-6 rounded-2xl shadow-sm flex items-start gap-4 ${
            isDarkMode
              ? "bg-[#1E293B] border border-[#334155]"
              : "bg-white border border-slate-100"
          }`}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isDarkMode ? "rgba(96, 165, 250, 0.15)" : "#EFF6FF",
            }}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ color: isDarkMode ? "#60A5FA" : "#2563EB" }}
            >
              support_agent
            </span>
          </div>
          <div>
            <h4
              className={`text-lg font-semibold mb-1 ${
                isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
              }`}
            >
              24/7 Dedicated Concierge
            </h4>
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              Our team of human product specialists is available day and night to answer specs and styling inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
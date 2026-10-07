import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { showToast, isDarkMode } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      showToast(`Subscribed successfully with ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="w-full px-6 py-14 max-w-[1600px] mx-auto">
      <div
        className={`w-full rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col items-center text-center ${
          isDarkMode
            ? "bg-[#111827] border border-[#334155]"
            : "bg-white border border-slate-100"
        }`}
      >
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
          style={{
            backgroundColor: isDarkMode ? "rgba(59, 130, 246, 0.15)" : "#EFF6FF",
          }}
        >
          <span
            className="material-symbols-outlined text-[26px]"
            style={{ color: isDarkMode ? "#60A5FA" : "#2563EB" }}
          >
            mark_email_read
          </span>
        </div>

        <h2
          className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
          }`}
        >
          Stay updated
        </h2>

        <p
          className={`text-sm max-w-md mt-2 mb-6 ${
            isDarkMode ? "text-[#CBD5E1]" : "text-slate-500"
          }`}
        >
          Subscribe to receive curated product releases, private drops, and exclusive member discounts right in your inbox.
        </p>

        <form
          className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <span
              className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px]"
              style={{ color: "#64748B" }}
            >
              mail
            </span>
            <input
              className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none transition-all ${
                isDarkMode
                  ? "bg-[#1E293B] border border-[#334155] text-[#F8FAFC] placeholder:text-[#64748B]"
                  : "bg-slate-100 border border-slate-200 text-slate-900 placeholder:text-slate-400"
              }`}
              placeholder="Enter your email address..."
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-semibold text-sm transition-colors shrink-0 shadow-sm hover:brightness-110"
            style={{ backgroundColor: "#3B82F6" }}
            type="submit"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs mt-3" style={{ color: "#64748B" }}>
          We respect your privacy. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}
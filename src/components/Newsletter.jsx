import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Newsletter({ onSubscribe }) {
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
        className={`w-full border rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col items-center text-center ${
          isDarkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-100"
        }`}
      >
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-blue-600 ${
            isDarkMode ? "bg-slate-800" : "bg-blue-50"
          }`}
        >
          <span className="material-symbols-outlined text-[26px]">
            mark_email_read
          </span>
        </div>
        <h2
          className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Stay updated
        </h2>
        <p className="text-sm text-slate-400 max-w-md mt-2 mb-6">
          Subscribe to receive curated product releases, private drops, and
          exclusive member discounts right in your inbox.
        </p>

        <form
          className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              mail
            </span>
            <input
              className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none border focus:border-blue-600 transition-all ${
                isDarkMode
                  ? "bg-slate-800 text-white placeholder:text-slate-500 border-slate-700"
                  : "bg-slate-100 text-slate-900 placeholder:text-slate-400 border-slate-200"
              }`}
              placeholder="Enter your email address..."
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shrink-0 shadow-sm"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-3">
          We respect your privacy. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}

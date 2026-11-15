import { useState } from "react";

export default function DealsNewsletter({ isDarkMode }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="max-w-[1600px] mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
      <div
        className={`relative rounded-xl p-space-xl md:p-space-2xl shadow-md overflow-hidden text-center flex flex-col items-center ${
          isDarkMode
            ? "bg-[#131b2e] border border-[#424754]/50"
            : "bg-surface-container-lowest border border-slate-200/70"
        }`}
      >
        {/* Ambient accents */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4d8eff]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#f9bd22]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="w-12 h-12 rounded-full bg-[#4d8eff]/15 text-[#4d8eff] flex items-center justify-center mb-space-md shadow-sm">
          <span className="material-symbols-outlined text-2xl">mail</span>
        </div>

        <h2
          className={`font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold mb-space-xs tracking-tight ${
            isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
          }`}
        >
          Never Miss a Deal
        </h2>

        <p
          className={`font-body-lg text-body-lg max-w-xl mb-space-xl ${
            isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
          }`}
        >
          Subscribe to receive instant updates about flash sales, private promo
          codes, and weekly curated drop announcements.
        </p>

        {!subscribed ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-space-xs"
          >
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-[#8c909f] text-lg pointer-events-none">
                alternate_email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`w-full pl-10 pr-space-md py-3 rounded-xl font-body-md text-body-md focus:outline-none transition-all ${
                  isDarkMode
                    ? "bg-[#171f33] text-[#dae2fd] placeholder:text-[#8c909f] border border-[#424754] focus:border-[#adc6ff]"
                    : "bg-surface-container-low text-on-surface placeholder:text-outline focus:bg-surface-container shadow-inner"
                }`}
              />
            </div>

            <button
              type="submit"
              className="px-space-xl py-3 bg-[#4d8eff] hover:bg-[#3b82f6] text-[#001a42] font-bold font-label-lg text-label-lg rounded-xl shadow-md transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mt-space-sm font-label-md text-label-md text-[#f9bd22] font-semibold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">
              check_circle
            </span>
            <span>
              Thank you for subscribing! Check your inbox for 10% extra savings.
            </span>
          </div>
        )}

        <p className="font-body-sm text-body-sm text-[#8c909f] mt-space-md">
          Zero spam. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}
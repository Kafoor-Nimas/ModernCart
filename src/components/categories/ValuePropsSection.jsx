const VALUE_PROPS = [
  {
    icon: "verified",
    title: "Strict Provenance",
    desc: "Every category is curated from vetted global makers adhering to material transparency and artisan benchmarks.",
  },
  {
    icon: "local_shipping",
    title: "Rapid Dispatch",
    desc: "All in-stock collections ship within 24 hours with climate-neutral packaging and insured tracking.",
  },
  {
    icon: "published_with_changes",
    title: "30-Day Evaluation",
    desc: "Experience items in your personal space. Effortless returns and exchanges across every product tier.",
  },
];

export default function ValuePropsSection({ isDarkMode }) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-margin-mobile lg:px-margin py-space-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {VALUE_PROPS.map((prop) => (
          <div
            key={prop.title}
            className={`flex items-start gap-space-md p-space-lg rounded-xl shadow-sm ${
              isDarkMode
                ? "bg-[#171f33] border border-[#424754]/50"
                : "bg-surface-container-lowest border border-outline-variant/20"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "bg-[#39475d] text-[#d5e3ff]"
                  : "bg-secondary-container text-on-secondary-fixed"
              }`}
            >
              <span className="material-symbols-outlined text-2xl">
                {prop.icon}
              </span>
            </div>
            <div>
              <h4
                className={`font-headline-sm text-headline-sm font-semibold ${
                  isDarkMode ? "text-[#dae2fd]" : "text-on-surface"
                }`}
              >
                {prop.title}
              </h4>
              <p
                className={`font-body-sm text-body-sm mt-1 ${
                  isDarkMode ? "text-[#c2c6d6]" : "text-on-surface-variant"
                }`}
              >
                {prop.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
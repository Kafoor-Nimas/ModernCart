import { useApp } from "../context/AppContext";

export default function ProductTabsSection({ activeTab, setActiveTab }) {
  const { isDarkMode } = useApp();

  const tabs = [
    { id: "specs", label: "Product Specifications" },
    { id: "shipping", label: "Shipping & Returns" },
    { id: "reviews", label: "Customer Reviews (342)" },
    { id: "care", label: "Care & Manual" },
  ];

  return (
    <section
      id="details-tabs-section"
      className={`w-full shadow-sm py-space-2xl ${
        isDarkMode ? "" : "bg-surface-container-lowest"
      }`}
      style={{
        backgroundColor: isDarkMode ? "#0F172A" : undefined,
        borderTop: isDarkMode ? "1px solid #334155" : undefined,
        borderBottom: isDarkMode ? "1px solid #334155" : undefined,
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Tab Buttons */}
        <div className="flex items-center gap-space-xs overflow-x-auto pb-space-md no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn px-space-md py-2.5 rounded-xl font-label-md text-label-md transition-all shrink-0 ${
                  isActive
                    ? isDarkMode
                      ? "font-bold"
                      : "bg-on-surface text-surface"
                    : isDarkMode
                    ? "border"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
                style={{
                  backgroundColor: isDarkMode
                    ? isActive
                      ? "#3B82F6"
                      : "#1E293B"
                    : undefined,
                  borderColor: isDarkMode && !isActive ? "#334155" : undefined,
                  color: isDarkMode ? (isActive ? "#FFFFFF" : "#CBD5E1") : undefined,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panel 1: Specs */}
        {activeTab === "specs" && (
          <div className="tab-panel flex flex-col gap-space-lg" id="tab-specs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
              <div className="flex flex-col gap-space-md">
                <h3
                  className="font-headline-sm text-headline-sm font-bold"
                  style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                >
                  Acoustic Architecture
                </h3>
                <p
                  className="font-body-md text-body-md leading-relaxed"
                  style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
                >
                  Custom-crafted beryllium-coated dynamic transducers paired with
                  twin internal Helmholtz resonance damping chambers. Tuned
                  alongside world-renowned audio mastering engineers to deliver a
                  perfectly balanced reference acoustic curve with sub-bass
                  extension to 5Hz without distortion.
                </p>
                <div
                  className={`p-space-md rounded-xl ${
                    isDarkMode ? "border" : "bg-surface-container-low"
                  }`}
                  style={{
                    backgroundColor: isDarkMode ? "#111827" : undefined,
                    borderColor: isDarkMode ? "#334155" : undefined,
                  }}
                >
                  <span
                    className="font-label-sm text-label-sm font-bold uppercase tracking-wider"
                    style={{ color: isDarkMode ? "#60A5FA" : undefined }}
                  >
                    Acoustic Curve Frequency
                  </span>
                  <div className="h-20 w-full mt-2 flex items-end">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 320 60"
                      style={{ color: isDarkMode ? "#3B82F6" : undefined }}
                    >
                      <path
                        d="M 0 45 C 30 45, 50 20, 90 28 C 130 36, 170 30, 210 22 C 250 15, 280 25, 320 20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      ></path>
                      <path
                        d="M 0 45 C 30 45, 50 20, 90 28 C 130 36, 170 30, 210 22 C 250 15, 280 25, 320 20 L 320 60 L 0 60 Z"
                        fill="currentColor"
                        fillOpacity={isDarkMode ? 0.15 : 0.08}
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="flex justify-between font-label-sm text-[10px] mt-1"
                    style={{ color: isDarkMode ? "#94A3B8" : undefined }}
                  >
                    <span>10 Hz (Sub-bass)</span>
                    <span>1 kHz (Mid)</span>
                    <span>20 kHz (Air)</span>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-xl p-space-lg ${
                  isDarkMode ? "border" : "bg-surface-container-low"
                }`}
                style={{
                  backgroundColor: isDarkMode ? "#1E293B" : undefined,
                  borderColor: isDarkMode ? "#334155" : undefined,
                }}
              >
                <h4
                  className="font-label-lg text-label-lg font-bold mb-space-md"
                  style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                >
                  Technical Parameter Index
                </h4>
                <dl className="flex flex-col gap-space-sm font-body-sm text-body-sm">
                  {[
                    { label: "Transducer Unit", val: "40mm Custom Electro-acoustic Beryllium", bgDark: "#111827" },
                    { label: "Total Product Weight", val: "254 grams (Ultralight chassis)", bgDark: "#1E293B" },
                    { label: "Frequency Response Range", val: "5 Hz – 42,000 Hz (Hi-Res Certified)", bgDark: "#111827" },
                    { label: "Wireless Codec Suite", val: "Sony LDAC, Qualcomm aptX HD, AAC, SBC", bgDark: "#1E293B" },
                    { label: "Bluetooth Standard", val: "v5.3 with LE Audio & Dual-device Multipoint", bgDark: "#111827" },
                    { label: "Fast-Charge Capability", val: "10 minutes charge = 6 hours playback", bgDark: "#1E293B" },
                  ].map((param, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-1.5 px-3 rounded-lg ${
                        isDarkMode ? "border" : "bg-surface-container-lowest"
                      }`}
                      style={{
                        backgroundColor: isDarkMode ? param.bgDark : undefined,
                        borderColor: isDarkMode ? "#334155" : undefined,
                      }}
                    >
                      <dt style={{ color: isDarkMode ? "#94A3B8" : undefined }}>
                        {param.label}
                      </dt>
                      <dd
                        className="font-semibold"
                        style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                      >
                        {param.val}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 2: Shipping */}
        {activeTab === "shipping" && (
          <div className="tab-panel flex flex-col gap-space-lg" id="tab-shipping">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {[
                {
                  icon: "local_shipping",
                  title: "Domestic Expedited",
                  desc: "Free 2-day delivery on all orders via FedEx Express. Real-time GPS shipment tracking enabled upon dispatch.",
                },
                {
                  icon: "public",
                  title: "Global Shipments",
                  desc: "Worldwide delivery across 85 countries with all import fees and customs handled seamlessly at checkout.",
                },
                {
                  icon: "assignment_return",
                  title: "Frictionless Returns",
                  desc: "Unconditional 30-day trial. Print a prepaid digital shipping label straight from your order dashboard for instant courier pickup.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-space-lg rounded-xl ${
                    isDarkMode ? "border" : "bg-surface-container-low"
                  }`}
                  style={{
                    backgroundColor: isDarkMode ? "#1E293B" : undefined,
                    borderColor: isDarkMode ? "#334155" : undefined,
                  }}
                >
                  <span
                    className="material-symbols-outlined text-[32px] mb-space-xs"
                    style={{ color: isDarkMode ? "#60A5FA" : undefined }}
                  >
                    {item.icon}
                  </span>
                  <h4
                    className="font-headline-sm text-headline-sm font-bold mb-1"
                    style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-body-sm text-body-sm"
                    style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Panel 3: Reviews */}
        {activeTab === "reviews" && (
          <div className="tab-panel flex flex-col gap-space-xl" id="tab-reviews">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <div
                className={`lg:col-span-4 p-space-lg rounded-xl flex flex-col justify-between ${
                  isDarkMode ? "border" : "bg-surface-container-low"
                }`}
                style={{
                  backgroundColor: isDarkMode ? "#1E293B" : undefined,
                  borderColor: isDarkMode ? "#334155" : undefined,
                }}
              >
                <div>
                  <span
                    className="font-label-sm text-label-sm font-bold uppercase tracking-wider"
                    style={{ color: isDarkMode ? "#94A3B8" : undefined }}
                  >
                    Customer Sentiment
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span
                      className="font-display-lg text-[44px] font-bold leading-none"
                      style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                    >
                      4.8
                    </span>
                    <span
                      className="font-body-sm"
                      style={{ color: isDarkMode ? "#94A3B8" : undefined }}
                    >
                      out of 5.0
                    </span>
                  </div>
                  <div
                    className="flex items-center my-2"
                    style={{ color: isDarkMode ? "#FBBF24" : "#F59E0B" }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p
                    className="font-body-sm text-body-sm"
                    style={{ color: isDarkMode ? "#94A3B8" : undefined }}
                  >
                    Based on 342 verified purchases across the globe.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 mt-space-md">
                  {[
                    { stars: "5 star", pct: "84%" },
                    { stars: "4 star", pct: "11%" },
                    { stars: "3 star", pct: "3%" },
                    { stars: "2 star", pct: "1%" },
                    { stars: "1 star", pct: "1%" },
                  ].map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-center gap-2 font-label-sm text-[12px]"
                    >
                      <span
                        className="w-8"
                        style={{ color: isDarkMode ? "#94A3B8" : undefined }}
                      >
                        {row.stars}
                      </span>
                      <div
                        className="flex-1 h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: isDarkMode ? "#111827" : undefined }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: row.pct,
                            backgroundColor: isDarkMode ? "#3B82F6" : undefined,
                          }}
                        ></div>
                      </div>
                      <span
                        className="w-8 text-right font-semibold"
                        style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                      >
                        {row.pct}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review List */}
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                {[
                  {
                    name: "Julian Vance",
                    time: "3 days ago",
                    title: "Spectacular resolution for audio production",
                    comment:
                      "I produce ambient electronic audio and tested these against monitors costing triple the price. The sub-bass representation is remarkably articulate and tight without any artificial booming. The ANC completely silences flight cabin noise. Worth every penny.",
                  },
                  {
                    name: "Elena Rostova",
                    time: "2 weeks ago",
                    title: "All-day ergonomics and instant pairing",
                    comment:
                      "As someone who wears glasses for 9 hours of desk work, most over-ear headphones start pinching the temples by midday. The memory foam cushions on the Studio One are so soft they virtually disappear. Multipoint switching between my laptop and smartphone is instantaneous.",
                  },
                ].map((rev, i) => (
                  <div
                    key={i}
                    className={`p-space-md rounded-xl flex flex-col gap-space-xs ${
                      isDarkMode ? "border" : "bg-surface-container-low"
                    }`}
                    style={{
                      backgroundColor: isDarkMode ? "#1E293B" : undefined,
                      borderColor: isDarkMode ? "#334155" : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-xs">
                        <span
                          className="font-label-md text-label-md font-bold"
                          style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                        >
                          {rev.name}
                        </span>
                        <span
                          className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full font-label-sm text-[10px] font-bold ${
                            isDarkMode
                              ? ""
                              : "bg-tertiary-container text-on-tertiary-container"
                          }`}
                          style={{
                            backgroundColor: isDarkMode
                              ? "rgba(34, 197, 94, 0.2)"
                              : undefined,
                            color: isDarkMode ? "#22C55E" : undefined,
                          }}
                        >
                          <span className="material-symbols-outlined text-[12px]">
                            verified
                          </span>
                          Verified Buyer
                        </span>
                      </div>
                      <span
                        className="font-body-sm text-[12px]"
                        style={{ color: isDarkMode ? "#94A3B8" : undefined }}
                      >
                        {rev.time}
                      </span>
                    </div>
                    <div
                      className="flex items-center"
                      style={{ color: isDarkMode ? "#FBBF24" : "#F59E0B" }}
                    >
                      {[...Array(5)].map((_, s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-[16px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <h5
                      className="font-headline-sm text-headline-sm font-semibold"
                      style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
                    >
                      {rev.title}
                    </h5>
                    <p
                      className="font-body-sm text-body-sm leading-relaxed"
                      style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
                    >
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 4: Care */}
        {activeTab === "care" && (
          <div className="tab-panel flex flex-col gap-space-md" id="tab-care">
            <div
              className={`p-space-lg rounded-xl flex flex-col gap-space-sm ${
                isDarkMode ? "border" : "bg-surface-container-low"
              }`}
              style={{
                backgroundColor: isDarkMode ? "#1E293B" : undefined,
                borderColor: isDarkMode ? "#334155" : undefined,
              }}
            >
              <h4
                className="font-headline-sm text-headline-sm font-bold"
                style={{ color: isDarkMode ? "#F8FAFC" : undefined }}
              >
                Headphone Longevity &amp; Maintenance
              </h4>
              <p
                className="font-body-sm text-body-sm leading-relaxed"
                style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
              >
                Store the Studio One headphones in the provided magnetic travel
                case when not in active use. Clean the memory foam protein ear pads
                with an alcohol-free microfiber cloth. Ear cushions are
                magnetically detachable and fully replaceable to maintain hygiene
                over years of studio use.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
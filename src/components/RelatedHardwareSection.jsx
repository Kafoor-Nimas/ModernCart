import { useApp } from "../context/AppContext";

export default function RelatedHardwareSection() {
  const { isDarkMode } = useApp();

  const hardware = [
    {
      title: "Linear Headphone Cradle",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGLAWAxopTplknoMxT5TYlWHAPIzTjRR2otB9IW3bYgOvsFSDyBtiCJAaZlXm0EPwWCTaqmxesHr4dj-6gfCWd7ReTjZnqa_VZJ7NalJXF5Q4u2s4EuARIXu6uT5KhmRulk-S4_mzzuQg8eszYp9ysGf6cWF0d8CMPyzCOLHF0tzcfwqtFxSU3dYNioE5wNlPSVUOHhtUnWl5O2BE6n7PwDL5wrsrL-IBZZGwlISpqm7QW7dj2jf0H",
      rating: "4.9",
      reviews: "118",
      price: "$59.00",
    },
    {
      title: "Pulse 32-bit DAC Dongle",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1FlRcE_Nzv9gm_xybrynsxrvNReEUuXir4QSuvveUEc8Du0-WdVGEROQ5gcjSQ4b4maqfcN7GU5Ij_OPzTi3O8cP9JkUc-ILCPZMXVvzeVZ0609K3n2bvQU6P15iA6LbnKUg9P9ZqNQF_6d4MswqSZWEdxDnzsPCmHM7-Cquu2U5KFurpXHdz81-u5eMl9RLo79bQ65RPQxtPgctDC-J_2m8ZFBEh4eS9sCO5QGj0wwMl9V5FzRtn",
      rating: "4.7",
      reviews: "84",
      price: "$89.00",
    },
    {
      title: "BreezeFlow Gel Ear Cushions",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiDirPe5qGdfXAGPb8BwQx1a6Q2LO5SrxuJeUwT1oJLXemdyhcC2JfEVAWbl6xxvfnbA7p8-BS2Gb9DpQJmtn9AN3O-V3Wt8R4l2EHC5__6vBuw6AtxV0Mzb25rdCYSM6Z8g9mn6ZM8VRJ5nMpfQSmWL088atN4QVmUkkoDaGIQWlUBmyCxTv_WA5EVk28tmqqLypwi4yLrOz2udemILUJMRV-iDvYLMOobOlvjhx9BE3H5te0fiNI",
      rating: "4.6",
      reviews: "62",
      price: "$34.00",
    },
    {
      title: "Oxygen-Free Silver Aux Cable",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiQpqu6pR8LIllMCq3q_HcgbTJyjaPHofrZOYi8xmBA_W5XGty-iHpstr6FOn5rzVEzJI_iW-GAie-EzqKxyOcbF5-9kS1J_0xOaMLrNAUXy-Usq7QtQMjzR1Vf_gMArgo2mVXes1yt0WkIKPBCv0jS0XOCLwChzin7UJ7WUc4-p6TAencrlqicVPl5SEM7hsEZjq6rVxMu27uIyXDgGHFUeCug8d3peeGH5cpyC8AUVAGztQ-CNMw",
      rating: "4.9",
      reviews: "93",
      price: "$29.00",
    },
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto p-10 py-space-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-xs mb-space-xl">
        <div>
          <span
            className={`font-label-sm text-label-sm font-bold uppercase tracking-widest ${
              isDarkMode ? "text-blue-400" : "text-primary"
            }`}
          >
            Complete The Acoustic Setup
          </span>
          <h2
            className={`font-headline-lg text-headline-lg font-bold tracking-tight ${
              isDarkMode ? "text-slate-50" : "text-on-surface"
            }`}
          >
            Complementary Hardware
          </h2>
        </div>
        <a
          className={`font-label-md text-label-md flex items-center gap-1 transition-colors ${
            isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-primary hover:text-primary-container"
          }`}
          href="#"
        >
          <span>Browse audio catalog</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {hardware.map((item, idx) => (
          <div
            key={idx}
            className={`group rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col ${
              isDarkMode
                ? "bg-[#1E293B] border border-[#334155]"
                : "bg-surface-container-lowest"
            }`}
          >
            <div
              className={`relative aspect-square rounded-lg overflow-hidden mb-space-sm ${
                isDarkMode ? "bg-[#111827] border border-[#334155]" : "bg-surface-container-low"
              }`}
            >
              <img
                alt={item.title}
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                type="button"
                aria-label="Add to wishlist"
                className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-sm transition-colors ${
                  isDarkMode
                    ? "bg-[#1E293B]/80 border border-[#334155] text-slate-300 hover:text-red-400"
                    : "bg-surface-container-lowest/80 text-outline hover:text-error"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  favorite
                </span>
              </button>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div>
                <span
                  className={`font-body-sm text-[11px] uppercase font-bold ${
                    isDarkMode ? "text-slate-400" : "text-outline"
                  }`}
                >
                  AURASOUND
                </span>
                <h4
                  className={`font-headline-sm text-[16px] leading-snug font-bold mt-0.5 line-clamp-1 ${
                    isDarkMode ? "text-slate-50" : "text-on-surface"
                  }`}
                >
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-[#F59E0B] text-[12px] my-1">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className={`font-label-sm font-bold ${
                      isDarkMode ? "text-slate-50" : "text-on-surface"
                    }`}
                  >
                    {item.rating}
                  </span>
                  <span className={isDarkMode ? "text-slate-400" : "text-outline"}>
                    ({item.reviews})
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-space-xs mt-space-xs">
                <span
                  className={`font-price-card text-price-card font-bold ${
                    isDarkMode ? "text-slate-50" : "text-on-surface"
                  }`}
                >
                  {item.price}
                </span>
                <button
                  type="button"
                  title="Quick Add"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "bg-[#111827] border border-[#334155] text-blue-400 hover:bg-blue-600 hover:text-white"
                      : "bg-surface-container-low hover:bg-primary hover:text-on-primary text-on-surface"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
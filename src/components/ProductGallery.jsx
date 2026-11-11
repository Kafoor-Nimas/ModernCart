import { useApp } from "../context/AppContext";

export default function ProductGallery({ mainViewIndex, setMainView, images, viewAlts }) {
  const { isDarkMode } = useApp();

  return (
    <div className="lg:col-span-7 flex flex-col gap-space-md">
      {/* Main Image Container */}
      <div
        className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm group select-none ${
          isDarkMode ? "border" : "bg-surface-container-low"
        }`}
        style={{
          backgroundColor: isDarkMode ? "#111827" : undefined,
          borderColor: isDarkMode ? "#334155" : undefined,
        }}
      >
        <img
          id="main-product-image"
          alt="Studio One ANC Headphones View"
          data-alt={viewAlts[mainViewIndex]}
          src={images[mainViewIndex]}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Badge */}
        <div
          className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 ${
            isDarkMode ? "border" : "bg-surface-container-lowest/90 text-on-surface"
          }`}
          style={{
            backgroundColor: isDarkMode ? "rgba(30, 41, 59, 0.9)" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
            color: isDarkMode ? "#60A5FA" : undefined,
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#3B82F6" }}
          ></span>
          <span className="font-label-sm text-label-sm tracking-wide uppercase font-bold">
            Flagship Series
          </span>
        </div>

        {/* Zoom Button */}
        <button
          type="button"
          aria-label="Zoom view"
          className={`absolute top-4 right-4 p-2 rounded-xl backdrop-blur-md transition-all shadow-sm ${
            isDarkMode
              ? "border"
              : "bg-surface-container-lowest/80 text-on-surface hover:text-primary hover:bg-surface-container-lowest"
          }`}
          style={{
            backgroundColor: isDarkMode ? "rgba(30, 41, 59, 0.9)" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
            color: isDarkMode ? "#CBD5E1" : undefined,
          }}
        >
          <span className="material-symbols-outlined text-[20px]">zoom_in</span>
        </button>

        {/* Hover Hint */}
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full backdrop-blur-sm font-label-sm text-label-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1 ${
            isDarkMode ? "border" : "bg-inverse-surface/75 text-inverse-on-surface"
          }`}
          style={{
            backgroundColor: isDarkMode ? "rgba(15, 23, 42, 0.85)" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
            color: isDarkMode ? "#CBD5E1" : undefined,
          }}
        >
          <span className="material-symbols-outlined text-[14px]">touch_app</span>
          <span>Hover to inspect precision craft</span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-space-sm" id="thumb-strip">
        {images.map((imgSrc, idx) => {
          const isActive = mainViewIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setMainView(idx)}
              className={`thumb-btn relative aspect-square rounded-lg overflow-hidden shadow-sm transition-all p-0.5 ${
                isActive
                  ? isDarkMode
                    ? "border-2"
                    : "bg-surface-container-highest"
                  : isDarkMode
                  ? "border"
                  : "bg-surface-container-low hover:bg-surface-container-high"
              }`}
              style={{
                backgroundColor: isDarkMode ? "#1E293B" : undefined,
                borderColor: isDarkMode
                  ? isActive
                    ? "#3B82F6"
                    : "#334155"
                  : undefined,
              }}
            >
              <img
                alt={`Thumbnail View ${idx + 1}`}
                src={imgSrc}
                className="w-full h-full object-cover rounded-md"
              />
              <span
                className={`active-badge absolute inset-0 rounded-md pointer-events-none ${
                  isActive ? "" : "hidden"
                }`}
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(59, 130, 246, 0.15)"
                    : undefined,
                }}
              ></span>
            </button>
          );
        })}
      </div>

      {/* Feature Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
        <div
          className={`flex items-center gap-space-xs p-space-sm rounded-xl shadow-sm ${
            isDarkMode ? "border" : "bg-surface-container-lowest"
          }`}
          style={{
            backgroundColor: isDarkMode ? "#1E293B" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
          }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isDarkMode ? "#111827" : "#b3dff5",
              color: isDarkMode ? "#60A5FA" :  "#60A5FA" ,
            }}
          >
            <span className="material-symbols-outlined text-[20px]">
              published_with_changes
            </span>
          </div>
          <div className="min-w-0">
            <p
              className="font-label-sm text-label-sm font-bold"
              style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
            >
              30-Day Risk-Free
            </p>
            <p
              className="font-body-sm text-[11px] truncate"
              style={{ color: isDarkMode ? "#94A3B8" : undefined }}
            >
              Easy returns, prepaid label
            </p>
          </div>
        </div>

        <div
          className={`flex items-center gap-space-xs p-space-sm rounded-xl shadow-sm ${
            isDarkMode ? "border" : "bg-surface-container-lowest"
          }`}
          style={{
            backgroundColor: isDarkMode ? "#1E293B" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
          }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isDarkMode ? "#111827" : "#b3dff5",
              color: isDarkMode ? "#60A5FA" : "#60A5FA",
            }}
          >
            <span className="material-symbols-outlined text-[20px]">
              verified_user
            </span>
          </div>
          <div className="min-w-0">
            <p
              className="font-label-sm text-label-sm font-bold"
              style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
            >
              2-Year Warranty
            </p>
            <p
              className="font-body-sm text-[11px] truncate"
              style={{ color: isDarkMode ? "#94A3B8" : undefined }}
            >
              Full hardware coverage
            </p>
          </div>
        </div>

        <div
          className={`flex items-center gap-space-xs p-space-sm rounded-xl shadow-sm ${
            isDarkMode ? "border" : "bg-surface-container-lowest"
          }`}
          style={{
            backgroundColor: isDarkMode ? "#1E293B" : undefined,
            borderColor: isDarkMode ? "#334155" : undefined,
          }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{
              backgroundColor: isDarkMode ? "#111827" : "#b3dff5",
              color: isDarkMode ? "#60A5FA" : "#60A5FA",
            }}
          >
            <span className="material-symbols-outlined text-[20px]">eco</span>
          </div>
          <div className="min-w-0">
            <p
              className="font-label-sm text-label-sm font-bold"
              style={{ color: isDarkMode ? "#CBD5E1" : undefined }}
            >
              Carbon Neutral
            </p>
            <p
              className="font-body-sm text-[11px] truncate"
              style={{ color: isDarkMode ? "#94A3B8" : undefined }}
            >
              100% offset transit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
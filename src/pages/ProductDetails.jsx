import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import ProductGallery from "../components/ProductGallery";
import ProductBuySection from "../components/ProductBuySection";
import ProductTabsSection from "../components/ProductTabsSection";
import RelatedHardwareSection from "../components/RelatedHardwareSection";
import { useApp } from "../context/AppContext";

export default function ProductDetails() {
  const { isDarkMode } = useApp();

  // State Management
  const [mainViewIndex, setMainViewIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Midnight Black");
  const [qty, setQty] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("specs");
  const [toastMessage, setToastMessage] = useState(null);

  // Images & Alts
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDm-oiTmHWBUxw0YX69nU3qBUOmm3JQ_h5Voq09XUws8pSpX65xCLxsJB28WpaVoTcUy6KqKo3MQVB1joyWq3XGRNCuNTJXzdIfFhGDFHAE-N6HaIVXUeP5hPyxg0SufNnczTqiuMVMl5pL4Vnc494fij0M3q9fyShvfTHufoswafyGgXNbwNespPYZvEhDQIFskIepb9fzrO75Alq8I2AJr1hnUhgApCWo6t_EzLH-ioILzn7aZPfZ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDcdCx8ZpgT0oiPLFUdTFSJzmsQ2xlx4zPMV5Ge--J_uQ3_qHP_wu42msf0slV3l8spTJ3zZoNP5fvtCINixEMCXU3Ewo-VzfiuAzrt83hjqO-bdf0TOk8BRmgOOYBslaepoZDH2iAQBBWvBqXPoS4_azk7E8PD5pJrGvJitxB3ZlUzZncADHBaXQi5ut3vLqlcNuHtp6NkXb9_l0lJ413I6-duykS-LQTOHr5ytrqYS74O7WOsuF4p",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDSk9XLazgWLMl7hFCy2t1j2r1sErcHFL2eDaOoCtTIyU25InfXQyEGMty1VS75d1cVZn5Zgc_V3CGsZIQjNA7wXCnCiytflzUeycwrOH7s2TX5CbjhC3d2paxH9j4VupEtnNx4-m5rlBCioFnonDYk3nxgC2Eo5vbiZR4Zk_zgHT1PSIdZRgFcSNNMt31k_O8tS4GGQUxpqbSUXvIKM5NnZPSlKRPKf8PTYuCl-qH1pgY1rrROOcLS",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAGmegfloZvVNCw_tWatEvEfA_h80wn8IrxuJwZdP95xB9B8NXKxB7yJm6H0MOUW7kgLFEHieIM23wREwY8-C77GT_l6DVcMAUFqOS4hRxrOKWZZz6xX32UZYfvsutUOlgcXHDIxs7kaV9eNtK3x8I4MNpY_p0k7jA5A9mfBUHZBPgf1z9nXk7ni36kEwfrpK3J0fEjDP5Ucf4K918eFzPFFQwayEmcnyd0qVpIEk6B4_fWF8Hzns5j",
  ];

  const viewAlts = [
    "A pair of ultra-premium matte black studio over-ear headphones with brushed aluminum accents resting on an acoustic slate plinth.",
    "Crisp side profile view of Studio One headphones revealing the circular aerospace aluminum outer ear-cup plate.",
    "Studio One wireless headphones neatly folded into their structured ballistic nylon carrying case.",
    "Macro close-up shot focused on the perforated interior speaker mesh.",
  ];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between font-body-md antialiased"
      style={{
        backgroundColor: isDarkMode ? "#0F172A" : undefined,
        color: isDarkMode ? "#F8FAFC" : undefined,
      }}
    >
      <Header />

      <main
        className="w-full pt-20 flex-1"
        style={{ backgroundColor: isDarkMode ? "#0F172A" : undefined }}
      >
        <div className="flex flex-col w-full">
          {/* Breadcrumb Navigation */}
          <ProductBreadcrumb />

          {/* Product Hero Section */}
          <section className="w-full max-w-[1600px] mx-auto px-6 py-space-md pb-space-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <ProductGallery
                mainViewIndex={mainViewIndex}
                setMainView={setMainViewIndex}
                images={images}
                viewAlts={viewAlts}
              />
              <ProductBuySection
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                qty={qty}
                setQty={setQty}
                isWishlisted={isWishlisted}
                onToggleWishlist={() => setIsWishlisted(!isWishlisted)}
                onAddToCart={() =>
                  showToast(`Added ${qty}x Studio One ANC to your bag`)
                }
                onBuyNow={() =>
                  showToast("Proceeding to Express 1-Click Checkout...")
                }
              />
            </div>
          </section>

          {/* Specifications & Reviews Tabs */}
          <ProductTabsSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Related Accessories Section */}
          <RelatedHardwareSection />
        </div>
      </main>

      <Footer />

      {/* Dynamic Toast Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
          <div className="flex items-center gap-3 px-4 py-3 bg-inverse-surface text-inverse-on-surface rounded-xl shadow-xl pointer-events-auto transform transition-all duration-300">
            <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">
              check_circle
            </span>
            <span className="font-label-md text-label-md">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
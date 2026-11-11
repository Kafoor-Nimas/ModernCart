import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import ProductGallery from "../components/ProductGallery";
import ProductBuySection from "../components/ProductBuySection";
import ProductTabsSection from "../components/ProductTabsSection";
import RelatedHardwareSection from "../components/RelatedHardwareSection";
import { useApp } from "../context/AppContext";
import img1 from "../assets/img1.jfif";
import img2 from "../assets/img2.jfif";
import img3 from "../assets/img3.jfif";
import img4 from "../assets/img4.jfif";


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
    img1,img2,img3,img4
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
import { useState } from "react";
import Header from "../components/Header";
import TopHighlightBar from "../components/TopHighlightBar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import BestSellersSection from "../components/BestSellersSection";
import ProductCard from "../components/ProductCard";
import PromoBanner from "../components/PromoBanner";
import ValuePropsSection from "../components/ValuePropsSection";
import Footer from "../components/Footer";
// import Toast from "../components/Toast";
import { BEST_SELLERS, FEATURED_PRODUCTS } from "../data/data";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFeatured = FEATURED_PRODUCTS.filter((prod) =>
    activeCategory === "All" ? true : prod.category === activeCategory,
  );

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation */}
      <Header />

      <main className="w-full pt-20 flex-1">
        <TopHighlightBar />
        <HeroSection />
        <CategoriesSection onSelectCategory={(cat) => setActiveCategory(cat)} />
        <BestSellersSection bestSellers={BEST_SELLERS} />

        {/* Handpicked Featured Section */}
        <section
          className="w-full px-6 py-16 max-w-[1600px] mx-auto"
          id="featured"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-1">
                Handpicked Selections
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Featured Products
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Exceptional craft, tested durability, and transparent pricing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["All", "Tech", "Lifestyle", "Apparel"].map((cat) => (
                <button
                  key={cat}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFeatured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <PromoBanner />
        <ValuePropsSection />
        <Newsletter />
      </main>

      <Footer />
      {/* <Toast /> */}
    </div>
  );
}

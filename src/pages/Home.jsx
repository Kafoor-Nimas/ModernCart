import { useState } from "react";
import Header from "../components/Header";
import TopHighlightBar from "../components/TopHighlightBar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import BestSellersSection from "../components/BestSellersSection";
import PromoBanner from "../components/PromoBanner";
import ValuePropsSection from "../components/ValuePropsSection";
import Footer from "../components/Footer";
// import Toast from "../components/Toast";
import Newsletter from "../components/Newsletter";
import { BEST_SELLERS, FEATURED_PRODUCTS } from "../data/data";
import FeaturedSection from "../components/FeaturedSection";

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
        <FeaturedSection activeCategory={activeCategory} filteredFeatured={filteredFeatured}  setActiveCategory={setActiveCategory}/>

        <PromoBanner />
        <ValuePropsSection />
        <Newsletter />
      </main>

      <Footer />
      {/* <Toast /> */}
    </div>
  );
}

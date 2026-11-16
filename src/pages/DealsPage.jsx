import { useState, useEffect, useMemo } from "react";
import { useApp } from "../context/useApp";
import { DEALS_PRODUCTS, DEAL_CATEGORY_PILLS } from "../data/dealsData";

import DealsHero from "../components/deals/DealsHero";
import DiscountHighlights from "../components/deals/DiscountHighlights";
import DealsFilterBar from "../components/deals/DealsFilterBar";
import DealsGrid from "../components/deals/DealsGrid";
import BiggestSavingsCarousel from "../components/deals/BiggestSavingsCarousel";
import DealsNewsletter from "../components/deals/DealsNewsletter";

export default function DealsPage() {
  const { isDarkMode } = useApp();
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("discount");
  const [activeQuickFilters, setActiveQuickFilters] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggleQuickFilter = (filterId) => {
    setActiveQuickFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setActiveQuickFilters([]);
    setSortBy("discount");
  };

  const categoryCounts = useMemo(() => {
    const counts = { all: DEALS_PRODUCTS.length };
    DEAL_CATEGORY_PILLS.forEach((pill) => {
      if (pill.id !== "all") {
        counts[pill.id] = DEALS_PRODUCTS.filter(
          (item) => item.category === pill.id
        ).length;
      }
    });
    return counts;
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = DEALS_PRODUCTS.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (activeQuickFilters.includes("min20") && item.discountPercent < 20) {
        return false;
      }
      if (activeQuickFilters.includes("under150") && item.price >= 150) {
        return false;
      }
      if (activeQuickFilters.includes("inStock") && !item.inStock) {
        return false;
      }
      return true;
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "discount":
          return b.discountPercent - a.discountPercent;
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [activeCategory, activeQuickFilters, sortBy]);

  return (
    <div
      className={`flex flex-col w-full min-h-screen transition-colors pt-20 relative overflow-hidden ${
        isDarkMode
          ? "bg-[#0b1326] text-[#dae2fd]"
          : "bg-surface text-on-surface"
      }`}
    >
      {/* Top Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4d8eff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#39475d]/30 rounded-full blur-3xl pointer-events-none" />

      <DealsHero isDarkMode={isDarkMode} />

      <DiscountHighlights
        isDarkMode={isDarkMode}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      <DealsFilterBar
        isDarkMode={isDarkMode}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        activeQuickFilters={activeQuickFilters}
        onToggleQuickFilter={handleToggleQuickFilter}
        categoryCounts={categoryCounts}
        filteredCount={filteredAndSortedProducts.length}
        totalCount={DEALS_PRODUCTS.length}
      />

      <DealsGrid
        isDarkMode={isDarkMode}
        products={filteredAndSortedProducts}
        onResetFilters={handleResetFilters}
      />

      <BiggestSavingsCarousel isDarkMode={isDarkMode} />

      <DealsNewsletter isDarkMode={isDarkMode} />
    </div>
  );
}
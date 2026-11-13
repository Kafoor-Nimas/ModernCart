import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { ALL_CATEGORIES } from "../data/categoriesData";

import CategoryHero from "../components/categories/CategoryHero";
import CategoryFilterBar from "../components/categories/CategoryFilterBar";
import FeaturedCategories from "../components/categories/FeaturedCategories";
import AllCategoriesGrid from "../components/categories/AllCategoriesGrid";
import PopularProductsGrid from "../components/categories/PopularProductsGrid";
import ValuePropsSection from "../components/categories/ValuePropsSection";
import PromoBanner from "../components/categories/PromoBanner";

export default function CategoriesPage() {
  const { isDarkMode } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCategories = ALL_CATEGORIES.filter((cat) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      q === "" ||
      cat.name.toLowerCase().includes(q) ||
      cat.tags.some((t) => t.includes(q));
    const matchesFilter =
      activeFilter === "all" || cat.tags.includes(activeFilter);
    return matchesQuery && matchesFilter;
  });

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveFilter("all");
  };

  return (
    <div
      className={`flex flex-col w-full min-h-screen transition-colors ${
        isDarkMode
          ? "bg-[#0b1326] text-[#dae2fd]"
          : "bg-surface text-on-surface"
      }`}
    >
      <CategoryHero isDarkMode={isDarkMode} />

      <CategoryFilterBar
        isDarkMode={isDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <FeaturedCategories isDarkMode={isDarkMode} />

      <AllCategoriesGrid
        isDarkMode={isDarkMode}
        categories={filteredCategories}
        totalCount={ALL_CATEGORIES.length}
        onResetFilters={handleResetFilters}
      />

      <PopularProductsGrid isDarkMode={isDarkMode} />

      <ValuePropsSection isDarkMode={isDarkMode} />

      <PromoBanner isDarkMode={isDarkMode} />
    </div>
  );
}
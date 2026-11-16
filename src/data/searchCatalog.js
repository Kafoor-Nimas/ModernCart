import { INITIAL_CART_ITEMS, RECOMMENDED_ADDONS } from "./cardData";
import { DEALS_PRODUCTS } from "./dealsData";

// Normalize items from your existing data files into a single searchable catalog
const rawItems = [
  ...DEALS_PRODUCTS.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    brand: item.brand || "ModernCart",
    category: item.category || "Electronics",
    price: item.price,
    image: item.image,
    route: `/product/${item.id}`,
  })),
  ...INITIAL_CART_ITEMS.map((item) => ({
    id: item.id,
    title: item.name,
    brand: item.brand,
    category: "Audio & Accessories",
    price: item.price,
    image: item.image,
    route: `/product/${item.id}`,
  })),
  ...RECOMMENDED_ADDONS.map((item) => ({
    id: item.id,
    title: item.name,
    brand: item.brand,
    category: "Accessories",
    price: item.price,
    image: item.image,
    route: `/product/${item.id}`,
  })),
];

// Deduplicate by title
export const SEARCH_CATALOG = Array.from(
  new Map(rawItems.map((item) => [item.title.toLowerCase(), item])).values()
);
import { Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Page Imports
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          {/* Storefront Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<CategoriesPage />} />

          {/* Admin Routes */}
          {/* <Route path="/admin/products" element={<ManageProducts />} />
          <Route path="/admin/orders" element={<ManageOrders />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
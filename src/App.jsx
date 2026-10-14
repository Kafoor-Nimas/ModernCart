import { Routes, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";

export default function App() {
  return (
    <Routes>
      {/* Storefront Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />

      {/* Admin Routes */}
      {/* <Route path="/admin/products" element={<ManageProducts />} />
      <Route path="/admin/orders" element={<ManageOrders />} /> */}
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <Routes>
      {/* Storefront Routes */}
      <Route path="/" element={<Home />} />

      {/* Admin Routes */}
      {/* <Route path="/admin/products" element={<ManageProducts />} />
      <Route path="/admin/orders" element={<ManageOrders />} /> */}
    </Routes>
  );
}

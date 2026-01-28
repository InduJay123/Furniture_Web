import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./user/pages/Home";
import AuthPage from "./user/pages/AuthPage";
import Shop from "./user/pages/Shop";
import Checkout from "./user/components/shop/Checkout";
import OrderHistory from "./user/components/shop/OrderHistory";
import AdminLoginPage from "./admin/pages/AdminLogin";
import AdminGuard from "./admin/routes/AdminGuard";
import AdminLayout from "./admin/layouts/AdminLayout";
import DashboardPage from "./admin/pages/DashboardPage";
import ProductsPage from "./admin/pages/ProductsPage";
import AddProductPage from "./admin/pages/AddProductPage";  
import './App.css';

const App = () => {
  return (
       <Routes>
      {/*user*/}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<OrderHistory />} />

      {/*admin*/}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route element={<AdminGuard />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/new" element={<AddProductPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
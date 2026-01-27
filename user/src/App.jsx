import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import Checkout from "./components/shop/Checkout";
import AuthPage from "./pages/AuthPage";
import OrderHistory from "./components/shop/OrderHistory";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>
  )
}

export default App

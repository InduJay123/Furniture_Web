import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home"
import ProductsPage from "./components/shop/products"

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

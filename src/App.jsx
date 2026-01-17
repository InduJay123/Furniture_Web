import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home"
import Shop from "./pages/shop";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import CartPanel from "./CartPanel";
import { useCart } from "./CartContext";  
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShopNavbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const {
    cartItems,
    incrementQty,
    decrementQty,
    removeItem,
    subtotal,
    setCartFromServer, 
  } = useCart();

  // If you fetch cart from backend, load it INTO context here:
  useEffect(() => {
    const load = async () => {
      // const data = await fetchCartFromAPI();
      // setCartFromServer(data);
    };
    load();
  }, [setCartFromServer]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow z-40">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">HAUS</h1>

          <div className="flex items-center gap-6 text-gray-700 text-xl">
            <ShoppingBag 
              className="cursor-pointer hover:text-green-600"
              onClick={() => navigate("/orders")} />
            <ShoppingCart
              className="cursor-pointer hover:text-green-600"
              onClick={() => setCartOpen(true)}
            />
            <FaUser className="cursor-pointer hover:text-green-600" />
          </div>
        </div>
      </nav>

      {cartOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setCartOpen(false)} />
      )}

      <CartPanel
        cartOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
        cartItems={cartItems}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        removeItem={removeItem}
        subtotal={subtotal}
      />
    </>
  );
};

export default ShopNavbar;
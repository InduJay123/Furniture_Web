import { useState } from "react";
import { FaShoppingCart, FaUser, FaHeart, FaBox } from "react-icons/fa";
import CartPanel from "../shop/Cart"

const ShopNavbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">HAUS</h1>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 text-gray-700 text-xl">
          <FaHeart className="cursor-pointer hover:text-green-600" />
          <FaBox className="cursor-pointer hover:text-green-600" />
          <FaShoppingCart className="cursor-pointer hover:text-green-600" onClick={() => setCartOpen(!cartOpen)} />
          <FaUser className="cursor-pointer hover:text-green-600" />
        </div>
      </div>

      {/* Cart Panel */}
      <CartPanel
        cartOpen={cartOpen}
        cartItems={cartItems}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        removeItem={removeItem}
        subtotal={subtotal}
        closeCart={() => setCartOpen(false)}
      />
    </nav>
  );
};

export default ShopNavbar;
import { FaShoppingCart, FaUser, FaHeart, FaBox } from "react-icons/fa";
import CartPanel from "./CartPanel";
import axiosPrivate from "../../api/axiosPrivate";
import PropTypes from "prop-types";

const ShopNavbar = ({ cartOpen, setCartOpen, cartItems, setCartItems, incrementQty, decrementQty, removeItem }) => {

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCartClick = async () => {
    try {
      if (!cartOpen) {
        // Fetch latest cart from backend only when opening
        const res = await axiosPrivate.get("cart/view/");
        const { items } = res.data;

        setCartItems(items.map(item => ({
          id: item.product_id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          category: item.category || "",
          image: item.image || "",
        })));
      }
      setCartOpen(!cartOpen);
    } catch (error) {
      console.error("Failed to load cart", error.response?.data || error.message);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">HAUS</h1>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 text-gray-700 text-xl">
          <FaHeart className="cursor-pointer hover:text-green-600" />
          <FaBox className="cursor-pointer hover:text-green-600" />
          <FaShoppingCart
            className="cursor-pointer hover:text-green-600"
            onClick={handleCartClick} // <-- fetch cart on click
          />
          <FaUser className="cursor-pointer hover:text-green-600" />
        </div>
      </div>

      {/* Cart Panel */}
      {cartOpen && (
        <CartPanel
          cartOpen={cartOpen}
          cartItems={cartItems}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
          removeItem={removeItem}
          subtotal={subtotal}
          closeCart={() => setCartOpen(false)}
        />
      )}
    </nav>
  );
};

ShopNavbar.propTypes = {
  cartOpen: PropTypes.bool.isRequired,
  setCartOpen: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      category: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
  incrementQty: PropTypes.func.isRequired,
  decrementQty: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ShopNavbar;
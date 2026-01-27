import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CartPanel = ({ cartOpen, cartItems, incrementQty, decrementQty, removeItem, subtotal, closeCart }) => {
  const navigate = useNavigate();

  const goCheckout = () => {
    closeCart();
    navigate("/checkout"); // Checkout will read from context
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[420px] max-w-[90vw] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart ({cartItems.length})</h2>
        <button onClick={closeCart} className="text-xl">&times;</button>
      </div>

      <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-180px)]">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>

                <div className="flex items-center gap-6 mt-2 border rounded px-2 py-1 w-max">
                  <button onClick={() => decrementQty(item.id)}>-</button>
                  <span className="text-xs">{item.quantity}</span>
                  <button onClick={() => incrementQty(item.id)}>+</button>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button onClick={() => removeItem(item.id)} className="text-black text-sm">x</button>
                <p className="font-medium">Rs. {Number(item.price) * item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">Rs. {subtotal}</span>
        </div>

        <button
          onClick={goCheckout}
          disabled={cartItems.length === 0}
          className="w-full bg-gray-800 text-white py-2 mb-2 rounded hover:bg-gray-900 disabled:opacity-50"
        >
          Proceed to Checkout
        </button>

        <button onClick={closeCart} className="w-full border border-gray-800 py-2 rounded hover:bg-gray-100">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

CartPanel.propTypes = {
  cartOpen: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
  incrementQty: PropTypes.func.isRequired,
  decrementQty: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  subtotal: PropTypes.number.isRequired,
  closeCart: PropTypes.func.isRequired,
};

export default CartPanel;
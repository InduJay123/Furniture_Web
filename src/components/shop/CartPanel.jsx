import PropTypes from "prop-types";

const CartPanel = ({
  cartOpen,
  cartItems,
  incrementQty,
  decrementQty,
  removeItem,
  subtotal,
  closeCart,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart ({cartItems.length})</h2>
        <button onClick={closeCart} className="text-xl">
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-160px)]">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p>Rs. {item.price}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm"
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">Rs. {subtotal}</span>
        </div>
        <button className="w-full bg-gray-800 text-white py-2 mb-2 rounded hover:bg-gray-900">
          Proceed to Checkout
        </button>
        <button className="w-full border border-gray-800 py-2 rounded hover:bg-gray-100">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

CartPanel.propTypes = {
  cartOpen: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  incrementQty: PropTypes.func.isRequired,
  decrementQty: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  subtotal: PropTypes.number.isRequired,
  closeCart: PropTypes.func.isRequired,
};

export default CartPanel;
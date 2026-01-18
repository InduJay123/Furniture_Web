const Cart = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="ml-6 w-80 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold">Your Cart ({cartItems.length})</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="border-b py-2">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-500">{item.category}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: Rs. {item.price * item.quantity}</p>
        </div>
      ))}

      <div className="mt-4 border-t pt-2">
        <p className="font-bold">Subtotal: Rs. {subtotal}</p>
        <p className="text-sm text-gray-500">
          Shipping and taxes calculated at checkout
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Proceed to Checkout
        </button>
        <button className="flex-1 p-2 bg-gray-200 rounded hover:bg-gray-300">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { placeOrder } from "../../api/orders";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  const [form, setForm] = useState({
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
  });
  const [placing, setPlacing] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onPlaceOrder = async () => {
    setErrMsg("");
    if (cartItems.length === 0) {
      setErrMsg("Cart is empty.");
      return;
    }

    try {
      setPlacing(true);
      const order = await placeOrder(form); // backend will read cart & create order items
      clearCart();
      navigate(`/orders/${order.id}`); 
    } catch (e) {
      console.error(e);
      setErrMsg("Failed to place order. Please try again.");
    } finally {
      setPlacing(false);
    }
  };

  const shipping = cartItems.length > 0 ? 0 : 0; // set your logic
  const total = subtotal + shipping;

  return (
    <div>
      <div className="h-16 flex items-center gap-3 px-6 border-b bg-[#faf7f2]">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <h1 className="text-2xl font-serif">Checkout</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
          {/* LEFT */}
          <div className="lg:h-[calc(100vh-64px-80px)] overflow-y-auto pr-2">
            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Contact Information</h2>
              <label className="block mb-2">Email Address</label>
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full border px-3 py-1 rounded bg-transparent" 
                placeholder="your@email.com" />

              <label className="block mt-4 mb-2">Phone Number</label>
              <input 
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="w-full border px-3 py-1 rounded bg-transparent" 
                placeholder="+94 7X XXX XXXX" />
            </section>

            <hr className="my-8" />

            {/* Shipping Address */}
            <section className="mb-8">
              <h2 className="text-xl font-serif mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="first_name" value={form.first_name} onChange={onChange} 
                  className="border px-3 py-1 rounded bg-transparent" 
                  placeholder="First Name" />
                <input name="last_name" value={form.last_name} onChange={onChange} 
                  className="border px-3 py-1 rounded bg-transparent" 
                  placeholder="Last Name" />
              </div>

              <input name="address" value={form.address} onChange={onChange} 
                className="border px-3 py-1 rounded bg-transparent w-full mt-4" 
                placeholder="Street Address" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <input name="city" value={form.city} onChange={onChange} 
                  className="border px-3 py-1 rounded bg-transparent" 
                  placeholder="City" />
                <input name="state" value={form.state} onChange={onChange}
                  className="border px-3 py-1 rounded bg-transparent" 
                  placeholder="State" />
                <input 
                  name="zip_code" value={form.zip_code} onChange={onChange}
                  className="border px-3 py-1 rounded bg-transparent" 
                  placeholder="ZIP Code" />
              </div>
            </section>

            <hr className="my-8" />

            {/* Payment Method */}
            <section className="mb-20">
              <h2 className="text-xl font-serif mb-4">Payment Method</h2>

              <div className="border rounded px-4 py-3 mb-3 flex items-center gap-3">
                <input type="radio" name="pay" defaultChecked />
                <span>Credit / Debit Card</span>
              </div>
              <div className="border rounded px-4 py-3 mb-6 flex items-center gap-3">
                <input type="radio" name="pay" />
                <span>PayPal</span>
              </div>

              <label className="block mb-2">Name on Card</label>
              <input className="border px-3 py-1 rounded bg-transparent w-full" placeholder="Name on card" />

              <label className="block mt-4 mb-2">Card Number</label>
              <input className="border px-3 py-1 rounded bg-transparent w-full" placeholder="1234 5678 9012 3456" />

              <div className="grid grid-cols-2 gap-4 mt-4">
                <input className="border px-3 py-1 rounded bg-transparent" placeholder="MM/YY" />
                <input className="border px-3 py-1 rounded bg-transparent" placeholder="CVV" />
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-6 h-fit bg-[#f3f0ea] rounded-xl p-6">
            <h2 className="text-xl font-serif mb-6">Order Summary</h2>

            {cartItems.length === 0 ? (
              <div className="text-gray-600">
                <p>Your cart is empty.</p>
                <button
                  className="mt-4 w-full border border-gray-800 py-2 rounded hover:bg-gray-100"
                  onClick={() => navigate("/shop")}
                >
                  Back to Shop
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 bg-white rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">
                      Rs. {Number(item.price) * item.quantity}
                    </p>
                  </div>
                ))}

                <hr className="my-6" />

                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Rs. {shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="text-gray-500">Calculated at next step</span>
                  </div>
                </div>

                <hr className="my-6" />

                <div className="flex justify-between text-xl font-semibold mb-6">
                  <span>Total</span>
                  <span>Rs. {total}</span>
                </div>

                {errMsg && <p className="text-red-600 mb-3">{errMsg}</p>}

                <button 
                  onClick={onPlaceOrder}
                  disabled={placing || cartItems.length === 0}
                  className="w-full bg-[#2b2622] text-white py-3 rounded hover:opacity-90"
                >
                  Place Order
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Secure checkout - Your data is protected
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
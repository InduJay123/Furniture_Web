import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="h-16 flex items-center gap-3 px-6 border-b bg-[#faf7f2]">
                <button onClick={() => navigate(-1)} className="text-2xl">←</button>
                <h1 className="text-2xl font-serif">Checkout</h1>
            </div>
            {/* Body */}
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
                
                {/* LEFT (Scrollable) */}
                <div className="lg:h-[calc(100vh-64px-80px)] overflow-y-auto pr-2">
                    {/* Contact Information */}
                    <section className="mb-8">
                    <h2 className="text-xl font-serif mb-4">Contact Information</h2>
                    <label className="block mb-2">Email Address</label>
                    <input className="w-full border p-3 rounded bg-transparent" placeholder="your@email.com" />

                    <label className="block mt-4 mb-2">Phone Number</label>
                    <input className="w-full border p-3 rounded bg-transparent" placeholder="+1 (555) 000-0000" />
                    </section>

                    <hr className="my-8" />

                    {/* Shipping Address */}
                    <section className="mb-8">
                    <h2 className="text-xl font-serif mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input className="border p-3 rounded bg-transparent" placeholder="First Name" />
                        <input className="border p-3 rounded bg-transparent" placeholder="Last Name" />
                    </div>

                    <input className="border p-3 rounded bg-transparent w-full mt-4" placeholder="Street Address" />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        <input className="border p-3 rounded bg-transparent" placeholder="City" />
                        <input className="border p-3 rounded bg-transparent" placeholder="State" />
                        <input className="border p-3 rounded bg-transparent" placeholder="ZIP Code" />
                    </div>
                    </section>

                    <hr className="my-8" />

                    {/* Payment Method */}
                    <section className="mb-20">
                    <h2 className="text-xl font-serif mb-4">Payment Method</h2>

                    <div className="border rounded p-4 mb-3 flex items-center gap-3">
                        <input type="radio" name="pay" defaultChecked />
                        <span>Credit / Debit Card</span>
                    </div>
                    <div className="border rounded p-4 mb-6 flex items-center gap-3">
                        <input type="radio" name="pay" />
                        <span>PayPal</span>
                    </div>

                    <label className="block mb-2">Name on Card</label>
                    <input className="border p-3 rounded bg-transparent w-full" placeholder="Name on card" />

                    <label className="block mt-4 mb-2">Card Number</label>
                    <input className="border p-3 rounded bg-transparent w-full" placeholder="1234 5678 9012 3456" />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <input className="border p-3 rounded bg-transparent" placeholder="MM/YY" />
                        <input className="border p-3 rounded bg-transparent" placeholder="CVV" />
                    </div>
                    </section>
                </div>

                {/* RIGHT (Sticky / fixed-like) */}
                <div className="lg:sticky lg:top-6 h-fit bg-[#f3f0ea] rounded-xl p-6">
                    <h2 className="text-xl font-serif mb-6">Order Summary</h2>

                    {/* Example Item */}
                    <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded" />
                    <div className="flex-1">
                        <p className="font-medium">Nordic Dining Table</p>
                        <p className="text-sm text-gray-500">Qty: 1</p>
                    </div>
                    <p className="font-medium">$1,899</p>
                    </div>

                    <hr className="my-6" />

                    <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>$1,899</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>$15.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span className="text-gray-500">Calculated at next step</span>
                    </div>
                    </div>

                    <hr className="my-6" />

                    <div className="flex justify-between text-xl font-semibold mb-6">
                    <span>Total</span>
                    <span>$1,914</span>
                    </div>

                    <button className="w-full bg-[#2b2622] text-white py-3 rounded hover:opacity-90">
                    Place Order
                    </button>

                    <p className="text-sm text-gray-500 mt-4 text-center">
                    Secure checkout - Your data is protected
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}   

export default Checkout;
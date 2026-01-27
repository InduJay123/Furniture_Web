import { useEffect, useState } from "react";
import { fetchOrders } from "../../api/orders";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (e) {
        console.error("Failed to load orders", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p className="p-6">Loading orders...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
        <div className="h-16 flex items-center gap-3 px-6 border-b bg-[#faf7f2]">
            <button onClick={() => navigate("/shop")} className="text-2xl">←</button>
            <h1 className="text-2xl font-serif">Order History</h1>
        </div>

      {orders.length === 0 ? (
        <div className="bg-white border rounded p-6 text-gray-700">
          You have no orders yet.
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border rounded p-5">
              <div className="flex flex-wrap justify-between gap-3 mb-4">
                <div>
                  <p className="font-semibold">Order No:{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm">
                    Status: <span className="font-medium">{order.status}</span>
                  </p>
                  <p className="font-semibold">Rs. {order.total}</p>
                </div>
              </div>

              <div className="divide-y">
                {order.items.map((item) => (
                  <div key={item.id} className="py-4 flex items-center gap-4">
                    <img
                      src={item.image || "https://via.placeholder.com/64"}
                      alt={item.name}
                      className="w-14 h-14 rounded object-cover bg-gray-100"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity} • Rs. {item.price}
                      </p>
                    </div>
                    <p className="font-medium">
                      Rs. {Number(item.price) * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end text-sm text-gray-700">
                <div className="w-full max-w-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs. {order.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Rs. {order.shipping}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>Rs. {order.total}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
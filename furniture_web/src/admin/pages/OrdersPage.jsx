import { useEffect, useMemo, useState } from "react";
import { Search,Bell,ChevronDown,Download,SlidersHorizontal,Package,
  Clock,Truck, CheckCircle,Eye,MoreHorizontal,} from "lucide-react";
import { fetchAdminOrders, fetchOrders, updateOrderStatus } from "../../api/orders";
import OrderDetailsModal from "../components/OrderDetailsModel";

export default function OrdersPage() {
  const [query, setQuery] = useState("");
  const [orders, setOrders] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const load = async () => {
        try{
            setErr("");
            setLoading(true);
            const data = await fetchAdminOrders();
            console.log("Fetched orders data:", data);
            const mapped = (data || []).map((o) => {
                const fullName =
                `${o.first_name || ""} ${o.last_name || ""}`.trim() ||
                (o.user?.username ? o.user.username : "Customer");

            const itemsArr = o.items || o.order_items || o.orderItems || [];

            const productsText = (itemsArr || [])
                .map((it) => it.name)
                .filter(Boolean)
                .join(", ");

            const payment =
                o.payment_status === "PAID" ? "Paid" :
                o.payment_status === "REFUNDED" ? "Refunded" :
                "PAID";

              const deliveryStatus = o.status || "PENDING";


            return {
                id: `#ORD-${String(o.id).padStart(4, "0")}`,
                rawId: o.id,
                customer: fullName,
                email: o.email || "",
                items:itemsArr,
                itemCount: itemsArr.length,
                products: productsText || "-",
                amount: Number(o.total || 0),
                date: formatDate(o.created_at),
                payment,
                status:deliveryStatus
            };
        });

        setOrders(mapped);
      } catch (e) {
        console.error(e);
        setErr("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return orders;
    return orders.filter(
      (o) =>
        o.id.toLowerCase().includes(q) ||
        o.customer.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q) ||
        o.products.toLowerCase().includes(q) ||
        o.status.toLowerCase().includes(q) ||
        o.payment.toLowerCase().includes(q)
    );
  }, [orders, query]);

  const counts = useMemo(() => {
    const all = orders.length;
    const pending = orders.filter((o) => o.status === "PENDING").length;
    const packing = orders.filter((o) => o.status === "PACKING").length;
    const delivered = orders.filter((o) => o.status === "DELIVERED").length;
    return { all, pending, packing, delivered };
  }, [orders]);

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* Page body */}
      <div className="px-8 py-6">
        {/* Title row */}
        <div className="flex items-start justify-between gap-4">
            <p className="text-sm text-gray-500">Track and manage customer orders</p>

          <button className="inline-flex items-center gap-2 px-4 h-10 rounded-md border bg-white hover:bg-black/5">
            <Download size={16} />
            <span className="text-sm">Export Orders</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <StatCard icon={Package} value={counts.all} label="All Orders" />
          <StatCard icon={Clock} value={counts.pending} label="Pending" />
          <StatCard icon={Truck} value={counts.packing} label="Packing" />
          <StatCard icon={CheckCircle} value={counts.delivered} label="Delivered" />
        </div>

        {/* Table Card */}
        <div className="mt-6 bg-white border rounded-lg">
          {/* table tools row */}
          <div className="flex items-center justify-between gap-3 p-4 border-b">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-3 rounded-md border bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                placeholder="Search orders..."
              />
            </div>

            <button className="inline-flex items-center gap-2 px-4 h-10 rounded-md border bg-white hover:bg-black/5">
              <SlidersHorizontal size={16} />
              <span className="text-sm">Filters</span>
            </button>
          </div>

          {/* table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-gray-500">
                <tr className="border-b">
                  <th className="py-4 px-6 font-medium">Order ID</th>
                  <th className="py-4 px-6 font-medium">Customer</th>
                  <th className="py-4 px-6 font-medium">Products</th>
                  <th className="py-4 px-6 font-medium">Amount</th>
                  <th className="py-4 px-6 font-medium">Date</th>
                  <th className="py-4 px-6 font-medium">Payment</th>
                  <th className="py-4 px-6 font-medium">Status</th>
                  <th className="py-4 px-6 font-medium text-right"> </th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((o) => (
                  <tr key={o.id} className="border-b last:border-b-0 hover:bg-black/[0.02]">
                    <td className="py-4 px-6 font-medium text-gray-900">{o.id}</td>

                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{o.customer}</div>
                      <div className="text-xs text-gray-500">{o.email}</div>
                    </td>

                    <td className="py-4 px-6 text-gray-700">{o.itemCount}</td>

                    <td className="py-4 px-6 font-medium text-gray-900">
                      {formatMoney(o.amount)}
                    </td>

                    <td className="py-4 px-6 text-gray-700">{o.date}</td>

                    <td className="py-4 px-6 ">
                      <PaymentBadge value={o.payment} />
                    </td>

                    <td className="py-4 px-6">
                      <select
                        value={o.status}
                        onChange={async (e) => {
                          const newStatus = e.target.value;
                          // optimistic UI
                          setOrders(prev => prev.map(x => x.rawId === o.rawId ? { ...x, status: newStatus } : x));

                          try {
                            await updateOrderStatus(o.rawId, newStatus);
                          } catch (err) {
                            console.error(err);
                            // rollback on fail
                            setOrders(prev => prev.map(x => x.rawId === o.rawId ? { ...x, status: o.status } : x));
                            alert("Failed to update status");
                          }
                        }}
                        className="border rounded-md px-2 py-1 bg-white text-sm"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="PACKING">Packing</option>
                        <option value="DELIVERED">Delivered</option>
                      </select>
                    </td>


                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-3 text-gray-600">
                          <button
                            className="p-2 rounded-md hover:bg-black/5"
                            title="View"
                            onClick={() => setSelected(o)}
                          >
                            <Eye size={16} />
                          </button>

                        <button className="p-2 rounded-md hover:bg-black/5" title="More">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={8} className="py-10 text-center text-gray-500">
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* bottom spacing like image */}
        <div className="h-10" />
      </div>
      {selected && (
        <OrderDetailsModal
          order={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

/* ------------------ Small UI pieces ------------------ */

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-white border rounded-lg p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">
        <Icon size={18} className="text-gray-600" />
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-900 leading-5">{value}</div>
        <div className="text-xs text-gray-500 mt-1">{label}</div>
      </div>
    </div>
  );
}

function StatusBadge({ value }) {
  const map = {
    Delivered: "bg-green-100 text-green-700",
    Shipped: "bg-blue-100 text-blue-700",
    Processing: "bg-orange-100 text-orange-700",
    Pending: "bg-gray-100 text-gray-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[value] || "bg-gray-100 text-gray-700"}`}>
      {value}
    </span>
  );
}

function PaymentBadge({ value }) {
  const map = {
    Paid: "text-green-700",
    Pending: "text-orange-700",
    Refunded: "text-red-600",
  };
  return <span className={`font-medium ${map[value] || "text-gray-700"}`}>{value}</span>;
}

function formatMoney(n) {
  return n.toLocaleString("LKR", { style: "currency", currency: "LKR" });
}

function formatDate(dt) {
  if (!dt) return "-";
  const d = new Date(dt);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

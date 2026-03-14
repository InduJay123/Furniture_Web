import {UserPlus,Search,SlidersHorizontal,Mail,Phone,MapPin,MoreHorizontal,} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { fetchAdminCustomers } from "../../api/customers";

const StatCard = ({ value, label }) => (
  <div className="rounded-md border border-zinc-200 bg-white px-6 py-4 shadow-sm">
    <div className="text-2xl font-semibold text-zinc-900">{value}</div>
    <div className="mt-1 text-sm text-zinc-500">{label}</div>
  </div>
);

const StatusBadge = ({ status }) => {
  const map = {
    Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    VIP: "bg-amber-50 text-amber-700 border-amber-200",
    Inactive: "bg-zinc-100 text-zinc-600 border-zinc-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
        map[status] ?? "bg-zinc-100 text-zinc-600 border-zinc-200"
      }`}
    >
      {status}
    </span>
  );
};

export default function CustomersPage() {
  const [query, setQuery] = useState("");
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setErr("");
        setLoading(true);
        const data = await fetchAdminCustomers();

        const mapped = (data || []).map((u) => {
          const fullName = `${u.first_name || ""} ${u.last_name || ""}`.trim() || "Customer";
          const initials = fullName
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((x) => x[0].toUpperCase())
            .join("");

            return {
            id: u.id,
            initials: initials || "CU",
            name: fullName,
            location: u.location || "-",        // only if you have in DB
            email: u.email || "-",
            phone: u.phone || "-",              // only if you have in DB
            orders: u.orders_count || 0,
            totalSpent: Number(u.total_spent || 0),
            lastOrder: u.last_order ? new Date(u.last_order).toLocaleDateString() : "-",
            status: (u.orders_count || 0) >= 10 ? "VIP" : "Active", // example logic
          };
        });

        setCustomers(mapped);
      } catch (e) {
        console.error(e);
        setErr("Failed to load customers");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter((c) =>
      (c.name || "").toLowerCase().includes(q) ||
      (c.email || "").toLowerCase().includes(q)
    );
  }, [customers, query]);

  const totalCustomers = customers.length;
  const active = customers.filter((c) => c.status === "Active").length;
  const vip = customers.filter((c) => c.status === "VIP").length;
  const totalRevenue = customers.reduce((sum, c) => sum + (c.totalSpent || 0), 0);

  if (loading) return <div className="p-6">Loading...</div>;
  if (err) return <div className="p-6 text-red-600">{err}</div>;

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={totalCustomers} label="Total Customers" />
          <StatCard value={active} label="Active" />
          <StatCard value={vip} label="VIP Customers" />
          <StatCard value={totalRevenue} label="Total Revenue" />
        </div>

        {/* Table Card */}
        <div className="mt-6 rounded-md border border-zinc-200 bg-white shadow-sm">
          {/* Search + Filters */}
          <div className="flex flex-col gap-3 border-b border-zinc-200 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                placeholder="Search customers..."
                className="w-full rounded-md border border-zinc-200 bg-white py-2 pl-10 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-300"
              />
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Orders</th>
                  <th className="px-6 py-4">Total Spent</th>
                  <th className="px-6 py-4">Last Order</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((c) => (
                  <tr
                    key={c.id}
                    className="border-t border-zinc-200 text-sm text-zinc-800"
                  >
                    {/* Customer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700">
                          {c.initials}
                        </div>
                        <div>
                          <div className="font-medium text-zinc-900">
                            {c.name}
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                            <MapPin className="h-3.5 w-3.5" />
                            {c.location}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="space-y-2 text-xs text-zinc-600">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-zinc-400" />
                          <span className="text-zinc-800">{c.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-zinc-400" />
                          <span>{c.phone}</span>
                        </div>
                      </div>
                    </td>

                    {/* Orders */}
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 bg-white">
                          <span className="text-xs text-zinc-600">🧾</span>
                        </div>
                        <span className="font-medium text-zinc-900">
                          {c.orders}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-medium text-zinc-900">
                      {c.totalSpent}
                    </td>

                    <td className="px-6 py-4 text-zinc-600">{c.lastOrder}</td>

                    <td className="px-6 py-4">
                      <StatusBadge status={c.status} />
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button className="rounded-md p-2 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}
import StatCard from "./StatCard";
import { DollarSign, ShoppingCart, Users, Eye } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="Rs48,294" change={12.5} icon={<DollarSign />} />
        <StatCard title="Total Orders" value="1,248" change={8.2} icon={<ShoppingCart />} />
        <StatCard title="Total Customers" value="3,842" change={15.3} icon={<Users />} />
        <StatCard title="Page Views" value="24.5K" change={-2.4} icon={<Eye />} />
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-cream p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Recent Orders</h3>
          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr>
                <th align="left">Order ID</th>
                <th align="left">Customer</th>
                <th align="left">Product</th>
                <th align="left">Amount</th>
                <th align="left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td>#ORD-7352</td>
                <td>Sarah Johnson</td>
                <td>Cream Sofa</td>
                <td>$1,299</td>
                <td className="text-green-600">Delivered</td>
              </tr>
              <tr className="border-t">
                <td>#ORD-7351</td>
                <td>Michael Chen</td>
                <td>Dining Table</td>
                <td>$2,499</td>
                <td className="text-blue-600">Shipped</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Top Products */}
        <div className="bg-cream p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Top Products</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Cream Fabric Sofa</span>
              <span className="text-green-600">+23%</span>
            </li>
            <li className="flex justify-between">
              <span>Oak Dining Table</span>
              <span className="text-green-600">+18%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
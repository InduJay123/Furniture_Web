import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Heart,
  BarChart2,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { name: "Products", icon: Package, path: "/admin/products" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { name: "Customers", icon: Users, path: "/admin/customers" },
  { name: "Favorites", icon: Heart, path: "/admin/favorites" },
  { name: "Analytics", icon: BarChart2, path: "/admin/analytics" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#faf9f6] border-r h-screen flex flex-col">
      <div className="flex items-center justify-between px-6 py-5">
        <h1 className="text-3xl font-serif tracking-wide">HAUS</h1>
        <button className="p-2 rounded-md hover:bg-black/5">
          <X className="w-5 h-5 text-black/70" />
        </button>
      </div>

      <nav className="px-5 mt-2 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-5 py-4 rounded-lg text-left transition
                ${isActive ? "bg-[#2b2622] text-white" : "text-black/60 hover:bg-black/5"}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-black/50"}`} />
                  <span className={`text-[16px] ${isActive ? "font-semibold" : "font-medium"}`}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-6 border-t" />

      <div className="mt-auto px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#d9eadf] flex items-center justify-center font-semibold text-red-800/70">
            AD
          </div>
          <div>
            <p className="font-semibold text-[16px]">Admin User</p>
            <p className="text-sm text-black/50">admin@haus.com</p>
          </div>
        </div>

        <button className="mt-5 flex items-center gap-3 text-black/60 hover:text-black transition">
          <LogOut className="w-5 h-5 text-black/50" />
          <span className="text-[15px] font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
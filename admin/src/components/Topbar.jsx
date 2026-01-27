import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-cream border-b">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            className="pl-9 pr-4 py-2 rounded-lg bg-soft outline-none"
            placeholder="Search..."
          />
        </div>

        <Bell className="w-5 h-5" />
        <div className="w-9 h-9 rounded-full bg-green-200 flex items-center justify-center">
          AD
        </div>
      </div>
    </div>
  );
}
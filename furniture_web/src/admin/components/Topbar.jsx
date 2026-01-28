import { Bell, Search, ChevronDown } from "lucide-react";

export default function Topbar({ title }) {
  return (
    <header className="h-16 border-b bg-[#fbfaf7] flex items-center justify-between px-6">
      <h1 className="text-2xl font-serif text-[#2b2622]">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
          <Search className="w-4 h-4 text-black/50" />
          <input
            className="outline-none bg-transparent text-sm w-64"
            placeholder="Search..."
          />
        </div>

        <button className="relative p-2 rounded-lg hover:bg-black/5">
          <Bell className="w-5 h-5 text-black/60" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-500" />
        </button>

        <button className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-black/5">
          <div className="w-9 h-9 rounded-full bg-[#d9eadf] flex items-center justify-center font-semibold text-black/70">
            AD
          </div>
          <ChevronDown className="w-4 h-4 text-black/50" />
        </button>
      </div>
    </header>
  );
}
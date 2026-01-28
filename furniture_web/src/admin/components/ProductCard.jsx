import { MoreHorizontal } from "lucide-react";

const badgeClass = (label) => {
  if (label === "In Stock") return "bg-green-100 text-green-700";
  if (label === "Low Stock") return "bg-orange-100 text-orange-700";
  return "bg-red-100 text-red-700";
};

export default function ProductCard({ p }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="h-48 bg-[#eeeae6] flex items-center justify-center">
        <div className="w-14 h-14 rounded-lg border border-black/10 bg-white/40" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-serif text-lg text-[#2b2622]">{p.name}</p>
            <p className="text-sm text-black/50">{p.category}</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-black/5">
            <MoreHorizontal className="w-5 h-5 text-black/50" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-semibold text-[#2b2622]">
            ${p.price.toLocaleString()}
          </p>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${badgeClass(
              p.stockLabel
            )}`}
          >
            {p.stockLabel}
          </span>
        </div>

        <div className="mt-4 border-t pt-4 text-sm text-black/40">Manage</div>
      </div>
    </div>
  );
}
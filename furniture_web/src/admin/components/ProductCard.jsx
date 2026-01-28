import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../api/products";

const badgeClass = (label) => {
  if (label === "In Stock") return "bg-green-100 text-green-700";
  if (label === "Low Stock") return "bg-orange-100 text-orange-700";
  return "bg-red-100 text-red-700";
};

export default function ProductCard({ p }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!confirm("Delete this product?")) return;
    await deleteProduct(p.id);
    window.location.reload(); // simple refresh (or better: remove from state)
  };

  return (

    <div className="bg-white border rounded-none overflow-hidden">
      <div className="h-48 bg-[#eeeae6] flex items-center justify-center">
        <img
          src={p.image_url} />
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
            Rs.{p.price.toLocaleString()}
          </p>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${badgeClass(
              p.stockLabel
            )}`}
          >
            {p.stockLabel}
          </span>
        </div>

        <div className="flex gap-4 mt-4 border-t pt-4 text-sm text-black/40">
          <button 
            onClick={() => navigate(`/admin/products/${p.id}/edit`)}
            className="flex-1 border border-gray-400 text-black/80 hover:border-none hover:text-white rounded-none py-2 hover:bg-green-700/80">
             <div className="flex items-center justify-center hover:border-none font-medium gap-4">
              <Edit size={16}/> Edit
             </div>
          </button>
          <button 
            onClick={handleDelete} 
            className="p-2 hover:bg-red-100 hover:border-none">
             <Trash2 className="text-red-700/80"/>
          </button>
        </div>
      </div>
    </div>
  );
}
import { useMemo, useState } from "react";
import { Filter, Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const products = useMemo(
    () => [
      { id: 1, name: "Cream Fabric Sofa", category: "Sofas", price: 1299, stockLabel: "In Stock" },
      { id: 2, name: "Oak Dining Table", category: "Tables", price: 2499, stockLabel: "In Stock" },
      { id: 3, name: "Green Velvet Armchair", category: "Chairs", price: 899, stockLabel: "Low Stock" },
    ],
    []
  );

  const filtered = products.filter((p) =>
    (p.name + " " + p.category).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="px-6 py-6">
      <h2 className="text-3xl font-serif text-[#2b2622]">Products</h2>
      <p className="text-black/50 mt-1">Manage your product inventory</p>

      <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 border rounded-xl px-3 py-2 bg-white w-full md:w-[520px]">
          <Search className="w-4 h-4 text-black/50" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="outline-none bg-transparent text-sm w-full"
            placeholder="Search products..."
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="border bg-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-black/5">
            <Filter className="w-4 h-4" />
            Filters
          </button>

          <button
            onClick={() => navigate("/admin/products/new")}
            className="bg-[#2b2622] text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:opacity-95"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
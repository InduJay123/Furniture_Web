import { ArrowLeft, Save } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    category: "",
    sku: "",
    description: "",
    price: "0.00",
    stockQty: "0",
    outOfStock: false,
    weight: "0.00",
    dimensions: "",
    imagePreview: "",
  });

  const categories = useMemo(() => ["Sofas", "Tables", "Chairs", "Beds", "Lighting"], []);

  const onChange = (k) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [k]: value }));
  };

  const onPickImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((p) => ({ ...p, imagePreview: url }));
  };

  const save = () => {
    console.log("SAVE PRODUCT", form);
    navigate("/admin/products");
  };

  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-black/60 hover:text-black">
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="border bg-white px-4 py-2 rounded-xl hover:bg-black/5">
            Cancel
          </button>
          <button onClick={save} className="bg-[#2b2622] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:opacity-95">
            <Save className="w-4 h-4" />
            Save Product
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-serif text-[#2b2622]">Add New Product</h2>
        <p className="text-black/50 mt-1">Create a new product listing</p>
      </div>

      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <section className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl text-[#2b2622]">Basic Information</h3>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="text-sm text-black/60">Product Name *</label>
                <input
                  value={form.name}
                  onChange={onChange("name")}
                  className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="text-sm text-black/60">Category *</label>
                <select
                  value={form.category}
                  onChange={onChange("category")}
                  className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none"
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-black/60">SKU</label>
                <input
                  value={form.sku}
                  onChange={onChange("sku")}
                  className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none"
                  placeholder="e.g. SOFA-001"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-black/60">Description</label>
                <textarea
                  value={form.description}
                  onChange={onChange("description")}
                  className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none min-h-[110px]"
                  placeholder="Describe your product..."
                />
              </div>
            </div>
          </section>

          <section className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl text-[#2b2622]">Product Images</h3>

            <div className="mt-5 border-2 border-dashed rounded-xl p-8 flex items-center justify-center bg-[#fbfaf7]">
              <label className="cursor-pointer text-center">
                <div className="text-black/50">Upload</div>
                <input type="file" accept="image/*" className="hidden" onChange={onPickImage} />
                <p className="mt-2 text-xs text-black/40">
                  Upload up to 4 images. Recommended size: 800x800px
                </p>
              </label>
            </div>
          </section>

          <section className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl text-[#2b2622]">Specifications</h3>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-black/60">Weight (kg)</label>
                <input
                  value={form.weight}
                  onChange={onChange("weight")}
                  className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="text-sm text-black/60">Dimensions (L × W × H)</label>
                <input
                  value={form.dimensions}
                  onChange={onChange("dimensions")}
                  className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none"
                  placeholder="e.g. 200 x 90 x 85 cm"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl text-[#2b2622]">Pricing</h3>
            <div className="mt-5">
              <label className="text-sm text-black/60">Price ($) *</label>
              <input
                value={form.price}
                onChange={onChange("price")}
                className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none"
                placeholder="0.00"
              />
            </div>
          </section>

          <section className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl text-[#2b2622]">Inventory</h3>
            <div className="mt-5">
              <label className="text-sm text-black/60">Stock Quantity</label>
              <input
                value={form.stockQty}
                onChange={onChange("stockQty")}
                className="mt-2 w-full border rounded-lg px-3 py-2 bg-white outline-none"
                placeholder="0"
              />
            </div>

            <label className="mt-4 flex items-center gap-2 text-sm text-black/60">
              <input type="checkbox" checked={form.outOfStock} onChange={onChange("outOfStock")} />
              Out of Stock
            </label>
          </section>

          <section className="bg-white border rounded-xl p-6">
            <h3 className="font-serif text-xl text-[#2b2622]">Preview</h3>

            <div className="mt-5 border rounded-xl overflow-hidden bg-[#fbfaf7]">
              <div className="h-40 bg-[#eeeae6] flex items-center justify-center">
                {form.imagePreview ? (
                  <img src={form.imagePreview} alt="preview" className="h-full w-full object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-lg border border-black/10 bg-white/40" />
                )}
              </div>

              <div className="p-4">
                <p className="font-serif text-lg text-[#2b2622]">{form.name || "Product Name"}</p>
                <p className="text-sm text-black/50">{form.category || "Category"}</p>
                <p className="mt-3 font-semibold text-[#2b2622]">
                  ${Number(form.price || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
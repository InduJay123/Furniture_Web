import { ArrowLeft, Trash2, Save, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../api/products";

export default function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [form, setForm] = useState({ 
    name: "", 
    category: "", 
    sku: "",
    description: "",
    price: "",
    stock_qty: "",
    out_of_stock: false,
    weight: "",
    dimensions: "",  
  });


  useEffect(() => {
    const load = async () => {
      try {
          setLoading(true);
          const p = await getProductById(id);

          setForm({
            name: p.name ?? "",
            category: p.category ?? "",
            sku: p.sku ?? "",
            description: p.description ?? "",
            price: String(p.price ?? ""),
            stock_qty: String(p.stock_qty ?? "0"),
            out_of_stock: Boolean(p.out_of_stock),
            weight: p.weight != null ? String(p.weight) : "",
            dimensions: p.dimensions ?? "",
          });

          setImagePreview(p.image_url || "");
        } catch (e) {
          console.error(e);
          setErrMsg("Failed to load product");
        } finally {
          setLoading(false);
        }
    };
    load();
  }, [id]);

  const onChange = (k) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [k]: val }));
  };

  const onPickImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  const save = async () => {
    setErrMsg("");

    if (!form.name.trim()) return setErrMsg("Product name is required");
    if (!form.category) return setErrMsg("Category is required");
    if (!form.price || Number(form.price) <= 0) return setErrMsg("Valid price is required");

    try {
      setSaving(true);

      await updateProduct(id, {
        ...form,
        imageFile, // optional
      });

      navigate("/admin/products");
    } catch (e) {
      console.error(e);
      const msg =
        e?.response?.data?.error ||
        (e?.response?.data ? JSON.stringify(e.response.data) : null) ||
        "Failed to update product";
      setErrMsg(msg);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#faf9f6] p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft className="cursor-pointer" />
          <div>
            <h1 className="text-xl font-semibold">Edit Product</h1>
            <p className="text-sm text-gray-500">Update product details</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            //onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-300 rounded-md hover:bg-red-50">
            <Trash2 size={16} /> Delete
          </button>
          <button className="px-4 py-2 border rounded-md">Cancel</button>
          <button 
            onClick={save}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md"
            type="button"
            disabled={saving}  
          >
            <Save size={16} /> {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">

          {/* Basic Information */}
          <Card title="Basic Information">
            <Input 
              label="Product Name *" 
              placeholder="Enter product name" 
              value={form.name}
              onChange={onChange("name")}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Category *" 
                value={form.category}
                onChange={onChange("category")}
              />
              <Input label="SKU" placeholder="e.g., SOFA-001"
                value={form.sku}
                onChange={onChange("sku")}
              />
            </div>
            <Textarea label="Description" placeholder="Describe your product..." 
              value={form.description}
              onChange={onChange("description")}
            />
          </Card>

          {/* Product Images */}
          <Card title="Product Images">
            <label className="w-40 h-40 border-2 border-dashed rounded-md flex flex-col items-center justify-center text-gray-400 cursor-pointer">
              <Upload />
              <span className="text-sm mt-1">Upload</span>
              <input type="file" accept="image/*" className="hidden" onChange={onPickImage} />
            </label>
            <p className="text-xs text-gray-500 mt-2">
              Upload up to 4 images. Recommended size: 800×800px
            </p>
          </Card>

          {/* Specifications */}
          <Card title="Specifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Weight (kg)" placeholder="0.00" 
                value={form.weight}
                onChange={onChange("weight")}
              />
              <Input label="Dimensions (L x W x H)" placeholder="e.g., 200 x 90 x 85 cm" 
                value={form.dimensions}
                onChange={onChange("dimensions")}
              />
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* Pricing */}
          <Card title="Pricing">
            <Input label="Price ($) *" placeholder="0.00" 
              value={form.price}
              onChange={onChange("price")}
            />
          </Card>

          {/* Inventory */}
          <Card title="Inventory">
            <Input label="Stock Quantity" placeholder="0" 
              value={form.stock_qty}
              onChange={onChange("stock_qty")}
            />
            <div className="mt-3 bg-gray-100 text-gray-500 text-sm px-3 py-2 rounded">
              ✕ Out of Stock
            </div>
          </Card>

          {/* Preview */}
          <Card title="Preview">
            <div className="h-60 bg-gray-200 rounded flex items-center justify-center text-gray-400 overflow-hidden">
              {imagePreview ? (
                <img src={imagePreview} alt="preview" className="h-full w-full object-cover" />
              ) : (
                "Image Preview"
              )}
            </div>
            <div className="mt-3">
              <p className="font-medium">{form.name || "Product Name"}</p>
              <p className="text-sm text-gray-500">{form.category || "Category"}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg border p-5">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const Input = ({ label, placeholder, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
    />
  </div>
);

const Textarea = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={4}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
    />
  </div>
);

const Select = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select value={value} onChange={onChange} className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none">
      <option>Select category</option>
      <option>Sofas</option>
      <option>Tables</option>
      <option>Chairs</option>
      <option>Beds</option>
    </select>
  </div>
);
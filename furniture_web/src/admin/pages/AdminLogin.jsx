import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../api/adminAuth";
import { saveAdminAuth } from "../../api/adminAuth";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await adminLogin({
        email: formData.email,
        password: formData.password,
      });

      // backend sends is_admin: true
      if (!res.data.is_admin) {
        setError("This account is not an admin.");
        return;
      }

      saveAdminAuth(res.data);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.response?.data?.detail || "Admin login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfaf7] px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border rounded-2xl p-6">
        <h1 className="text-3xl font-serif text-[#2b2622]">Admin Login</h1>
        <p className="text-black/50 mt-1">Sign in to manage the store</p>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <div className="mt-5">
          <label className="text-sm text-black/60">Email</label>
          <input
            name="email"
            type="email"
            className="mt-1 w-full border rounded-xl px-3 py-2 outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4">
          <label className="text-sm text-black/60">Password</label>
          <input
            name="password"
            type="password"
            className="mt-1 w-full border rounded-xl px-3 py-2 outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          disabled={loading}
          className="mt-6 w-full bg-[#2b2622] text-white py-2 rounded-xl hover:opacity-95 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
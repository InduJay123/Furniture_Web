import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axiosPublic from "../../api/axiosPublic";

const FeatureProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosPublic
      .get("products/list/")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);


  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {products.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
);
};

export default FeatureProductList;
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axiosPublic from "../../api/axiosPublic";
import PropTypes from "prop-types";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosPublic
      .get("products/list/")
      .then((res) => {
        const formattedProducts = res.data.map((product) => ({
        ...product,
        price: Number(product.price), 
      }));

        setProducts(formattedProducts);
        setLoading(false);
        console.log(formattedProducts);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
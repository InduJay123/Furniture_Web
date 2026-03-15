import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import axiosPublic from "../../api/axiosPublic";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosPublic.get("products/list/").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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
import { useState } from "react";
import { Heart, ShoppingBag} from "lucide-react"; 
import axiosPrivate from "../../api/axiosPrivate";
import PropTypes from "prop-types";

const addToCart = async (product) => {
    try {
      await axiosPrivate.post("cart/add/", {
        product_id: product.id,
        quantity: 1,
      });
      alert("Product added to cart");
    } catch (error) {
      console.error(error);
      alert("Add to cart failed");
    }
  };


const ProductCard = ({ product }) => {
  const isImage = product.image_url.match(/\.(jpeg|jpg|gif|png)$/i);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow overflow-hidden relative pb-4 transition-transform transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-64 overflow-hidden ">
        {isImage ? (
          <img
            src={product.image_url}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
        ) : (
          <p className="text-red-500">No image available</p>
        )}

        {/* Buttons overlay */}
        {hovered && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-4 py-1">
            <button 
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 px-24 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition whitespace-nowrap">
              <ShoppingBag size={16} /> Add to Cart
            </button>
            <button className="flex items-center gap-2 p-2 bg-white text-black hover:bg-gray-200 transition">
              <Heart size={18} />
            </button>
          </div>
        )}
      </div>

      <p className="px-2 text-gray-500 mt-2">{product.category}</p>
      <h3 className="px-2 text-lg font-semibold">{product.name}</h3>
      <p className="px-2 mt-1 font-medium">Price: Rs. {product.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
const ProductCard = ({ product }) => {
  // Only show if URL is an image
  const isImage = product.image_url.match(/\.(jpeg|jpg|gif|png)$/i);

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      {isImage ? (
        <img
          src={product.image_url} 
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
      ) : (
        <p className="text-red-500">No image available</p>
      )}
      <p className="text-gray-500 mt-2">{product.category}</p>
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="mt-1 font-bold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;

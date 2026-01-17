const ProductCard = ({ product }) => {
  const isImage = product.image_url.match(/\.(jpeg|jpg|gif|png)$/i);

  return (
    <div className="bg-white py-8 rounded-lg shadow transition">
      {isImage ? (
        <img
          src={product.image_url} 
          alt={product.name}
          className="w-full h-68 object-cover rounded"
        />
      ) : (
        <p className="text-red-500">No image available</p>
      )}
      <p className="text-gray-500 mt-2">{product.category}</p>
      <h3 className=" text-lg">{product.name}</h3>
      <p className="mt-1">Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">  
        <img src={product.image} alt={product.name} />
        
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;
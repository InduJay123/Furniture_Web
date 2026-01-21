import ProductList from './ProductList'
import PropTypes from "prop-types";


const ProductsPage = ({ onAddToCart }) => {
    return (
        <div className='py-4 px-16'>
            <div className="min-h-screen py-12 px-24">
                <h6 className="text-sm text-gray-400 tracking-widest mb-4"> OUR COLLECTION </h6>            
                <h2 className="text-5xl font-serif font-medium text-black/80 mb-10">All Products</h2>
                <ProductList onAddToCart={onAddToCart}/>               
            </div>
        </div>
    )
}

ProductsPage.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductsPage
import ProductList from './ProductList'

const ProductsPage = () => {
    return (
        <div>
            <h4> CURATED SELECTION</h4>
            <h4> Featured Pieces</h4>
            <h4> OUR COLLECTION </h4>
            <h4> All Products</h4>
            <div className="min-h-screen py-20">
                <h2 className="text-4xl font-semibold text-center mb-10">Our Products</h2>
                <ProductList />
            </div>
        </div>
    )
}

export default ProductsPage
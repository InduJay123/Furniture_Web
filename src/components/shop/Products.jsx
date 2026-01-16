import ProductList from './ProductList'

const ProductsPage = () => {
    return (
        <div className='py-8 px-16'>
            <h4> CURATED SELECTION</h4>
            <h4> Featured Pieces</h4>
            <h4> OUR COLLECTION </h4>
            <h4> All Products</h4>
            <div className="min-h-screen py-20 px-24">
                <p className="text-lg text-gray-500 mb-6"> OUR COLLECTION </p>            
                <h2 className="text-4xl font-serif font-medium  mb-10">All Products</h2>
                <ProductList />
            </div>
        </div>
    )
}

export default ProductsPage
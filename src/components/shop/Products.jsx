import ProductList from './ProductList'

const ProductsPage = () => {
    return (
        <div className='py-8 px-16'>
            <h4> CURATED SELECTION</h4>
            <h4> Featured Pieces</h4>
            <h4> OUR COLLECTION </h4>
            <h4> All Products</h4>
            <div className="min-h-screen py-20 px-24">
                <h6 className="text-sm text-gray-400 tracking-widest mb-4"> OUR COLLECTION </h6>            
                <h2 className="text-5xl font-serif font-medium  mb-10">All Products</h2>
                <ProductList />
               
            </div>
        </div>
    )
}

export default ProductsPage
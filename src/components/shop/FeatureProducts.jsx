import ProductList from './ProductList'

const FeaturePage = () => {
    return (
        <div className='py-4 px-16'>
            <div className="min-h-screen py-12 px-24">
                <h6 className="text-sm text-gray-400 tracking-widest mb-4"> OUR COLLECTION </h6>            
                <h2 className="text-5xl font-serif font-medium  mb-10">All Products</h2>
                <ProductList />               
            </div>
        </div>
    )
}

export default FeaturePage;
import FeatureProductList from './FeatureProductList';

const FeaturePage = () => {
    return (
        <div className='py-8 px-40'>
                <h6 className="text-sm text-gray-400 tracking-widest mb-4"> CURATED SELECTION</h6>            
                <h2 className="text-5xl font-serif font-medium text-black/80  mb-10">Featured Pieces </h2>
                <FeatureProductList />               
        </div>
    )
}

export default FeaturePage;
import Footer from "../components/Footer";
import Explore from "../components/shop/Explore";
import FeaturePage from "../components/shop/FeatureProducts";
import Newsletter from "../components/shop/Newsletter";
import ProductsPage from "../components/shop/ProductsPage";

const Shop = () => {
    return (
        <div>
            <FeaturePage/>
            <Explore/>
            <ProductsPage/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Shop;
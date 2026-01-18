import Footer from "../components/Footer";
import Explore from "../components/shop/Explore";
import FeaturePage from "../components/shop/FeatureProducts";
import Newsletter from "../components/shop/Newsletter";
import ProductsPage from "../components/shop/ProductsPage";
import TopBanner from "../components/shop/TopBanner";

const Shop = () => {
    return (
        <div>
            <TopBanner/>
            <FeaturePage/>
            <Explore/>
            <ProductsPage/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Shop;
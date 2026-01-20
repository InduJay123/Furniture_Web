import Footer from "../components/Footer";
import Explore from "../components/shop/Explore";
import FeaturePage from "../components/shop/FeatureProducts";
import Newsletter from "../components/shop/Newsletter";
import ProductsPage from "../components/shop/ProductsPage";
import ShopNavbar from "../components/shop/ShopNavbar";
import TopBanner from "../components/shop/TopBanner";

const Shop = () => {
    return (
        <div>
            <ShopNavbar/>
            <div className="pt-16">
                <TopBanner />
                <FeaturePage />
                <Explore />
                <ProductsPage />
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}
export default Shop;
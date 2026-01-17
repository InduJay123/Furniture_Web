import Footer from "../components/Footer";
import Explore from "../components/shop/Explore";
import Newsletter from "../components/shop/Newsletter";
import ProductsPage from "../components/shop/products";

const Shop = () => {
    return (
        <div>
            <Explore/>
            <ProductsPage/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Shop;
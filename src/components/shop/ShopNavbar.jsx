import { FaShoppingCart, FaUser, FaHeart, FaBox } from "react-icons/fa";

const ShopNavbar = () => {
    return(
        <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50">
            <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">
                    HAUS
                </h1>

                {/* Right: Icons */}
                <div className="flex items-center gap-6 text-gray-700 text-xl">
                    <FaHeart className="cursor-pointer hover:text-green-600" />
                    <FaBox className="cursor-pointer hover:text-green-600" />
                    <FaShoppingCart className="cursor-pointer hover:text-green-600" />
                    <FaUser className="cursor-pointer hover:text-green-600" />
                </div>
            </div>
        </nav>
    )
}

export default ShopNavbar;
import { useState, useEffect } from "react";
import TopBanner from "../components/shop/TopBanner";
import Explore from "../components/shop/Explore";   
import ProductsPage from "../components/shop/ProductsPage";
import Newsletter from "../components/shop/Newsletter";
import Footer from "../components/Footer";
import ShopNavbar from "../components/shop/ShopNavbar";
import CartPanel from "../components/shop/CartPanel";
import { useCart } from "../components/shop/CartContext";
import axiosPrivate from "../../api/axiosPrivate";

const Shop = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, addToCart, incrementQty, decrementQty, removeItem, subtotal, setCartFromServer } = useCart();

  // Load cart items from API on page load
  const loadCart = async () => {
    try {
      const res = await axiosPrivate.get("cart/view/");
      const { items } = res.data;

      console.log("Cart items loaded:", items);

      const normalizedItems = items.map((item) => ({
        id: item.product_id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        category: item.category || "",
        image: item.image || "https://via.placeholder.com/64",
      }));
      
      setCartFromServer(normalizedItems);
    } catch (error) {
      console.error("Failed to load cart", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    if (cartOpen) {
      loadCart();
    }
  }, [cartOpen]);

  const handleAddToCart = async (product) => {
    try {
      await axiosPrivate.post("cart/add/", {
        product_id: product.id,
        quantity: 1,
      });

      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        category: product.category || "",
        image: product.image_url || "https://via.placeholder.com/64",
      });

      setCartOpen(true);
      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error("Add to cart failed", error.response?.data || error.message);
    }
  };

  const handleIncrementQty = async (id) => {
    incrementQty(id);
    try{
      await axiosPrivate.post("cart/update/", {product_id: id, action: "increment"});
    }catch(err){
       console.error("Failed to update cart", err);
    }  
  };

  const handleDecrementQty = async (id) => {
    decrementQty(id);
    try {
      await axiosPrivate.post("cart/update/", { product_id: id, action: "decrement" });
    } catch (err) {
      console.error("Failed to decrement cart item", err);
    }
  };

  const handleRemoveItem = async (id) => {
    removeItem(id);
    try {
      await axiosPrivate.post("cart/remove/", { product_id: id });
    } catch (err) {
      console.error("Failed to remove cart item", err);
    }
  };

  return (
    <div>
      <ShopNavbar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        incrementQty={handleIncrementQty}
        decrementQty={handleDecrementQty}
        removeItem={handleRemoveItem}
      />

      <div className="pt-16">
        <TopBanner />
        <FeaturePage />
        <Explore />

        <ProductsPage onAddToCart={handleAddToCart} />

        <Newsletter />
        <Footer />
      </div>

      {cartOpen && (
        <CartPanel
          cartOpen={cartOpen}
          cartItems={cartItems}
          incrementQty={handleIncrementQty}
          decrementQty={handleDecrementQty}
          removeItem={handleRemoveItem}
          subtotal={subtotal}
          closeCart={() => setCartOpen(false)}
        />
      )}
    </div>
  );
};

export default Shop;
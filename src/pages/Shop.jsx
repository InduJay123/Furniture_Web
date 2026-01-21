import { useState, useEffect } from "react";
import ShopNavbar from "../components/shop/ShopNavbar";
import TopBanner from "../components/shop/TopBanner";
import FeaturePage from "../components/shop/FeatureProducts";
import Explore from "../components/shop/Explore";
import ProductsPage from "../components/shop/ProductsPage";
import Newsletter from "../components/shop/Newsletter";
import Footer from "../components/Footer";
import CartPanel from "../components/shop/CartPanel";
import axiosPrivate from "../api/axiosPrivate";

const Shop = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from API on page load
  const loadCart = async () => {
    try {
      const res = await axiosPrivate.get("cart/view/");
      const { items } = res.data;

      console.log("Cart items loaded:", items);

      setCartItems(
        items.map((item) => ({
          id: item.product_id, // use product_id as id for UI
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          category: item.category || "",
          image: item.image || "https://via.placeholder.com/64", // fallback image
        }))
      );
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

      const productToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        category: product.category || "",
        image: product.image_url || "https://via.placeholder.com/64",
      };

      const existing = cartItems.find((item) => item.id === product.id);

      if (existing) {
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setCartItems((prev) => [...prev, productToAdd]);
      }

      setCartOpen(true);
      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error("Add to cart failed", error.response?.data || error.message);
    }
  };

  const incrementQty = async (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
      );
      try{
        await axiosPrivate.post("cart/update/", {product_id: id, acttion: increment});
      }catch(err){
         console.error("Failed to update cart", err);
      }  
  };

  const decrementQty = async (id) => {
    setCartItems(prev =>
      prev.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    );

    try {
      await axiosPrivate.post("cart/update/", { product_id: id, action: "decrement" });
    } catch (err) {
      console.error("Failed to decrement cart item", err);
    }
  };

  const removeItem = async (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));

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
        setCartItems={setCartItems}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        removeItem={removeItem}
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
          incrementQty={incrementQty}
          decrementQty={decrementQty}
          removeItem={removeItem}
          subtotal={subtotal}
          closeCart={() => setCartOpen(false)}
        />
      )}
    </div>
  );
};

export default Shop;
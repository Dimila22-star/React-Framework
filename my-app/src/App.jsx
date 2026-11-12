/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import BuyButton from "./components/BuyButton";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import AddProductForm from "./components/AddProductForm";

import { ProductContext } from "../context/ProductContext";

const categories = [
  "Framework Laptop",
  "Framework Desktop",
  "Mainboards",
  "Expansion Cards",
  "Memory & Storage",
  "Keyboards",
  "Parts",
  "Customization",
  "Tools",
  "Software",
  "Merch",
];

function App() {
  const { products, addProduct, updateProduct, deleteProduct } =
    useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const counts = {};

  products.forEach((product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
  });

  const visible = products.filter(
    (product) =>
      (activeCategory === "All" ||
        product.category === activeCategory) &&
      product.title.toLowerCase().includes(search.toLowerCase())
  );

  function addToCart(card) {
    setCart((previousCart) => {
      const found = previousCart.find((item) => item.id === card.id);

      if (found) {
        return previousCart.map((item) =>
          item.id === card.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...previousCart, { ...card, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  function handleAddProduct(newProduct) {
    addProduct(newProduct);
  }

  function handleUpdateProduct(updatedProduct) {
    updateProduct(updatedProduct);
  }

  function handleDeleteProduct(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmed) {
      deleteProduct(id);
      removeFromCart(id);
    }
  }

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="shop">
        <Sidebar
          categories={categories}
          counts={counts}
          total={products.length}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="main-content">
          <h1 className="shop-title">
            {activeCategory === "All" ? "All products" : activeCategory}
            <small> / {visible.length} items</small>
          </h1>

          <div className="search-bar-wrapper">
            <input
              type="text"
              className="content-search-input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search-btn"
                onClick={() => setSearch("")}
              >
                &times;
              </button>
            )}
          </div>

          <div className="cards">
            {visible.map((card) => (
              <FeatureCard
                key={card.id}
                product={card}
                title={card.title}
                text={card.text}
                image={card.image}
                price={card.price}
                available={card.available}
                onAdd={() => addToCart(card)}
                onUpdate={handleUpdateProduct}
                onDelete={() => handleDeleteProduct(card.id)}
              />
            ))}
          </div>

          <BuyButton />
        </div>

        <div className="right-panel">
          <AddProductForm
            onAddProduct={handleAddProduct}
            categories={categories}
          />

          <Cart items={cart} onRemove={removeFromCart} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
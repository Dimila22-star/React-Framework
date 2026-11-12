import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import BuyButton from "./components/BuyButton";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import AddProductForm from "./components/AddProductForm";

import laptop12IntelImg from "./assets/laptop-12-intel.webp";

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
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const safeCards = Array.isArray(cards) ? cards : [];

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data)
          ? data
          : Object.values(data).filter(Array.isArray).flat();
        setCards(list);
      })
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  useEffect(() => {
    document.title = "Framework Shop (" + safeCards.length + " products)";
  }, [safeCards.length]);

  const counts = {};
  safeCards.forEach((c) => {
    counts[c.category] = (counts[c.category] || 0) + 1;
  });

  const visible = safeCards.filter(
    (c) =>
      (activeCategory === "All" || c.category === activeCategory) &&
      (c.title || "").toLowerCase().includes(search.toLowerCase())
  );

  function addToCart(card) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === card.id);
      if (found) {
        return prev.map((i) =>
          i.id === card.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...card, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function handleAddProduct(newProduct) {
    setCards((prev) => [
      {
        ...newProduct,
        id: Date.now(),
        image: laptop12IntelImg,
      },
      ...(Array.isArray(prev) ? prev : []),
    ]);
  }

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="shop">
        <Sidebar
          categories={categories}
          counts={counts}
          total={safeCards.length}
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
              <button className="clear-search-btn" onClick={() => setSearch("")}>
                &times;
              </button>
            )}
          </div>

          <div className="cards">
            {visible.map((card) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                text={card.text}
                image={card.image}
                price={card.price}
                onAdd={() => addToCart(card)}
              />
            ))}
          </div>

          <BuyButton />
        </div>

        <div className="right-panel">
          <AddProductForm onAddProduct={handleAddProduct} categories={categories} />
          <Cart items={cart} onRemove={removeFromCart} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
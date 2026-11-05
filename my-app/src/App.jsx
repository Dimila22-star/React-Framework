import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import BuyButton from "./components/BuyButton";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import AddProductForm from "./components/AddProductForm";

import laptop12IntelImg from "./assets/laptop-12-intel.webp";
import laptop12DiyImg from "./assets/framework-laptop-12-diy.jpg";
import laptop13ProImg from "./assets/framework-laptop-13-pro.webp";
import amdRyzenImg from "./assets/amd-ryzen-al-3000.webp";
import laptop16Img from "./assets/framework-laptop-16.png";
import laptop16DiyImg from "./assets/framework-laptop-16-diy.jpg";
import laptop1213thGenImg from "./assets/framework-laptop-1213th-gen.png";
import laptop16DiyAmdImg from "./assets/framework-laptop-16-diy-amd-ryzen.jpg";
import refurbished13Img from "./assets/refurbished-framework-laptop-13.webp";
import laptop12MainboardImg from "./assets/framework-laptop-12-mainboard.jpg";
import laptop12Img from "./assets/framework-laptop-12.webp";
import ultraSeries3Img from "./assets/framework-ultra-series-3.webp";

const initialCards = [
  { id: 1, title: "Laptop 12 (Intel)", text: "Compact and colorful, built to be repaired.", image: laptop12IntelImg, price: 699, category: "Framework Laptop" },
  { id: 2, title: "Laptop 12 DIY Edition", text: "Assemble it yourself in minutes.", image: laptop12DiyImg, price: 549, category: "Framework Laptop" },
  { id: 3, title: "Laptop 13 Pro", text: "Premium build with a sharp display.", image: laptop13ProImg, price: 1399, category: "Framework Laptop" },
  { id: 4, title: "Laptop 13 Pro (AMD Ryzen AI 300)", text: "Powerful AMD processor.", image: amdRyzenImg, price: 2299, category: "Framework Laptop" },
  { id: 5, title: "Laptop 16", text: "Our biggest screen.", image: laptop16Img, price: 1839, category: "Framework Laptop" },
  { id: 6, title: "Laptop 16 DIY Edition", text: "Bring your own memory and storage.", image: laptop16DiyImg, price: 1249, category: "Framework Laptop" },
  { id: 7, title: "Laptop 12 (13th Gen)", text: "Ready to use out of the box.", image: laptop1213thGenImg, price: 699, category: "Framework Laptop" },
  { id: 8, title: "Laptop 16 DIY (AMD Ryzen)", text: "DIY with an AMD processor.", image: laptop16DiyAmdImg, price: 1299, category: "Framework Laptop" },
  { id: 9, title: "Refurbished Laptop 13", text: "Tested and ready at a lower price.", image: refurbished13Img, price: 729, category: "Framework Laptop" },
  { id: 10, title: "Laptop 12 Mainboard", text: "Upgrade the brain of your laptop.", image: laptop12MainboardImg, price: 399, category: "Mainboards" },
  { id: 11, title: "Framework Laptop 12", text: "Built to be repaired.", image: laptop12Img, price: 699, category: "Framework Laptop" },
  { id: 12, title: "Laptop 13 (Intel Core Ultra Series 3)", text: "Latest Intel processor.", image: ultraSeries3Img, price: 1599, category: "Framework Laptop" },
];

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
  const [cards, setCards] = useState(initialCards);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const counts = {};
  cards.forEach((c) => {
    counts[c.category] = (counts[c.category] || 0) + 1;
  });

  const visible = cards.filter(
    (c) =>
      (activeCategory === "All" || c.category === activeCategory) &&
      c.title.toLowerCase().includes(search.toLowerCase())
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
      { ...newProduct, id: Date.now(), image: laptop12IntelImg },
      ...prev,
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
          total={cards.length}
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
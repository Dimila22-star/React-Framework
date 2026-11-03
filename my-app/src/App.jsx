import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import BuyButton from "./components/BuyButton";
import Footer from "./components/Footer";
import "./App.css";

import customizeImg from "./assets/Picture 2.png";
import upgradeImg from "./assets/Picture 3.png";
import repairImg from "./assets/Picture 4.png";

function App() {
  const cards = [
    {
      id: 1,
      title: "Customize",
      text: "Choose your expansion cards, keyboard language and bezel colors.",
      image: customizeImg,
    },
    {
      id: 2,
      title: "Upgrade",
      text: "Add more memory and storage or change the processor whenever you need.",
      image: upgradeImg,
    },
    {
      id: 3,
      title: "Repair",
      text: "Every part can be replaced using the one tool in the box.",
      image: repairImg,
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="cards">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            text={card.text}
            image={card.image}
          />
        ))}
      </div>

      <BuyButton />
      <Footer />
    </div>
  );
}

export default App;
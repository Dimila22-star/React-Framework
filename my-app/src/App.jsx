import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import BuyButton from "./components/BuyButton";
import Footer from "./components/Footer";

function App() {
  // the info for each card
  const cards = [
    {
      id: 1,
      title: "Customize",
      text: "Choose your expansion cards, keyboard language and bezel colors.",
    },
    {
      id: 2,
      title: "Upgrade",
      text: "Add more memory and storage or change the processor whenever you need.",
    },
    {
      id: 3,
      title: "Repair",
      text: "Every part can be replaced using the one tool in the box.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="cards">
        {cards.map((card) => (
          <FeatureCard key={card.id} title={card.title} text={card.text} />
        ))}
      </div>

      <BuyButton />
      <Footer />
    </div>
  );
}

export default App;
import heroImage from "../assets/Picture 1.jpg";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1>This isn't our computer. It's yours.</h1>
      <p>
        Updated for 2025 with AMD's latest Ryzen AI 300 Series processors,
        with up to 12 CPU cores.
      </p>
      <button className="btn">Configure now</button>
    </div>
  );
}

export default Hero;
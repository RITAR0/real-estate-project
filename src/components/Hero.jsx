import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Luxury apartments, villas & premium properties</p>
        <button onClick={() => navigate("/properties")}>Explore Properties</button>
      </div>
    </section>
  );
}

export default Hero;

import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Our Agency</h1>

        <p>
          EstatePro is a premium real estate agency dedicated to delivering exceptional properties and personalized
          service.
        </p>

        <div className="about-stats">
          <div>
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>
          <div>
            <h2>250+</h2>
            <p>Properties Sold</p>
          </div>
          <div>
            <h2>500+</h2>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            To connect people with their dream homes while maintaining the highest standards of integrity and
            professionalism.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

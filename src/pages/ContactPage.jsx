import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Here's how you can reach us.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <div className="icon">📍</div>
            <div className="details">
              <h3>Our Office</h3>
              <p>
                123 Luxury Avenue
                <br />
                Beverly Hills, CA 00000
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">📧</div>
            <div className="details">
              <h3>Email</h3>
              <p>info@estatepro.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">📞</div>
            <div className="details">
              <h3>Phone</h3>
              <p>+1 000 000 0000</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <div className="form-group">
            <input type="text" id="name" placeholder=" " required />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" rows="5" placeholder=" " required></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

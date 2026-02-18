import { useParams } from "react-router-dom";
import properties from "../data/properties";
import "../styles/PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) return <h2>Property not found</h2>;

  return (
    <div className="property-details">
      <div className="property-header">
        <h1>{property.title}</h1>
        <p className="property-price">{property.price}</p>
        <p className="property-location">{property.location}</p>
      </div>

      <img src={property.images[0]} alt={property.title} className="property-hero-image" />

      <div className="property-specs">
        <span>{property.beds} Bedrooms</span>
        <span>{property.baths} Bathrooms</span>
        <span>{property.size}</span>
      </div>

      <div className="property-description">
        <p>
          This exceptional property combines luxury, comfort, and modern design. Spacious interiors, premium finishes,
          and abundant natural light create the perfect living environment for families or investors.
        </p>
      </div>

      <div className="property-gallery">
        {property.images.map((img, index) => (
          <img key={index} src={img} alt="Gallery" />
        ))}
      </div>

      <div className="contact-section">
        <a href={`https://wa.me/961XXXXXXXX?text=I'm interested in ${property.title}`} target="_blank" rel="noreferrer">
          <button>Contact via WhatsApp</button>
        </a>
      </div>
    </div>
  );
}

export default PropertyDetails;

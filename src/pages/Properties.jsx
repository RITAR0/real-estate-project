import { useNavigate } from "react-router-dom";
import properties from "../data/properties";
import "../styles/Properties.css";

function Properties() {
  const navigate = useNavigate();

  return (
    <div className="properties-page">
      <h1>All Properties</h1>

      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card-page" onClick={() => navigate(`/property/${property.id}`)}>
            <img src={property.images[0]} alt={property.title} />
            <div className="property-info-page">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <span>{property.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";
import properties from "../data/properties";
import "../styles/Featured.css";

function Featured() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="featured">
      <h2>Featured Properties</h2>

      <div className="property-grid">
        {properties.slice(0, 4).map((property) => (
          <div key={property.id} onClick={() => setSelectedProperty(property)}>
            <PropertyCard
              image={property.images[0]}
              title={property.title}
              price={property.price}
              location={property.location}
            />
          </div>
        ))}
      </div>

      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onViewDetails={(id) => navigate(`/property/${id}`)}
      />
    </section>
  );
}

export default Featured;

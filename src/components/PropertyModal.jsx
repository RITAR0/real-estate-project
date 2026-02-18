import { useState } from "react";
import "../styles/PropertyModal.css";

function PropertyModal({ property, onClose, onViewDetails }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content slide" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <img className="main-image" src={property.images[activeImage]} alt={property.title} />

        <div className="thumbnail-row">
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setActiveImage(index)}
              className={index === activeImage ? "active-thumb" : ""}
            />
          ))}
        </div>

        <div className="modal-info">
          <h2>{property.title}</h2>
          <p className="price">{property.price}</p>
          <p>{property.location}</p>

          <div className="specs">
            <span>{property.beds} Beds</span>
            <span>{property.baths} Baths</span>
            <span>{property.size}</span>
          </div>

          <div className="modal-buttons">
            <button className="details-btn" onClick={() => onViewDetails(property.id)}>
              View Full Details
            </button>

            <a
              className="whatsapp-btn"
              href={`https://wa.me/961XXXXXXXX?text=I'm interested in ${property.title}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Agent
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyModal;

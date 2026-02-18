import "../styles/PropertyCard.css";

function PropertyCard({ image, title, price, location }) {
  return (
    <div className="property-card">
      <img src={image} alt={title} />
      <div className="property-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default PropertyCard;

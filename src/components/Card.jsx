import React from 'react';
import "../style/cardStyle.css";

const Card = ({ image, name, description, price }) => {
  return (
    <div className="card">
    <img src={image} alt={name} className="card-image" />
    <h3 className="card-name">{name}</h3>
    <p className="card-description">{description}</p>
    <div className="card-price"> Rs. {price}/-</div>
    <div className="card-buttons">
      <button className="card-button">Add to Cart</button>
      <button className="card-button">Buy Now</button>
    </div>
  </div>
  )
}

export default Card

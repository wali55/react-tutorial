import React from "react";

const RestaurantCard = ({ image, cuisines, ratings, name }) => {
  return (
    <div className="card">
      <img src={image} alt="cake" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{ratings} Stars</h4>
    </div>
  );
};

export default RestaurantCard;

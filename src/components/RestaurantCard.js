import React from "react";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = (props) => {
  const { image, cuisines, ratings, name } = props.shop;
 
  return (
    <div className="sm:w-56 w-full shadow-lg rounded-md m-3">
      <img src={image} alt="cake" className="rounded-t-md" />
      <div className="p-3">
      <h2 className="font-medium text-xl">{name}</h2>
      <h3 className="mt-3 text-slate-600">{cuisines.join(", ")}</h3>
      <h4 className="text-xs text-slate-600 mt-2">{ratings} Stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

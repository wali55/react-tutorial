import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { myList } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }
  const menuItems = myList.map((item) =>
    item.menuItems.map((i) => (
      <div key={i.id} className="flex mb-2">
        <h1>{i.itemName}</h1>
        <button onClick={() => addFoodItem(i)} className="ml-1 px-2 bg-green-400 rounded-md hover:bg-green-500">
          +
        </button>
      </div>
    ))
  );
  // const [menu, setMenu] = useState(menuItems);
 

 
  return (
    <div>
      {menuItems}
    </div>
  );
};

export default RestaurantMenu;

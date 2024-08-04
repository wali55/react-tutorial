import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { myList } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const menuItems = myList.map((item) =>
    item.menuItems.map((i) => <h1 key={i.id}>{i.itemName}</h1>)
  );
  // const [menu, setMenu] = useState(menuItems);
  const dispatch = useDispatch();
  
  const handleAddItem = () => {
    dispatch(addItem("Mango"));
  };
  return (
    <div>
      <div>
        <button
          onClick={() => handleAddItem()}
          className="p-2 bg-green-400 rounded-md hover:bg-green-500"
        >
          Add Item
        </button>
      </div>
      {menuItems}
    </div>
  );
};

export default RestaurantMenu;

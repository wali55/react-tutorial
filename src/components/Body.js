import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import { myList } from "../config";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    setAllRestaurants(myList);
    setFilteredRestaurants(myList);
  }, []);

  // const offline = useOnline();
  // if(offline) {
  //   return <h1>Offline, please check your internet connection.</h1>
  // }

  if (!allRestaurants) {
    return null;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5">
        <input
          type="text"
          className="border rounded m-3 p-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-slate-300 px-3 py-2 rounded hover:bg-slate-400"
          onClick={() => {
            const result = filterData(searchText, allRestaurants);
            setFilteredRestaurants(result);
          }}
        >
          Search
        </button>
        <h1 className="text-xl m-3 font-black text-purple-900">Hello World</h1>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurants.map((shop) => (
            <RestaurantCard {...shop} key={shop.name} />
          ))
        )}
        {/*This is known as props when I say I am passing some props to my component it means I am passing some data to my component*/}
      </div>
    </>
  );
};

export default Body;

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
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => {
            const result = filterData(searchText, allRestaurants);
            setFilteredRestaurants(result);
          }}
        >
          Search
        </button>
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

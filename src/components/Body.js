import React, { useContext, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import { myList } from "../config";
import UserContext from "../utils/UserContext";
import RestaurantMenu from "./RestaurantMenu";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // const [user, setUser] = useState({
  //   myName: "wali",
  //   email: "wali@gmail.com"
  // });

  useEffect(() => {
    setAllRestaurants(myList);
    setFilteredRestaurants(myList);
  }, []);

  const { user, setUser } = useContext(UserContext);

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
      <RestaurantMenu />
      <div className="search-container p-5">
        <input
          type="text"
          className="border rounded m-3 p-2 focus:bg-slate-50"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="bg-slate-300 px-3 py-2 rounded hover:bg-slate-400 inline-block mr-3"
          onClick={() => {
            const result = filterData(searchText, allRestaurants);
            setFilteredRestaurants(result);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          className="my-3 border inline-block p-2"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          value={user.email}
          className="my-3 border inline-block p-2"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="flex m-6 flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurants.map((shop) => (
            <RestaurantCard shop={shop} key={shop.name} />
          ))
        )}
        {/*This is known as props when I say I am passing some props to my component it means I am passing some data to my component*/}
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState } from "react";

const useRestaurantList = () => {
  
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch("");
    const json = data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants;
};

export default useRestaurantList;

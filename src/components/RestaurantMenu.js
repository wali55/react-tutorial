import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useEffect } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const restaurant = useRestaurant(resId);

    return !restaurant ? (<Shimmer />) : (
        <div></div>
    )
}

export default RestaurantMenu;
export const filterData = (searchText, allRestaurants) => {
    return allRestaurants.filter((restaurant) => restaurant?.name.toLowerCase()?.includes(searchText.toLowerCase()));
};
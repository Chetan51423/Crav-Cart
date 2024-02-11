export const filterData = (searchInput,restaurants)=>{
    return restaurants.filter((restaurant)=> restaurant.info.name.includes(searchInput));
}
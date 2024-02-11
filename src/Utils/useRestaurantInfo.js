import {useState,useEffect } from 'react'

export const useRestaurantInfo = (id)=>
{
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        getRestaurantInfo(id);
    },[]);

    async function getRestaurantInfo(id){
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4525798&lng=73.8702649&menuId="+id);
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4525239&lng=73.8702498&restaurantId="+id);
        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4525239&lng=73.8702498&restaurantId=53754
        const json = await data.json()
        setRestaurantInfo(json.data?.cards[0]?.card?.card?.info)
        setloading(false);
    }
    return {restaurantInfo,loading};
}
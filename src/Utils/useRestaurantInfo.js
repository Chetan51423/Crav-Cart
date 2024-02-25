import {useState,useEffect } from 'react'
import {FETCH_MENU_RESTAURANT} from "../config"
export const useRestaurantInfo = (id)=>
{
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        getRestaurantInfo(id);
    },[]);

    async function getRestaurantInfo(id){
        const data = await fetch(`${FETCH_MENU_RESTAURANT}${id}`);
        const json = await data.json()
        setRestaurantInfo(json.data?.cards[2]?.card?.card?.info)
        setloading(false)
    }
    return {restaurantInfo,loading};
}
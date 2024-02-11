import {useParams} from 'react-router-dom'
import { CloudinaryImage_Url } from "../config.js"
import {useEffect, useState} from 'react'
import One_Shimmer from "./One_Shimmer.js"
import {useRestaurantInfo}  from "../Utils/useRestaurantInfo.js"
const RestaurantInfo=()=>{

    const param = useParams();
    const {id} = param;
    // const [restaurantInfro, setRestaurantInfo] = useEffect({});
    // const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const restaurantInfo = useRestaurantInfo(id).restaurantInfo;
    // setLoading(useRestaurantInfo(id).loading)
    
    // if(restaurantInfo!==null)
    // {
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     getRestaurantInfo(id);
    // },[]);

    // async function getRestaurantInfo(id){
    //     // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4525798&lng=73.8702649&menuId="+id);
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4525239&lng=73.8702498&restaurantId="+id);
    //     // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4525239&lng=73.8702498&restaurantId=53754
    //     const json = await data.json()
    //     setRestaurantInfo(json.data.cards[0].card.card.info)
        
    // }
  
    
    return loading? <One_Shimmer/> : (
        <div style={{display:'flex', justifyContent:'center'}}>
            
            <div style={{height:'400p', width:'400px', border:'2px solid violet', margin:'20px', padding:'20px', borderRadius:'30px'}}>
                {
                    loading?<One_Shimmer/>:(
                        <div>
                            <h1>{restaurantInfo.name}</h1>
                            <div style={{display:'flex'}}>
                                <img src={CloudinaryImage_Url+restaurantInfo.cloudinaryImageId} alt="" />
                                <ul>
                                    <li>Area Name:{restaurantInfo.areaName}</li>
                                    <li>Avr Rating:{restaurantInfo.avgRating}</li>
                                    <li>City: {restaurantInfo.city}</li>
                                    <li>Cost of Two:{restaurantInfo.costForTwoMessage}</li>
                                    <li>Locality: {restaurantInfo.locality}</li>
                                </ul>
                            </div>
                        </div>
                    )
                }
                
            </div>
            
            {/* <img src={CloudinaryImage_Url + restaurantInfo.cloudinaryImageId} alt="image" /> */}
            
        </div>
    );
}

export default RestaurantInfo;
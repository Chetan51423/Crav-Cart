import {useParams} from 'react-router-dom'
import { CloudinaryImage_Url } from "../config.js"
import {useEffect, useState} from 'react'
import One_Shimmer from "./One_Shimmer.js"
import {useRestaurantInfo}  from "../Utils/useRestaurantInfo.js"
const RestaurantInfo=()=>{

    const param = useParams();
    const {id} = param;
    // const [loading, setLoading] = useState(false);
    
    const restaurantInfo = useRestaurantInfo(id).restaurantInfo;
    // const loading = useRestaurantInfo(id).loading;

    return !restaurantInfo? <One_Shimmer/> : (
        <div style={{display:'flex', justifyContent:'center'}}>
            
            <div style={{height:'400p', width:'400px', border:'2px solid violet', margin:'20px', padding:'20px', borderRadius:'30px'}}>
                {
                    !restaurantInfo?<One_Shimmer/>:(
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
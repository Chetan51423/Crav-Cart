import {useParams} from 'react-router-dom'
import { CloudinaryImage_Url } from "../config.js"
import {useEffect, useState} from 'react'
import ShimmerCard from "./ShimmerCard.js"
import {useRestaurantInfo}  from "../Utils/useRestaurantInfo.js"
import { addItem } from '../Utils/CartSlice.js'
import { useDispatch } from 'react-redux'

const RestaurantInfo=()=>{

    const param = useParams();
    const {id} = param;
    const restaurantInfo = useRestaurantInfo(id).restaurantInfo;

    const dispatch = useDispatch();
    const handleAdd = ()=>{
        dispatch(addItem(restaurantInfo))

    }
    
    return !restaurantInfo ? <ShimmerCard/> : (
        <div className="flex justify-center">
            <div className="m-16 p-12 bg-orange-300 rounded-2xl shadow-2xl" >
                <div>
                    <div className=" h-12  flex mb-5 bg-violet-200 rounded-2xl items-center justify-center font-bold shadow-2xl">
                        <h1>{restaurantInfo.name}</h1>
                    </div>
                    <div style={{display:'flex'}}>
                        <img className="w-56 h-60 mr-10 rounded-3xl shadow-2xl" src={CloudinaryImage_Url+restaurantInfo.cloudinaryImageId} alt="" />
                        <div className="p-5 bg-slate-200 rounded-2xl shadow-2xl flex flex-col justify-between items-center">
                            <div>
                                <ul>
                                    <li>Area Name:{restaurantInfo.areaName}</li>
                                    <li>Avr Rating:{restaurantInfo.avgRating}</li>
                                    <li>City: {restaurantInfo.city}</li>
                                    <li>Cost of Two:{restaurantInfo.costForTwoMessage}</li>
                                    <li>Locality: {restaurantInfo.locality}</li>
                                </ul>
                            </div>
                            <div>
                                <button className="px-5 py-2 bg-green-400 rounded-lg shadow-2xl" onClick={()=>handleAdd()}> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantInfo;
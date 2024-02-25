 import { useSelector } from "react-redux";
 import {CloudinaryImage_Url} from "../config"
 const Cart_Item =({name,cloudinaryImageId,areaName, city,locality, avgRating, costForTwoMessage})=>{
    
    return(
        <div className="flex justify-center">
            <div className="m-8 p-8 bg-orange-300 rounded-2xl shadow-2xl" >
                <div>
                    <div className=" h-12  flex mb-5 bg-violet-200 rounded-2xl items-center justify-center font-bold shadow-2xl">
                        <h1>{name}</h1>
                    </div>
                    <div style={{display:'flex'}}>
                        <img className="w-40 h-48 mr-10 rounded-3xl shadow-2xl" src={CloudinaryImage_Url+cloudinaryImageId} alt="" />
                        <div className="p-5 bg-slate-200 rounded-2xl shadow-2xl flex flex-col justify-between items-center">
                            <div>
                                <ul>
                                    <li>Area Name:{areaName}</li>
                                    <li>Avr Rating:{avgRating}</li>
                                    <li>City: {city}</li>
                                    <li>Cost of Two:{costForTwoMessage}</li>
                                    <li>Locality: {locality}</li>
                                </ul>
                            </div>
                            <div>
                                <button className="mt-2 px-5 py-2 bg-red-400 rounded-lg shadow-2xl" onClick={()=>handleAdd()}>Delete from cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Cart_Item;

import { CloudinaryImage_Url } from "../config.js"
const RestaurantCard =({cloudinaryImageId,name, costForTwo,avgRating
})=>
{
    // const {urlToImage,author, publishedAt} = restaurant;   // we have to pass all the props individually 
    
    return (
       
        <div className=" w-64 h-72 m-6 shadow-sm hover:shadow-2xl  rounded-3xl">
            <div>
                <img  className="w-64 h-44 rounded-3xl"  src={ `${CloudinaryImage_Url}${cloudinaryImageId}` }
                alt="Image"/>
            </div>
            <div className=" m-2 p-2 font-medium box-content">
                <h2 className="text-xl font-bold  text-slate-700 ">{name}</h2>
                <h4 className="text-lg cardData-text">❇️⚡{avgRating}</h4>
                <h3 className="cardData-text">{costForTwo}</h3>
            </div>
        </div>
    )
}

export default RestaurantCard

// src={`${CloudinaryImage_Url} ${cloudinaryImageId }`}

import { CloudinaryImage_Url } from "../config.js"
const RestaurantCard =({cloudinaryImageId,name, costForTwo,avgRating
})=>
{
    // const {urlToImage,author, publishedAt} = restaurant;   // we have to pass all the props individually 
    
    return (
       
        <div className="card">
            {/* <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }
             alt="Image"/> */}
             {/* <img src={ CloudinaryImage_Url + cloudinaryImageId }
             alt="Image"/> */}
             <img src={ `${CloudinaryImage_Url}${cloudinaryImageId}` }
             alt="Image"/>
             
            <div className="cardData">
                <h2 class="cardData-text">{name}</h2>
                <h3 class="cardData-text">{costForTwo}</h3>
                <h4 class="cardData-text">{avgRating
}⭐🔥</h4>
                <h4></h4>
            </div>
        </div>
    )
}

export default RestaurantCard

// src={`${CloudinaryImage_Url} ${cloudinaryImageId }`}
import RestaurantCard from "./RestaurantCard"
import {Restaurant} from "../config.js"
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom"
import { filterData } from "../Utils/filterData.js"
import {useOnline} from "../Utils/useOnline.js"


const Body = () =>
{
 
  const [allRestaurants, seaAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput,setSearchInput] = useState("");
  
  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants()
  {
    const d2 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4525798&lng=73.8702649&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json2 = await d2.json();
    seaAllRestaurants(json2.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(json2.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const online = useOnline();

  if(!online)
  {
    return <h1 style={{textAlign:"center", margin:"100px auto 100px"}}>🔴Offline, Please check your Internet ! 🔴</h1>
  }
  return restaurants.length===0 ? (<Shimmer/>) : (
      <>
        <div className="search-container">
          <input type="search" className="search-input" placeholder="Search" 
            value={searchInput} 
            onChange ={(e)=>
            {
              setSearchInput(e.target.value)
            }}
          />
          
          <button className="search-btn" onClick={()=>
            {
              const data = filterData(searchInput,allRestaurants);
              setRestaurants(data);

            }}
          > Search 
          </button>
        </div>
        <div className="body_">
          {/* The best way is here😎 we can use the map() to map all the object inside RestaurantList */}
          {
            restaurants.map((restaurant)=>
            {
                return <Link to={`/restaurant/${restaurant.info.id}`}  key={restaurant.info.id}><RestaurantCard {...restaurant.info} key={restaurant.info.id}/></Link>;

            })
          }
            
        </div>   
      </>
  )
}




export default Body
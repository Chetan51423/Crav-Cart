import RestaurantCard from "./RestaurantCard"
import {Restaurant} from "../config.js"
import {useState} from "react"

function filterData(searchInput,restaurants)
  {
     return restaurants.filter((restaurant)=> restaurant.author.includes(searchInput));
  }

const Body = () =>
{
  const [restaurants, setRestaurants] = useState(Restaurant);
  const [searchInput,setSearchInput] = useState("");
  {

  }
  
    return (
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
                const data = filterData(searchInput,restaurants);
                setRestaurants(data);

              }}
            > Search 
            </button>
          </div>
          <div className="body_">
              {/* The best way is here😎 we can use the map() to map all the object inside RestaurantList */}
              {
                  restaurants.map((restaurant)=>{
                      return <RestaurantCard {...restaurant}/>

                  })
              }
              
          </div>   
        </>
    )
}




export default Body
import RestaurantCard from "./RestaurantCard"
import {Restaurant} from "../config.js"
import {useState} from "react"
const Body = () =>
{
  // const searchText = "KFC";
  //this is react / state variable 
  const [searchInput,setSearchInput] = useState("KFC");
    return (
        <>
          <div className="search-container">
            <input type="search" className="search-input" placeholder="Search" 
            value={searchInput} 
            onChange ={(e)=>
            {
              // e.target.value;
              setSearchInput(e.target.value)

            }}/>
            <button className="search-btn">Search {searchInput}</button>
          </div>
          <div className="body_">
              {/* The best way is here😎 we can use the map() to map all the object inside RestaurantList */}
              {
                  Restaurant.map((restaurant)=>{
                      return <RestaurantCard {...restaurant}/>

                  })
              }
              
          </div>   
        </>
    )
}




export default Body
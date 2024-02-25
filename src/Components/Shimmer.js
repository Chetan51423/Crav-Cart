import ShimmerCard from "./ShimmerCard"
import Shimmer_searchBar from "./Shimmer_searchBar"

const Shimmer = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="flex flex-col"> 
      <Shimmer_searchBar/>
      <div className="flex flex-wrap">
        {
        arr.map(()=>{
          return <ShimmerCard/>;
        })
        }
      </div>
    </div>
  )
}

export default Shimmer

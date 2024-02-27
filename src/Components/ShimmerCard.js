

const ShimmerCard = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-1">
        <div className="w-64 h-72 mt-0 m-9  rounded-3xl ">
            <div className="w-60  h-64 flex flex-col justify-around items-baseline rounded-lg">
              <div className="w-56 h-44 rounded-3xl bg-gray-300 m-4  w-30 h-490 animate-pulse"></div>
              <div className="w-40 bg-gray-300 h-4 rounded-lg mb-3 animate-pulse"></div>
              <div className="w-32 bg-gray-300 h-4 mb-3 rounded-lg animate-pulse"></div>
              <div className="w-24 bg-gray-300 h-4 mb-3 rounded-lg animate-pulse"></div>
            </div>
        </div>
      </div>
    </div>
  ) 
}

export default ShimmerCard

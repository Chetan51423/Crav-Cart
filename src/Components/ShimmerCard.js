

const ShimmerCard = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-56 m-9 h-64 bg-gray-200 rounded-lg ">
            <div className="w-60  h-64 flex flex-col justify-around items-baseline rounded-lg">
              <div className="w-48 bg-gray-300 h-44 m-3 rounded-lg"></div>
              <div className="w-40 bg-gray-300 h-3 rounded-lg"></div>
              <div className="w-32 bg-gray-300 h-3 mb-3 rounded-lg"></div>
            </div>
        </div>
      </div>
    </div>
  ) 
}

export default ShimmerCard

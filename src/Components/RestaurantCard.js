const RestaurantCard =({urlToImage,author, publishedAt})=>
{
    // const {urlToImage,author, publishedAt} = restaurant;   // we have to pass all the props individually 
    return (
       
        <div className="card">
            <img src={urlToImage} alt="card" />
            <div className="cardData">
                <h2>{author}</h2>
                <h3>{publishedAt}</h3>
                <h4>5⭐🔥</h4>
                <h4></h4>
            </div>
        </div>
    )
}

export default RestaurantCard
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import logo2 from "../Asets/logo2.jpg"

// import Store from "../Utils/Store" 

const Website_title =()=>
{
    return (
        <h2 className="p-5 lg:text-7xl sm:text-6xl ">CraveCart</h2>
    )
    
}
const Header = () =>
{
    const cartItems = useSelector(Store => Store.cart.items)
    return  (
        
        <div>
            <div className="flex justify-between mt-3 p-1 items-center bg-pink-200 shadow-2xl">
                <div className="logo">
                    <img data-testid="logo" className="w-32 h-32 rounded-full m-8 shadow-2xl" src={logo2} alt="logo" />
                </div> 
                <div className="mx-auto flex items-center">
                    <Website_title/>
                    {/* <img className="lg:size-48 sm:size-40 rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0svnqn9Anh0RAqVtyuCk-RMSYuJ5oCIxyxQ&usqp=CAU" alt="" /> */}
                </div>   
                <div className="flex">
                    <ul className="flex">
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/">Home</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/About">About</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/Contct_Us">Contct_Us</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/Instamart">Instamart</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/Cart">Cart-<span className="bg-orange-300 p-2 rounded-xl">{cartItems.length}</span></Link></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )   
}

export default Header
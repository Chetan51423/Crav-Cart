import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
// import Store from "../Utils/Store" 

const Website_title =()=>
{
    return (
        <h2 className="p-5 lg:text-5xl sm:text-4xl font-medium ">Aunty's Restro</h2>
    )
    
}
const Header = () =>
{
    const cartItems = useSelector(Store => Store.cart.items)
    return  (
        
        <div>
            <div className="flex justify-between mt-3 p-1 items-center bg-pink-100 shadow-lg">
                <div className="logo">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGndx19Dehe1qY2ZDX0Q2zFMRxb5QjOp4H5vIV30gPkq7ECVPwFJyElPSZpGNdA-fn-w&usqp=CAU" alt="logo" />
                </div> 
                <div className="flex items-center">
                    <Website_title/>
                    <img className="lg:size-48 sm:size-40 rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0svnqn9Anh0RAqVtyuCk-RMSYuJ5oCIxyxQ&usqp=CAU" alt="" />
                    </div>   
                <div className="flex">
                    <ul className="flex">
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold"><Link to="/">Home</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold"><Link to="/About">About</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold"><Link to="/Contct_Us">Contct_Us</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold"><Link to="/Instamart">Instamart</Link></li>
                        <li className="lg:text-xl sm:text-sm p-3 font-semibold"><Link to="/Cart">Cart-{cartItems.length}</Link></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )   
}

export default Header
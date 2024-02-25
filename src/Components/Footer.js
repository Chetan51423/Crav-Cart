import { Link } from "react-router-dom"
const Footer = () =>
{
    return (
        <div className="w-full h-56 bg-pink-100 flex justify-center items-center">
            <div className="">
               <Link to="/Contct_Us"><button className="w-36 h-12 px-4 font-bold text-white bg-violet-600 rounded-lg">Contact Aunty</button></Link> 
            </div>
        </div>
    )
}

export default Footer
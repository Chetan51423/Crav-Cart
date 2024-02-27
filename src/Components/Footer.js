import { Link } from "react-router-dom"
const Footer = () =>
{
    return (
        <div className="w-full h-56 bg-pink-200 flex  flex-col  justify-around items-center">
            <div className="mt-16">
               <Link to="/Contct_Us"><button className="w-36 h-12 px-4 font-bold text-white bg-violet-600 hover:bg-violet-800 rounded-lg shadow-2xl">Contact</button></Link> 
            </div>
            <div className=" m-auto"> Made with ❤️ by CS-14
            </div>
        </div>
    )
}

export default Footer
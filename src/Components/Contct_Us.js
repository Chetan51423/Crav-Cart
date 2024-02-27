import Frustrated_aunty from "../Asets/frustreted_aunty.jpg"
const Contct_Us =()=>
{
    return (
        <>
            <div className="mx-16 my-auto p-12 bg-orange-300 rounded-2xl shadow-2xl">
                <div className="flex  flex-col justify-center items-center">
                    {/* <div className="w-40 h-40">
                        <img className="rounded-3xl" src={Frustrated_aunty} alt="logo" />
                    </div> */}
                    <h1 className="text-4xl font-medium">Contact Me here 😎</h1>
                    <div className="mt-10 flex ">
                        
                        
                        <button className="px-3 py-1 bg-lime-600 mr-8 font-semibold rounded-2xl"><a href="https://www.linkedin.com/in/chetan-shinde-199a44221/">linkedIn</a></button>
                        <button className="px-3 py-1 bg-lime-600 mr-8 font-semibold rounded-2xl"><a href="https://github.com/Chetan51423">GitHub</a></button>
                        <button className="px-3 py-1 bg-lime-600 mr-8 font-semibold rounded-2xl"><a href="https://www.instagram.com/chetanshinde51423/">Instagram</a></button>
                        <button className="px-3 py-1 bg-lime-600 mr-8 font-semibold rounded-2xl"><a href="https://www.linkedin.com/in/chetan-shinde-199a44221/">Gmail</a></button>

                    </div>
                </div>
            </div>
        </>
    );
    
}
export default Contct_Us;
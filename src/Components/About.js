
const About = ()=>
{
    return (
            <div className="mx-16 my-auto p-12 bg-orange-300 rounded-2xl shadow-2xl">
                <div className="flex  flex-col justify-center items-center">
                    {/* <div className="w-40 h-40">
                        
                        <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGndx19Dehe1qY2ZDX0Q2zFMRxb5QjOp4H5vIV30gPkq7ECVPwFJyElPSZpGNdA-fn-w&usqp=CAU" alt="logo" />
                    </div> */}
                    <h1 className="text-4xl font-medium">Thank You! for visiting this site 😍</h1>
                    <p className="m-3">This site is the part of implementation of React core concepts. <br />It is under construction and I will add more features as I advances <br /> in my learning in React concepts!</p>
                    <div>
                        <button className="mt-4 px-3 py-2 bg-green-600 rounded-xl font-medium shadow-2xl hover:shadow-sm ">Fill free to contact me </button>
                    </div>
                    
                </div>
            </div>
    )
}

export default About;
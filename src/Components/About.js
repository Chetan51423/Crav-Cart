import Happy_aunty from "../Asets/Happy_aunty.jpg"
const About = ()=>
{
    return (
            <div className="mx-16 my-auto p-12 bg-orange-300 rounded-2xl shadow-2xl">
                <div className="flex  flex-col justify-center items-center">
                    <div className="w-40 h-40">
                        <img className="rounded-3xl" src={Happy_aunty} alt="logo" />
                    </div>
                    <h1 className="text-4xl font-medium">Aunty Didn't Like To Share Anything About Her Due To Privacy Reasons</h1>
                </div>
            </div>
    )
}

export default About;
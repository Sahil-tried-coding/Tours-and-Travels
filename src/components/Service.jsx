import Navbar from "./Navbar"
import Recent from "./Recent"
import bg from "../Assets/service.jpg"
function Service() {
  return (
    <div className="h-screen w-screen ">
        <Navbar/>
        <div>
       <img src={bg} className="sm:h-[100vh] h-[90vh] object-cover w-full"/>
       <h1 className=" sm:top-[18rem] sm:left-[39rem] sm:text-8xl sm:font-bold text-white  absolute left-[7.5rem] top-[17.9rem] font-sans text-5xl font-bold">Services</h1>
       <p className="sm:bg-transparent bg-black p-3 rounded-xl mb-5 text-white sm:top-[32rem] sm:left-[7rem] sm:text-3xl sm:font-semibold absolute top-[29rem] text-xl font-semibold  text-nowrap">Discover New Horizons</p>
       <p className="sm:bg-transparent bg-black p-3 rounded-xl mb-5 text-white sm:top-[35rem] sm:left-[65rem] sm:text-3xl sm:font-semibold absolute  left-[4.2rem] top-[34rem] text-xl font-semibold  text-nowrap">: Your Journey, Our Expertise!</p>
      </div>
        <Recent/>
    </div>
  )
}

export default Service 


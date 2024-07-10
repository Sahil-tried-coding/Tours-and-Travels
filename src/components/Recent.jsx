import { useContext } from "react"
import Footer from "./Footer"
import { MyContext } from "../context/Context"
import Recent_temp from "../Templates/Recent_temp"
function Recent() {


    let {HeroHeading} = useContext(MyContext);
    let {CardData}=useContext(MyContext);
  return (
    <div className="w-[100vw] h-screen">
         <h1 className="sm:text-8xl text-center text-6xl font-bold">{HeroHeading[1].heading}</h1>
         <h1 className="text-center mt-5 font-semibold sm:text-2xl sm:mt-5 text-xl sm:font-bold  ">{HeroHeading[1].downHeading}</h1>
        <div className="sm:flex  sm:w-full sm:gap-10">
        <Recent_temp title={CardData[0].title} img1={CardData[0].src} desc={CardData[0].desc}/>
        <Recent_temp title={CardData[1].title} img1={CardData[1].src} desc={CardData[1].desc}/>
        <Recent_temp title={CardData[2].title} img1={CardData[2].src} desc={CardData[2].desc}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Recent
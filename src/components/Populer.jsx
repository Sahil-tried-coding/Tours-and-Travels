import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react"
import { MyContext } from "../context/Context"
import Populer_temp from "../Templates/Populer_temp"
function Populer() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from("#title", {
      scrollTrigger: {
        trigger: "#title",
        scroller: "body",
        // markers: true,
        scrub: true
      },
      duration: 1,
      x: -100,
      stagger:0.5
      
    });

   

   
  }, []);



  
  let {HeroHeading} =useContext(MyContext)
  let {data} = useContext(MyContext)
  return (
    <div  className="h-sceern overflow-x-hidden  w-[100vw]">
        <h1 id="title" className="sm:text-8xl text-center text-6xl font-bold">{HeroHeading[0].heading}</h1>
        <h1 id="line" className="text-center mt-5 font-semibold sm:text-2xl sm:mt-5 text-xl sm:font-bold  ">{HeroHeading[0].downHeading}</h1>
        <Populer_temp   title={data[0].title} img1={data[0].img1} img2={data[0].img2} descp={data[0].desc}/>
        <Populer_temp title={data[1].title} img1={data[1].img1} img2={data[1].img2} descp={data[1].desc}/>
    </div>
  )
}

export default Populer
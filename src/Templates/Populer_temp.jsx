/* eslint-disable react/prop-types */



function Populer_temp({img1,img2,title,descp}) {

 




  return (
    <div className="h-[850px] sm:h-[500px] w-screen sm:flex sm:justify-center sm:items-center ">
        <div className="h-[360px]  flex justify-center  items-center gap-5">
            <img id="img1" src={img1} className="bg-black h-[70%]  border-2 border-black border-solid w-[45%] mt-10  object-cover object-left  sm:w-[40%] sm:mt-20 hover:scale-105 duration-500 ease-in">
                
            </img>
            <img src={img2} className="bg-white h-[70%] w-[45%] border-2 border-black border-solid mb-10  object-cover object-center sm:w-[40%] sm:mb-20 hover:scale-105 duration-500 ease-in">
                
            </img>
        </div>
        <div className="p-5 flex flex-col justify-center items-center sm:w-[40%]">
            <h1 className="py-3 font-bold text-3xl font-mono sm:text-6xl">{title} </h1>
            <p className="font-semibold">{descp}</p>
        </div>
    </div>
  )
}

export default Populer_temp
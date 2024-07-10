
function Recent_temp({title,img1,desc}) {
  return (
    <div className="max-h-max w-[80%] sm:w-[25%] p-3  mx-auto bg-white shadow-2xl mt-8">

    <img src={img1} className="w-[100%]  h-[220px]   mx-auto ">

    </img>
    <h2 className="text-2xl px-3 pt-3 font-bold font-serif">{title}</h2>
    <p className="font-semibold p-3">{desc}</p>
    </div>
  )
}

export default Recent_temp
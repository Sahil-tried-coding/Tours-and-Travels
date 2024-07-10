import Nav from "./Nav"
import Footer from "./Footer"
function Contact() {
  return (
    <div className="h-screen w-screen">
        <Nav/>
    <div>
       <img src="https://wallpapercave.com/wp/GxKkTlM.jpg" className="sm:h-[100vh] h-[90vh] object-cover w-full"/>
       <h1 className=" sm:top-[23rem] sm:left-[46rem] sm:text-8xl sm:font-bold text-black  absolute left-[10.5rem] top-[28.9rem] font-sans text-5xl font-bold">Contact Us</h1>
       <p className="sm:bg-transparent p-3 rounded-xl mb-5 text-white sm:top-[32rem] sm:left-[57rem] sm:text-3xl sm:font-semibold absolute top-[25rem] text-xl font-semibold  text-nowrap">Connect with Us</p>
       <p className="sm:bg-transparent  p-3 rounded-xl mb-5 text-white sm:top-[35rem] sm:left-[65rem] sm:text-3xl sm:font-semibold absolute  left-[6.2rem] top-[34rem] text-xl font-semibold  text-nowrap">: Your Journey Begins Here!</p>
    </div>
    <div className="max-h-max w-screen ">
        <h1 className="text-3xl mt-5 text-center font-bold sm:text-5xl">Send a Messege to us !</h1>
        <form className="mx-auto my-5 flex flex-col w-[80%] gap-5 sm:w-[40%] ">
            <input placeholder="Name" className="p-5 h-10 rounded-lg border-2 border-black" type="text"/>
            <input placeholder="E-mail" className="p-5 h-10 rounded-lg border-2 border-black" type="email"/>
            <input placeholder="Subject" className="p-5 h-10 rounded-lg border-2 border-black" type="text"/>
            <textarea placeholder="Messege" className="p-5 h-28 rounded-lg border-2 border-black" type="textarea"/>
            <button className="w-full font-bold bg-slate-300 p-4 rounded-2xl">Send Messege!</button>
        </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
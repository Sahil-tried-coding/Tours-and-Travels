import Navbar from "./Navbar"
import Footer from "./Footer"
import bg from "../Assets/about.jpg"
function About() {
  return (
    <div className="h-screen w-screen">
    <Navbar/>
    <div>
      <div>
       <img src={bg} className="sm:h-[100vh] h-[90vh] object-cover w-full"/>
       <h1 className=" sm:top-[23rem] sm:left-[39rem] sm:text-8xl sm:font-bold text-white  absolute left-[7.5rem] top-[26rem] font-sans text-5xl font-bold">About Us</h1>
       <p className=" sm:top-[32rem] sm:left-[39rem] sm:text-3xl sm:font-semibold absolute top-[32rem] text-xl font-semibold  text-nowrap">Explore the World with Ease</p>
       <p className=" sm:top-[35rem] sm:left-[35rem] sm:text-3xl sm:font-semibold absolute  left-[4.2rem] top-[34rem] text-xl font-semibold  text-nowrap">: Your Ultimate Tours and Travels Guide!</p>
      </div>


      <div className="sm:flex sm:gap-10">
          <div className="  shadow-xl  shadow-black mt-8 w-11/12  p-5 mx-auto h-[26.5rem]  border-4 border-black ">
            <h1 className="font-bold text-3xl ">Our History</h1>
            <p className="font-semibold">Founded with a passion for exploration and a commitment to excellence, our journey began with a simple idea: to make travel accessible, enjoyable, and memorable for everyone. Over the years, we've grown from a small local operation to a trusted name in the tours and travels industry, helping thousands of travelers discover the beauty and wonder of the world. Our dedication to providing top-notch service, personalized itineraries, and unforgettable experiences has remained unwavering. Each milestone in our history is a testament to our love for travel and our desire to share that love with you.</p>
          </div>
          <div className="mt-8 shadow-xl  shadow-black w-11/12  p-5 mx-auto h-[26.5rem]  border-4 border-black ">
            <h1 className="font-bold text-3xl ">Our Mission</h1>
            <p className="font-semibold">Our mission is to inspire and facilitate unforgettable travel experiences for every adventurer. We strive to offer comprehensive travel solutions that cater to diverse interests and preferences, ensuring that every journey is seamless, enriching, and uniquely tailored. By combining expert knowledge, exceptional customer service, and a deep understanding of travel trends, we aim to make every trip an extraordinary adventure. We are committed to promoting sustainable tourism practices, fostering cultural exchange, and supporting local communities to create a positive impact wherever we go.</p>
          </div>
          <div className="mt-8 shadow-xl  shadow-black w-11/12  p-5 mx-auto h-[26.5rem]  border-4 border-black ">
            <h1 className="font-bold text-3xl ">Our Vision</h1>
            <p className="font-semibold">Our vision is to be the leading tours and travels company renowned for transforming ordinary trips into extraordinary experiences. We aspire to set the standard for innovation, quality, and customer satisfaction in the travel industry. By continuously expanding our offerings, embracing new technologies, and nurturing our global network of partners, we envision a world where travel is a catalyst for personal growth, cultural understanding, and global unity. We aim to inspire a generation of travelers to explore the world with curiosity, respect, and a sense of adventure.</p>
          </div>
      </div>
    </div>    

    <Footer/>
    </div>
  )
}

export default About
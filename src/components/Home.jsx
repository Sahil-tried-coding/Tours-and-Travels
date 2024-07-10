import Hero from "./Hero"
import Navbar from "./Navbar"
import Populer from "./Populer"
import Recent from "./Recent"
function Home() {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <Populer/>
        <Recent/>
    </div>
  )
}

export default Home
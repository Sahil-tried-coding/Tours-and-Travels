import Hero from "./Hero"
import Nav from "./Nav"
import Populer from "./Populer"
import Recent from "./Recent"
function Home() {
  return (
    <div>
      <Nav/>
        <Hero/>
        <Populer/>
        <Recent/>
    </div>
  )
}

export default Home
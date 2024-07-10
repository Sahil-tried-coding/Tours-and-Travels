import Nav from "./components/Nav";
// import Hero from "./components/Hero"
// import Populer from "./components/Populer"
// import Recent from "./components/Recent"
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Service from "./components/Service"
import { Routes,Route } from "react-router-dom"
function App() {


  return (
    <div >

      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Service/>} path="/service"/>
        <Route element={<Contact/>} path="/contacts"/>
      </Routes>
    {/* <div className="bg-slate-100"> */}
        <Nav/>
        {/* <Home/> */}
        
    </div>
  )
}

export default App



{/* <Hero/>
        <Populer/>
        <Recent/> */}
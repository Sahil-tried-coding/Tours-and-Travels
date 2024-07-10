// import {  useEffect, useState } 
// from "react";
// import { LiaTimesSolid } from "react-icons/lia";
// import MenuItems from "./MenuItems"
// import { FaBars } from "react-icons/fa6";
// // import {gsap} from "gsap";
// // import {useGSAP} from "@gsap/react"
// import gsap from "gsap"
// import{useGSAP} from "@gsap/react"
// import { Link } from "react-router-dom";
// function Navbar() {

//         useEffect(()=>{
//                 gsap.from("#navbar",{
//                     opacity:1,
//                     duration:2
//                 })
//         },[])
  


//     const[nav,setNav]=useState(false)
    
//         function changeHandler (){
//             setNav(!nav);
//         }

    
//   return (
//     <div id="navbar" className=" w-full 
//     h-14  fixed opacity-0 ">
//          <nav className="bg-white h-full flex justify-between w-11/12 mx-auto rounded-xl absolute top-6 left-4 sm:left-16 sm:h-[5rem]">
//         <h2 id="title"  className=" opacity-1 title text-3xl font-semibold text-left mr-3 pt-2 pl-4 sm:text-5xl ">Trripy</h2>
//         {/* for mobile */}
        

//         {/* for Pc  */}
//                 <ul className="sm:flex hidden gap-3" >
//                 {
//                     MenuItems.map((items,index)=>(
//                         <li className="mr-16 flex items-center text-xl font-bold gap-3 "  key={index}>
//                             <div className="hover:bg-black hover:text-white hover:p-3 hover:duration-500 hover:rounded-2xl space-x-3">
//                             <i className={items.icon}/>
//                             <Link to={items.url}>
//                             {items.title}
//                             </Link>
//                             </div>
//                         </li>
//                     ))
//                 }
//                 </ul>
//                 <div className="sm:hidden" onClick={changeHandler}>
//                 {!nav?(<FaBars className="mt-5 mr-5  text-2xl" />):(<LiaTimesSolid className="mt-5 absolute right-4 text-2xl"/>)}
//                 </div>
//                 {
//                     nav && (
//                         <ul  className="w-[60rem] h-[20rem] transition-all ease-in duration-500 pt-20 flex flex-col  items-center  gap-5  bg-white">
//                             {
//                                 MenuItems.map((items,index)=>(
//                                     <li className="text-xl font-semibold space-x-4" key={index}>
//                                        <div className="hover:bg-black hover:text-white hover:p-3 hover:duration-500 hover:rounded-2xl space-x-3">
//                                        <i className={items.icon}/>
//                                        <Link to={items.url}> 
//                                         <span>{items.title}</span>
//                                         </Link>
//                                        </div>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     )
//                 }
                
                
                
                
                
               
        
        
        
        
//         </nav>

//     </div>
//   )
// }

// export default Navbar


// // const [nav, setnav] = useState(false);

// //   function changeHandler() {
// //     setnav(!nav);
// //   }

// //   return (
// //     <nav className="">
// //     <div
// //       data-aos="fade-down"
// //       data-aos-duration="1000"
// //       className="fixed  bg-black w-full h-[80px]  flex justify-between items-center px-1  "
// //     >
// //       <div>
// //         <Link onClick={() => scroll.scrollToTop()}>
// //           <img
// //             src={logo}
// //             className="  md:left-4  object-cover  h-[300px]"
// //           />
// //         </Link>
// //       </div>
// //       <ul className="text-[#AC49FF] md:mr-5 hidden md:flex md:gap-5 md:font-bold md:text-xl ">
// //         {headers.map((item) => {
// //           return (
// //             <a href={item.url}
// //               key={item.title}
// //               className="flex hover:underline hover:decoration-white hover:decoration-2 items-center gap-2"
// //             >
// //               {item.icon} <a href={item.url}>{item.title}</a>
// //             </a>
// //           );
// //         })}
// //       </ul>
// //       <div className="md:hidden z-10" onClick={changeHandler}>
// //         {!nav ? (
// //           <FaBars className="text-white" />
// //         ) : (
// //           <LiaTimesSolid className="text-white" />
// //         )}
// //       </div>
// //       {/* for mobile */}
// //       {nav && (
// //         <ul className="text-[#AC49FF] absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center">
// //           {headers.map((items) => {
// //             return (
// //               <li 
              
// //                 onClick={changeHandler}
// //                 className="flex items-center gap-3 my-3"
// //                 key={items.title}
// //               >
// //                 {items.icon}{" "}
// //                 <a href={items.url} >
// //                   {items.title}
// //                 </a>
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       )}
// //     </div>
// //     {/* <div className="w-full"></div> */}
// //   </nav>
// // );
// // }









import { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import MenuItems from "./MenuItems";
import { FaBars } from "react-icons/fa6";
import gsap from "gsap";
import { Link } from "react-router-dom";

function Navbar() {
 

  const [nav, setNav] = useState(false);

  function changeHandler() {
    setNav(!nav);
  }

  return (
    <div id="navbar" className="w-full h-14 fixed ">
      <nav className="bg-white h-full flex justify-between w-11/12 mx-auto rounded-xl absolute top-6 left-4 sm:left-16 sm:h-[5rem]">
        <h2 className="title text-3xl font-semibold text-left mr-3 pt-2 pl-4 sm:text-5xl">
          Trripy
        </h2>
        {/* for mobile */}

        {/* for Pc  */}
        <ul className="sm:flex hidden gap-3">
          {MenuItems.map((items, index) => (
            <li className="mr-16 flex items-center text-xl font-bold gap-3" key={index}>
              <div className="hover:bg-black hover:text-white hover:p-3 hover:duration-500 hover:rounded-2xl space-x-3">
                <i className={items.icon} />
                <Link to={items.url}>{items.title}</Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="sm:hidden" onClick={changeHandler}>
          {!nav ? (
            <FaBars className="mt-5 mr-5 text-2xl" />
          ) : (
            <LiaTimesSolid className="mt-5 absolute right-4 text-2xl" />
          )}
        </div>
        {nav && (
          <ul
            id="mobile-nav"
            className="w-[60rem] h-[20rem] transition-all ease-in duration-500 pt-20 flex flex-col items-center gap-5 bg-white"
          >
            {MenuItems.map((items, index) => (
              <li className="text-xl font-semibold space-x-4" key={index}>
                <div className="hover:bg-black hover:text-white hover:p-3 hover:duration-500 hover:rounded-2xl space-x-3">
                  <i className={items.icon} />
                  <Link to={items.url}>
                    <span>{items.title}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

import { gsap } from "gsap";
import { LiaTimesSolid } from "react-icons/lia";
import MenuItems from "./MenuItems";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
 
    useEffect(()=>{
        gsap.from("#nav",{
            x:10
        })
       
    },[])


  const [nav, setNav] = useState(false);

  function changeHandler() {
    setNav(!nav);
  }

  return (
    <div  className=" w-full h-14 fixed ">
      <nav id="nav" className="bg-white h-full w-11/12 flex justify-between  mx-auto rounded-xl absolute top-6 left-4 sm:left-16 sm:h-[5rem]">
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

export default Nav;

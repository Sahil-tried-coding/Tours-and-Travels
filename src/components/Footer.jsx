import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="h-[700px] overflow-x-hidden sm:h-[500px]  space-y-5 pt-24 p-10 text-white mt-10 w-full bg-black">
        <h1 className="sm:pl-20  text-5xl font-bold">Trripy</h1>
        <p className="sm:pl-20  text-xl font-semibold">Choose Your favourite Destination</p>
        <div className="sm:pl-20  sm:justify-end sm:text-4xl sm:gap-5 flex gap-2 text-3xl">
            <FaInstagram/>
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <MdEmail/>
        </div>
        <div className="sm:flex sm:justify-evenly sm:items-start grid grid-cols-2 gap-3">
            
            <div className="flex flex-col mt-4 gap-3">
            <span className="font-bold text-2xl ">Projects</span>
                <span>ChangeLog</span>
                <span>Status</span>
                <span>Licenses</span>
                <span>All Version</span>
            </div>
            <div className="flex flex-col mt-4 gap-3">
            <span className="font-bold text-2xl ">Communty</span>
                <span>Github</span>
                <span>issues</span>
                <span>project</span>
                <span>Twitter</span>
            </div>
            
            <div className="flex flex-col mt-4 gap-3">
            <span className="font-bold text-2xl ">Help</span>
                <span>Support</span>
                <span>Troubleshooting</span>
                <span>Contact Us</span>
            </div>
            
            <div className="flex flex-col mt-4 gap-3">
            <span className="font-bold text-2xl ">Others</span>
                <span>Terms and Services</span>
                <span>Privacy Policy</span>
                <span>Licenses</span>
            </div>
            

        </div>
    </div>
  )
}

export default Footer
import { FaLinkedin, FaInstagram,FaSquareGithub,FaXTwitter  } from "react-icons/fa6";
export default function Sosmed(){
    return (
    <div>
    <div className=" ml-3 2xl:w-[70px] gap-3 flex 2xl:flex-col  2xl:ml-[450px] content-center justify-center p-3 lg:flex-wrap">
    <FaLinkedin className=" h-[35px] w-[35px] md:h-[35px] md:w-[35px] text-blue-700 " />
    <FaInstagram className="h-[35px] w-[35px] text-blue-700"/>
    <FaSquareGithub className="h-[35px] w-[35px]"/>
    <FaXTwitter className="h-[35px] w-[35px]"/>
   </div>
   </div>
)
}
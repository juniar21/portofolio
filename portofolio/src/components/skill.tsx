import { FaCss3Alt,FaHtml5,FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript,SiNextdotjs } from "react-icons/si";
export default function Skill() {
    return (
        <div>
            <p className="">My Skill</p>
            <div className="flex flex-wrap gap-3 lg:mt-5 mr-3">
                    <FaHtml5 className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] text-orange-400"/>
                    <FaCss3Alt className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] text-blue-600"/>
                    <IoLogoJavascript className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] text-yellow-400"/>
                    <RiTailwindCssFill className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] text-teal-300"/>
                    <SiTypescript className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] text-blue-800"/>
                    <SiNextdotjs className="h-[40px] w-[40px] md:h-[70px] md:w-[70px]"/>
                    <FaReact className="h-[40px] w-[40px] md:h-[70px] md:w-[70px] text-[#00ffff]"/>
                </div> 
        </div>
    )
}
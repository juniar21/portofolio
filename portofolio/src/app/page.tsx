import Motion from "@/components/motion";
import TypeAnimations from "@/components/type";
import Image from "next/image";
import { FaCss3Alt,FaHtml5,FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript,SiNextdotjs } from "react-icons/si";


export default function Home() {
  return (
   <div>
    <div className="flex flex-wrap ml-[150px] mt-[200px] mb-[100px]">
     <Motion direction="left">
     <h1 className="text-[50px] font-bold skew-x-3 animate-bounce">Hi, I am Web Developer 👋</h1>
     </Motion> 
     <Motion direction="top" delay={1}>
     <p className='word'>Halo, saya seorang pengembang front-end yang memiliki <br /> 
              passion besar dalam membangun antarmuka modern dan efisien 
              dengan Next.js dan Tailwind CSS. <br /> Saya percaya bahwa kombinasi 
              keduanya memungkinkan pengembangan yang cepat, optimal, dan estetis <br />
              tanpa mengorbankan performa. Dengan setiap baris kode, saya berusaha <br />
               menciptakan pengalaman pengguna yang responsif, ringan, dan menarik</p>
               <br />
     </Motion>
      <div className="w-[60px] gap-5 flex flex-col ml-[400px] mix-blend-multiply content-center justify-center p-3">
        <Image src={"/link.png"} alt="error" height={35} width={35}/>
        <Image src={"/insp.png"} alt="error" height={50} width={50}/>
        <Image src={"/github.png"} alt="error" height={35} width={35}/>
        <Image src={"/yt.png"} alt="error" height={35} width={35}/>
      </div>
      <div className="flex gap-3 mix-blend-multiply">
        <FaHtml5 className="h-[70px] w-[70px] text-orange-400"/>
        <FaCss3Alt className="h-[70px] w-[70px] text-blue-600"/>
        <IoLogoJavascript className="h-[70px] w-[70px] text-yellow-400"/>
        <RiTailwindCssFill className="h-[70px] w-[70px] text-teal-300"/>
        <SiTypescript className="h-[70px] w-[70px] text-blue-800"/>
        <SiNextdotjs className="h-[70px] w-[70px]"/>
        <FaReact className="h-[70px] w-[70px] text-[#00ffff]"/>
      </div> 
    </div>
      <div id="targetAbout"> 
      <TypeAnimations
      sequence={["Target About","Target selanjutnya", "Target Pertama"]}
      delay={300} />
      </div>
   </div>
  )
}

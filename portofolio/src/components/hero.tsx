import Motion from "@/components/motion";
import TypeAnimations from "@/components/type";
import Sosmed from "./sosmed";
import Skill from "./skill";


export default function Hero(){
    return (
    <div>
     <div className="ml-[50px] md:ml-[150px] mt-[150px] md:mt-[200px] mb-[100px] flex flex-wrap">
     <Motion direction="left">
     <h1 className="text-[30px] md:text-[50px] font-bold skew-x-3 animate-bounce">Hi, I am Web Developer 👋</h1>
     </Motion> 
     <Motion direction="top" delay={1}>
     <p className="text-[15px]">Halo, saya seorang pengembang front-end yang memiliki <br /> 
              passion besar dalam membangun antarmuka modern dan efisien 
              dengan Next.js dan Tailwind CSS. <br /> Saya percaya bahwa kombinasi 
              keduanya memungkinkan pengembangan yang cepat, optimal, dan estetis <br />
              tanpa mengorbankan performa. Dengan setiap baris kode, saya berusaha <br />
               menciptakan pengalaman pengguna yang responsif, ringan, dan menarik</p>
               <br />
     </Motion>
     <Sosmed />
     <Skill />
     </div>
     
      <div id="targetAbout"> 
      <TypeAnimations
      sequence={["Target About","Target selanjutnya", "Target Pertama"]}
      delay={300} />
      </div>
    </div>
    )
}
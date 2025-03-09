import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { Metadata } from "next";

export const metadata:Metadata= {
  title: "Skill",
  description: "Page Skill",
}
export default function Skill() {
  return (
    <footer>
      <div>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full p-3 justify-center text-center">
              <h1 className="text-[50px]">
                My <span className="font-bold">Skills</span>
              </h1>
              <div className="flex justify-center items-center justify-items-center content-center gap-[50px] mt-5 max-lg:grid max-lg:grid-cols-3 max-sm:place-items-center">
                <div className="h-[120px] w-[120px] border border-black p-2.5 max-sm:scale-75">
                  <IoLogoJavascript className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5 max-sm:scale-75">
                  <SiTypescript className="h-[90px] w-[90px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5 max-sm:scale-75">
                  <RiNextjsFill className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5 max-sm:scale-75">
                  <RiTailwindCssFill className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5 max-sm:scale-75">
                  <FaReact className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5 max-sm:scale-75">
                  <SiRedux className="h-[100px] w-[100px]" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

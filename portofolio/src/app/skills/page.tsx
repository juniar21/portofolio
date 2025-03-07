import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

export default function Skill() {
  return (
    <div>
      <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full justify-center text-center">
              <h1 className="text-[50px]">
                My <span className="font-bold">Skills</span>
              </h1>
              <div className="flex justify-center items-center content-center gap-4 mt-5 max-md:grid max-md:grid-cols-3 max-sm:place-items-center">
                <div className="h-[120px] w-[120px] border border-black p-2.5">
                  <IoLogoJavascript className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5">
                  <SiTypescript className="h-[90px] w-[90px]" />
                </div >
                <div className="h-[120px] w-[120px] border border-black p-2.5">
                  <RiNextjsFill className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5">
                  <RiTailwindCssFill className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5">
                  <FaReact className="h-[100px] w-[100px]" />
                </div>
                <div className="h-[120px] w-[120px] border border-black p-2.5">
                  <SiRedux className="h-[100px] w-[100px]" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
  );
}

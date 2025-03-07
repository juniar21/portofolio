"use client"
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { DiAtlassian } from "react-icons/di";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full max-w-[1100px] mx-auto h-[100px] px-4 md:flex-nowrap text-black font-bold text-sm">

      <div className="flex items-center">
        < DiAtlassian className="h-[50px] w-[40px]" />
        Juniar Arrang Bua
      </div>

    
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

    
      <div
        className={`absolute z-10 top-[100px] left-0 w-full md:mt-[80px] md:static md:flex md:w-auto md:gap-9 h-auto md:h-[100px] p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <Link href={"/"} className="block py-2 md:py-0 hover:border-b-2 text-black">About Me</Link>
        <Link href={"/skills"} className="block py-2 md:py-0 hover:border-b-2 text-black">Skills</Link>
        <Link href={"/project"} className="block py-2 md:py-0 hover:border-b-2 text-black">Project</Link>
        <Link href={"/contact"} className="block py-2 md:py-0 hover:border-b-2 text-black">Contact Me</Link>
      </div>

  
      <div className="hidden md:block">
        <button className="flex p-2 outline text-white bg-black rounded-md">Resume <MdOutlineFileDownload className="h-[20px] w-[40px]" /></button>
      </div>
    </div>
  );
}
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    return (
        <nav className="fixed w-full top-0 md:flex">
        <div className="font-bold md:h-[70px] w-[100vw] bg-[white] h-[65px] flex content-end justify-end text-black white sticky">
                <div className="flex 2xl:mr-[800px] gap-3 h-10 mt-4 ">
                 <Image src={"/5990ref.jpg"} alt="gambarprofil" width={40} height={40} className="md:rounded-full hidden md:block"/>
                 <p className="mt-2 2xl:text-[13px] mr-10 text-[5px] hidden md:block">JUNIAR ARRANG BUA</p></div>
            <div className="content-center text-center flex justify-center md:content-end gap-3 2xl:gap-6 mt-6 md:mr-[90px] 2xl:text-[13px] text-[9px] mr-8 pt-2">       
            <Link href={"/"}>HOME</Link>
            <Link href={"#targetabout"}>ABOUT</Link>
            <Link href={"/project"}>PROJECTS</Link>
            <Link href={"/contact"}>CONTACT</Link>
            </div>
        </div>
    </nav>
    )
}
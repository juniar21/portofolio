import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    return (
        <nav className="fixed w-full top-0">
        <div className="font-bold h-[70px] w-[100vw] bg-[white] flex content-end justify-end text-black bg-gradient-to-r from-purple-600 to-blue-600 sticky">
                <div className="flex mr-[800px] gap-3 h-10 mt-4 ">
                 <Image src={"/5990ref.jpg"} alt="gambarprofil" width={40} height={40} className="rounded-full"/>
                 <p className="mt-2 text-[13px] mr-10">JUNIAR ARRANG BUA</p></div>
            <div className=" flex justify-center content-end gap-6 mt-6 mr-[90px] text-[13px] ">       
            <Link href={"/"}>HOME</Link>
            <Link href={"#targetabout"}>ABOUT</Link>
            <Link href={"/project"}>PROJECTS</Link>
            <Link href={"/contact"}>CONTACT</Link>
            </div>
        </div>
    </nav>
    )
}
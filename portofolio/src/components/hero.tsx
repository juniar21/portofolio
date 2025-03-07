import Skill from "@/app/skills/page";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import TypeAnimations from "./type";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-4">
          <div className="flex flex-wrap flex-row-reverse">
            <div className="w-1/2 max-lg:w-full pb-[100px]">
              <Image
                src={"/prog.png"}
                width={600}
                height={400}
                alt="hero"
                className="border-b-4 border-black"
              />
            </div>
            <div className="w-1/2 max-lg:w-full max-sm:mt-[-50px] lg:mt-[50px] p-5">
              <div>
                <h1 className="text-[40px]">
                  <TypeAnimations sequence={["Hello I am"]} delay={300} />
                </h1>
                <h1 className="sm:text-[50px] max-sm:text-[30px]">
                  <span className="font-bold">Juniar Arrang Bua </span>
                  Frond End Developer Based in
                  <span className="font-bold"> Indonesia </span>{" "}
                </h1>
              </div>
              <div className="mt-5">
                <p>
                  I am Juniar Arrang Bua Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to
                  specimen book.
                </p>
              </div>
              <div className="flex gap-2 mt-5">
                <FaFacebookSquare className="h-[40px] w-[40px]" />
                <IoLogoDiscord className="h-[40px] w-[40px]" />
                <FaTwitterSquare className="h-[40px] w-[40px]" />
                <FaInstagramSquare className="h-[40px] w-[40px]" />
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
}

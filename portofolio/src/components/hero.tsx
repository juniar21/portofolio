import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

export default function Hero() {
  return (
    <div>
      <div className="container xl:mx-[60px] mx-auto">
        <div className="p-4">
          <div className="flex flex-wrap flex-row-reverse">
            <div className="w-1/2 max-lg:w-full pb-[100px]">
              <Image src={"/prog.png"} width={600} height={400} alt="hero" />
            </div>
            <div className="w-1/2 max-lg:w-full mt-[60px] p-5">
              <div>
                <h1 className="text-[50px]">
                  Hello I am{" "}
                  <span className="font-bold">Juniar Arrang Bua </span>
                  Frond End Developer Based in
                  <span className="font-bold"> Indonesia </span>{" "}
                </h1>
              </div>
              <div className="mt-5">
                <p>
                  I am Evren Shah Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to
                  specimen book.
                </p>
              </div>
              <div className="flex gap-2 mt-5">
                <FaFacebookSquare className="h-[50px] w-[50px]" />
                <IoLogoDiscord className="h-[50px] w-[50px]" />
                <FaTwitterSquare className="h-[50px] w-[50px]" />
                <FaInstagramSquare className="h-[50px] w-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

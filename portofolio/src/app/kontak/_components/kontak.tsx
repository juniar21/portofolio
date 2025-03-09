import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Page Kontak",
};
export default function Kontak() {
  return (
    <div>
      <div className="p-4" id="kontak">
        <div className="text-center mt-[50px] p-4 rounded-md border border-black">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 p-4 md:gap-4 gap-1 justify-items-center">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                id="name"
                className="border border-black p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                className="border border-black p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Your website"
                id="website"
                className="border border-black p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="How Can I help?"
                id="help"
                className="border border-black p-2 h-[100px] rounded-md"
              />
              <div className="flex gap-6">
                <button className="border border-black p-2 rounded-md text-white bg-black text-[20px] max-sm:text-[14px]">
                  Get In Touch
                </button>
                <div className="flex md:gap-3 gap-1 mt-5 justify-items-center">
                  <FaFacebookSquare className="h-[40px] w-[40px]" />
                  <IoLogoDiscord className="h-[40px] w-[40px]" />
                  <FaTwitterSquare className="h-[40px] w-[40px]" />
                  <FaInstagramSquare className="h-[40px] w-[40px]" />
                </div>
              </div>
            </div>

            <div className="border border-black p-4 justify-items-start text-start rounded-md max-md:mt-4">
              <p className="text-[50px] max-sm:text-[25px]">
                Lets talk for <span className="font-bold">something</span>{" "}
                special
              </p>
              <p className="mt-3">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
              <p className="text-[30px] font-semibold max-sm:text-[17px]">
                juniararrangbua@gmail.com
              </p>
              <p className="text-[30px] font-semibold max-sm:text-[17px]">
                08114213541
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

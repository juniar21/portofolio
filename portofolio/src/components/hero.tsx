import Skill from "@/app/skill/_components/skill";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import TypeAnimations from "./type";
import type { Metadata } from "next";
import Experience from "@/app/experience/_components/experience";
import About from "@/app/about/_components/about";
import Project from "@/app/project/_components/project";
import Kontak from "@/app/kontak/_components/kontak";
import Testimonial from "./testimonial";

export const metadata: Metadata = {
  title: "Hero",
  description: "Page Hero",
};

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-4">
          <div className="flex flex-wrap flex-row-reverse">
            <div className="w-1/2 max-lg:w-full pb-[100px] ">
              <Image
                src={"/prog.png"}
                width={600}
                height={400}
                alt="hero"
                className="border-b-4 border-black"
              />
            </div>
            <div className="w-1/2 max-lg:w-full max-sm:mt-[-50px] lg:mt-[25px] p-5">
              <div>
                <h1 className="text-[40px]">
                  <TypeAnimations
                    sequence={["Hello I am", "Juniar Arrang Bua"]}
                    delay={1000}
                  />
                </h1>
                <h2 className="sm:text-[50px] max-sm:text-[30px] lg:text-[60px]">
                  Frond End Developer Based in
                  <span className="font-bold"> Indonesia </span>{" "}
                </h2>
              </div>
              <div className="mt-5">
                <p>
                  I am Juniar Arrang Bua, a passionate Front-End Developer with
                  a strong focus on creating responsive and user-friendly web
                  interfaces. With experience in HTML, CSS, JavaScript, and
                  modern frameworks like React, I specialize in building
                  engaging digital experiences. My journey in web development is
                  driven by a love for clean code, intuitive design, and
                  seamless user interactions
                </p>
              </div>
              <div className="flex gap-2 mt-5 justify-items-center">
                <FaFacebookSquare className="h-[40px] w-[40px]" />
                <IoLogoDiscord className="h-[40px] w-[40px]" />
                <FaTwitterSquare className="h-[40px] w-[40px]" />
                <FaInstagramSquare className="h-[40px] w-[40px]" />
              </div>
            </div>
          </div>
          <section className="mt-[50px]" id="skill">
            <Skill />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="about">
            <About />
          </section>
          <section className="project">
            <Project />
          </section>

          <section className="testimonial">
            <Testimonial />
          </section>
          <section className="kontak">
            <Kontak />
          </section>
        </div>
      </div>
    </div>
  );
}

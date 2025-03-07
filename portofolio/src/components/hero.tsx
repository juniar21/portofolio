import Skill from "@/components/skill";
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
                  <TypeAnimations sequence={["Hello I am"]} delay={300} />
                </h1>
                <h2 className="sm:text-[50px] max-sm:text-[30px] lg:text-[60px]">
                  <span className="font-bold">Juniar Arrang Bua </span>
                  Frond End Developer Based in
                  <span className="font-bold"> Indonesia </span>{" "}
                </h2>
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
              <div className="flex gap-2 mt-5 justify-items-center">
                <FaFacebookSquare className="h-[40px] w-[40px]" />
                <IoLogoDiscord className="h-[40px] w-[40px]" />
                <FaTwitterSquare className="h-[40px] w-[40px]" />
                <FaInstagramSquare className="h-[40px] w-[40px]" />
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <Skill />
          </div>
          <div className="text-center mt-[50px] text-white bg-black p-4 rounded-md">
            <p className="text-[49px] ">
              My <span className="font-bold">Experience</span>
            </p>
            <div className="grid grid-cols-2 border border-b-2 mt-4 border-white p-4 rounded-md">
              <div className="text-start max-sm:col-span-2">
                <p>Student Intern / Digital Marketing </p>
              </div>
              <div className="text-end max-sm:col-span-2 max-sm:text-start">
                <p>Jul 2022 - Sep 2022 </p>
              </div>
              <div className="col-span-2 text-start mt-5">
                <p>
                  As a Senior Software Engineer at Google, I played a pivotal
                  role in developing innovative solutions for Googles core
                  search algorithms. Collaborating with a dynamic team of
                  engineers, I contributed to the enhancement of search accuracy
                  and efficiency, optimizing user experiences for millions of
                  users worldwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 border border-b-2 mt-4 bg-slate-600 border-white p-4 rounded-md">
              <div className="text-start">
                <p>Student Intern / Digital Marketing </p>
              </div>
              <div className="text-end">
                <p>Jul 2022 - Sep 2022 </p>
              </div>
              <div className="col-span-2 text-start mt-5">
                <p>
                  As a Senior Software Engineer at Google, I played a pivotal
                  role in developing innovative solutions for Googles core
                  search algorithms. Collaborating with a dynamic team of
                  engineers, I contributed to the enhancement of search accuracy
                  and efficiency, optimizing user experiences for millions of
                  users worldwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 border border-b-2 mt-4 border-white p-4 rounded-md">
              <div className="text-start">
                <p>Student Intern / Digital Marketing </p>
              </div>
              <div className="text-end">
                <p>Jul 2022 - Sep 2022 </p>
              </div>
              <div className="col-span-2 text-start mt-5">
                <p>
                  As a Senior Software Engineer at Google, I played a pivotal
                  role in developing innovative solutions for Googles core
                  search algorithms. Collaborating with a dynamic team of
                  engineers, I contributed to the enhancement of search accuracy
                  and efficiency, optimizing user experiences for millions of
                  users worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex border border-b-black p-4 mt-[50px] gap-[30px]">
            <div>
              <Image
                src={"/vektor2.png"}
                width={800}
                height={800}
                alt="vektor"
              />
            </div>
            <div>
              <p className="text-[50px]">
                About<span className="font-bold"> Me</span>
              </p>
              <p className="mt-[30px]">
                I am a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me. <br />I began my journey as a web developer in 2015, and
                since then, I have continued to grow and evolve as a developer,
                taking on new challenges and learning the latest technologies
                along the way. Now, in my early thirties, 7 years after starting
                my web development journey, I am building cutting-edge web
                applications using modern technologies such as Next.js,
                TypeScript, Nestjs, Tailwindcss, Supabase and much more. <br />
                When I am not in full-on developer mode, you can find me
                hovering around on twitter or on indie hacker, witnessing the
                journey of early startups or enjoying some free time. You can
                follow me on Twitter where I share tech-related bites and build
                in public, or you can follow me on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

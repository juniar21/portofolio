import Skill from "@/components/skill";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import TypeAnimations from "./type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
              <div className="max-sm:col-span-2 max-sm:text-start text-end">
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
              <div className="text-start max-sm:col-span-2">
                <p>Student Intern / Digital Marketing </p>
              </div>
              <div className="max-sm:col-span-2 max-sm:text-start text-end">
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
              <div className="text-start max-sm:col-span-2">
                <p>Student Intern / Digital Marketing </p>
              </div>
              <div className="max-sm:col-span-2 max-sm:text-start text-end">
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
          <div className="md:flex border border-black p-4 mt-[50px] gap-[30px] hover:scale-110 rounded-md">
            <div>
              <Image
                src={"/vektor2.png"}
                width={1000}
                height={1000}
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
          <section className="My Projects">
            <div className="p-4">
              <div className="text-center mt-[50px] text-white bg-black p-4 rounded-md">
                <p className="text-[49px] ">
                  My <span className="font-bold">Projects</span>
                </p>
                <div className="grid grid-cols-2 max-md:grid-cols-1 p-2 lg:justify-items-center">
                  <div className="flex flex-wrap">
                    <Image
                      src={"/projects.png"}
                      width={300}
                      height={300}
                      alt="projects"
                      className="max-md:w-full max-sm:aspect-square"
                    />
                    <Image
                      src={"/projects.png"}
                      width={300}
                      height={300}
                      alt="projects"
                      className="max-2xl:hidden"
                    />
                  </div>
                  <div className="justify-items-start text-start p-2 xl:pr-[200px]">
                    <p className="text-[45px] font-bold">01</p>
                    <p className="text-[20px] font-bold">
                      Blog Website Template
                    </p>
                    <p>
                      I am Evren Shah Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to specimen book.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 p-2 lg:justify-items-center">
                  <div className="flex flex-wrap">
                    <Image
                      src={"/projects.png"}
                      width={300}
                      height={300}
                      alt="projects"
                      className="max-md:w-full max-sm:aspect-square"
                    />
                    <Image
                      src={"/projects.png"}
                      width={300}
                      height={300}
                      alt="projects"
                      className="max-2xl:hidden"
                    />
                  </div>
                  <div className="justify-items-start text-start p-2 xl:pr-[200px] md:row-start-1">
                    <p className="text-[45px] font-bold">02</p>
                    <p className="text-[20px] font-bold">
                      Blog Website Template
                    </p>
                    <p>
                      I am Evren Shah Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to specimen book.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 p-2 lg:justify-items-center">
                  <div className="flex flex-wrap ">
                    <Image
                      src={"/projects.png"}
                      width={300}
                      height={300}
                      alt="projects"
                      className="max-md:w-full max-sm:aspect-square"
                    />
                    <Image
                      src={"/projects.png"}
                      width={300}
                      height={300}
                      alt="projects"
                      className="max-2xl:hidden"
                    />
                  </div>
                  <div className="justify-items-start text-start p-2 xl:pr-[200px]">
                    <p className="text-[45px] font-bold">03</p>
                    <p className="text-[20px] font-bold">
                      Blog Website Template
                    </p>
                    <p>
                      I am Evren Shah Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industrys standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonial">
            <div className="p-4">
              <div className="text-center mt-[50px] p-4 rounded-md border border-black">
                <p className="text-[45px] ">
                  My <span className="font-bold">Testimonial</span>
                </p>
                <div className="grid lg:grid-cols-3 max-lg:grid-cols-1 gap-2">
                  <div className="p-6 justify-items-center">
                    <div className="justify-items-center border border-black p-4 rounded-md">
                      <Avatar className="size-[70px] mt-5">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="mt-3 text-[20px] max-sm:text-[15px]">
                        I recently had to jump on 10+ different calls across
                        eight different countries to find the right owner.
                      </p>
                      <p>--------------------</p>
                      <p className="font-bold text-[30px] max-sm:text-[25px]">
                        John Doe
                      </p>
                      <p className="text-[30px] max-sm:text-[25px]">Designer</p>
                    </div>
                  </div>
                  <div className="p-6 justify-items-center">
                    <div className="justify-items-center border border-black bg-black text-white p-4 rounded-md">
                      <Avatar className="size-[70px] mt-5">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="mt-3 text-[20px] max-sm:text-[15px]">
                        I recently had to jump on 10+ different calls across
                        eight different countries to find the right owner.
                      </p>
                      <p>--------------------</p>
                      <p className="font-bold text-[30px] max-sm:text-[25px]">
                        John Doe
                      </p>
                      <p className="text-[30px] max-sm:text-[25px]">Designer</p>
                    </div>
                  </div>
                  <div className="p-6 justify-items-center">
                    <div className="justify-items-center border border-black p-4 rounded-md">
                      <Avatar className="size-[70px] mt-5">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="mt-3 text-[20px] max-sm:text-[15px]">
                        I recently had to jump on 10+ different calls across
                        eight different countries to find the right owner.
                      </p>
                      <p>--------------------</p>
                      <p className="font-bold text-[30px] max-sm:text-[25px]">
                        John Doe
                      </p>
                      <p className="text-[30px] max-sm:text-[25px]">Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="kontak">
            <div className="p-4">
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
                      I seek to push the limits of creativity to create
                      high-engaging, user-friendly, and memorable interactive
                      experiences.
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
          </section>
          
        </div>
      </div>
    </div>
  );
}

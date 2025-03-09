import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "Page Project",
};

export default function Project() {
  return (
    <div>
      <div className="p-4">
        <div className="text-center mt-[50px] text-white bg-black p-4 rounded-md">
          <p className="text-[49px] ">
            My <span className="font-bold">Projects</span>
          </p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 p-2 lg:justify-items-center">
            <div className="flex flex-wrap gap-1">
              <Image
                src={"/blog.jpg"}
                width={300}
                height={300}
                alt="projects"
                className="max-md:w-full max-sm:aspect-square rounded-md"
              />
              <Image
                src={"/blog2.jpg"}
                width={300}
                height={300}
                alt="projects"
                className="max-2xl:hidden rounded-md"
              />
            </div>
            <div className="justify-items-start text-start p-2 xl:pr-[200px]">
              <p className="text-[45px] font-bold">01</p>
              <p className="text-[20px] font-bold">Blog Website</p>
              <p>
                Creating blog websites using Next.js and Tailwind CSS. With a
                strong focus on performance and user experience, I build fast,
                responsive, and SEO-friendly blogs that not only look great but
                also provide an exceptional reading experience. By leveraging
                Next.js for server-side rendering and Tailwind CSS for flexible,
                mobile-first design, I ensure that every blog I create is
                visually appealing and optimized for all devices.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 p-2 lg:justify-items-center">
            <div className="flex flex-wrap gap-1">
              <Image
                src={"/comp.jpg"}
                width={300}
                height={300}
                alt="projects"
                className="max-md:w-full max-sm:aspect-square rounded-md"
              />
              <Image
                src={"/comp2.jpg"}
                width={300}
                height={300}
                alt="projects"
                className="max-2xl:hidden rounded-md"
              />
            </div>
            <div className="justify-items-start text-start p-2 xl:pr-[200px] md:row-start-1">
              <p className="text-[45px] font-bold">02</p>
              <p className="text-[20px] font-bold">Company Profile</p>
              <p>
                Creating professional and visually appealing company profile
                websites. With expertise in modern web technologies, I design
                and develop websites that effectively showcase a company’s
                identity, services, and values. My goal is to build
                user-friendly, responsive, and engaging digital platforms that
                enhance brand presence and credibility in the online world, and
                create with wordpress.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 p-2 lg:justify-items-center">
            <div className="flex flex-wrap gap-1">
              <Image
                src={"/compco.jpg"}
                width={300}
                height={300}
                alt="projects"
                className="max-md:w-full max-sm:aspect-square rounded-md"
              />
              <Image
                src={"/compco2.jpg"}
                width={300}
                height={300}
                alt="projects"
                className="max-2xl:hidden rounded-md"
              />
            </div>
            <div className="justify-items-start text-start p-2 xl:pr-[200px]">
              <p className="text-[45px] font-bold">03</p>
              <p className="text-[20px] font-bold">Company Profile Cafe</p>
              <p>
                Creating professional company profile websites using Next.js and
                Tailwind CSS. With expertise in modern web development, I design
                and build responsive, high-performance websites that effectively
                showcase your business, products, and services. Using Next.js
                for fast server-side rendering and Tailwind CSS for sleek,
                customizable designs, I ensure your website is both visually
                appealing and optimized for the best user experience on any
                device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

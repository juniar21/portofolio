import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Page About",
};
export default function About() {
  return (
    <div>
      <div className="md:flex border border-black p-4 mt-[50px] gap-[30px] hover:scale-110 rounded-md">
        <div>
          <Image src={"/pic.jpg"} width={500} height={500} alt="vektor" />
        </div>
        <div>
          <p className="text-[50px]">
            About<span className="font-bold"> Me</span>
          </p>
          <p className="mt-[30px]">
            I am a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me. <br />I began my
            journey as a web developer in 2021, and since then, I have continued
            to grow and evolve as a developer, taking on new challenges and
            learning the latest technologies along the way. Now, in my early
            thirties, 4 years after starting my web development journey, I am
            building cutting-edge web applications using modern technologies
            such as Next.js, TypeScript, Tailwindcss, Backendless and much
            more. <br />
            When I am not in full-on developer mode, you can find me hovering
            around on twitter or on indonesia, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}

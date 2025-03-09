import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Home",
  description: "Page Home",
}

export default function Home() {
  return (
   <div>
    <Hero/>
   </div>
  )
}

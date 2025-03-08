import { DiAtlassian } from "react-icons/di";

export default function Footer() {
    return (
        <div>
            <section className="footer ">
            <div className="bg-black">
              <div className="text-center mt-[50px] p-4 rounded-md text-white">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 md:gap-4 gap-1 justify-items-center">
                  <div className="flex items-center">
                    <DiAtlassian className="h-[50px] w-[40px]" />
                    Juniar Arrang Bua
                  </div>
                  <div>
                    <p>@ 2019-2023 Personal</p>
                    <p>Inspired by Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}
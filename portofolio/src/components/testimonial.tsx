import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Testimonial() {
  return (
    <div>
      <div className="p-4">
        <div className="text-center mt-[50px] p-4 rounded-md border border-black">
          <p className="text-[45px] ">
            My <span className="font-bold">Testimonial</span>
          </p>
          <div className="grid lg:grid-cols-3 max-lg:grid-cols-1 gap-2">
            <div className="p-6 justify-items-center">
              <div className="border border-black p-4 rounded-md justify-items-center text-center hover:scale-110">
                <Avatar className="size-[70px] mt-5">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="mt-3 text-[20px] max-sm:text-[15px]">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
                </p>
                <p>--------------------</p>
                <p className="font-bold text-[30px] max-sm:text-[25px]">
                  John Doe
                </p>
                <p className="text-[30px] max-sm:text-[25px]">Designer</p>
              </div>
            </div>
            <div className="p-6 justify-items-center">
              <div className="justify-items-center border border-black bg-black text-white p-4 rounded-md hover:scale-110">
                <Avatar className="size-[70px] mt-5">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="mt-3 text-[20px] max-sm:text-[15px]">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
                </p>
                <p>--------------------</p>
                <p className="font-bold text-[30px] max-sm:text-[25px]">
                  John Doe
                </p>
                <p className="text-[30px] max-sm:text-[25px]">Designer</p>
              </div>
            </div>
            <div className="p-6 justify-items-center">
              <div className="justify-items-center border border-black p-4 rounded-md hover:scale-110">
                <Avatar className="size-[70px] mt-5">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="mt-3 text-[20px] max-sm:text-[15px]">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
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
    </div>
  );
}

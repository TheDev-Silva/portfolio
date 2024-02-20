import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="w-full h-[150px] px-8 flex items-center  justify-between hover:shadow-lg duration-500 hover:h-[160px]">
        <div className="w-[50%] flex items-center gap-4">
          <div className="min-w-14 flex items-end bg-orange-500 p-2 rounded-xl hover:rounded-xl hover:duration-700 hover:rotate-12 overflow-hidden">
            <Image
              src="/banner-bolo-confeitados.png"
              alt="foto"
              width={500}
              height={500}
              className="w-14 hover:scale-150 hover:duration-700 transition-transform hover:rotate-12"
            />
          </div>
          <h1 className="font-Bebas_Neue text-4xl text-white tracking-widest">silva developer</h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex gap-4 ">
            <Link href="/" className="min-w-24 max-w-32 flex items-center justify-center font-normal text-md hover:text-white hover:duration-500 uppercase">Home
            </Link>
            <Link href="/about" className="min-w-24 max-w-32 flex items-center justify-center font-normal text-md hover:text-white hover:duration-500 uppercase">About 
            </Link>
            <Link href="/portifolio" className="min-w-24 max-w-32 flex items-center justify-center font-normal text-md hover:text-white hover:duration-500 uppercase">Portifólio 
            </Link>
            <Link href="/contact" className="min-w-24 max-w-32 flex items-center justify-center font-normal text-md hover:text-white hover:duration-500 uppercase after:w-26 ">contatos 
            </Link>

          </div>
          <div className="w-full flex justify-end">
            <Button className="bg-orange-500 text-black hover:text-white font-semibold w-24 items uppercase">Let's Go!</Button>
          </div>
        </div>
      </div>
  );
}

export default HeaderPage;
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex  bg-gradient-to-br from-slate-500 to-gray-200">
      {/* header */}
      <div className="w-full h-[150px] px-8 grid grid-cols-2 items-center  justify-between">
        <div className="w-full flex items-center gap-4">
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
        <div className="w-full flex items-center justify-between ">
          <div className="w-full flex gap-4 ">
            <Link href="/">
              <Button className="min-w-24 max-w-32 rounded-lg hover:bg-gray-50 hover:text-black uppercase">Home</Button>
            </Link>
            <Link href="/about">
              <Button className="min-w-24 max-w-32 rounded-lg hover:bg-gray-50 hover:text-black uppercase">About</Button>
            </Link>
            <Link href="/portifolio">
              <Button className="min-w-24 max-w-32 rounded-lg hover:bg-gray-50 hover:text-black uppercase">Portifólio</Button>
            </Link>
            <Link href="/contact">
              <Button className="min-w-24 max-w-32 rounded-lg hover:bg-gray-50 hover:text-black uppercase">contatos</Button>
            </Link>

          </div>
          <div className="w-full flex justify-end">
            <Button className="bg-orange-500 text-black hover:text-white font-semibold w-24 items uppercase">Let's Go!</Button>
          </div>
        </div>
      </div>

    </div>
  );
}

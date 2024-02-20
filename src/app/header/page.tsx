import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="w-full flex items-center justify-between p-10 bg-gradient-to-br from-slate-300 to-black">
      <div className="flex items-center gap-4">
        <div className="min-w-14 flex items-end bg-orange-500 p-2 rounded-xl hover:rounded-xl hover:duration-700 hover:rotate-12 overflow-hidden">
          <Image
            src="/banner-bolo-confeitados.png"
            alt="foto"
            width={500}
            height={500}
            className="w-14 hover:scale-150 hover:duration-700 transition-transform hover:rotate-12 "
          />
        </div>
        <h1 className="font-Bebas_Neue text-4xl">silva developer</h1>
      </div>
      <div className="flex gap-4">
        <Link href="/">
          <Button className="min-w-24 max-w-32 rounded-lg">Home</Button>
        </Link>
        <Link href="/about">
          <Button className="min-w-24 max-w-32 rounded-lg">About</Button>
        </Link>
        <Link href="/portifolio">
          <Button className="min-w-24 max-w-32 rounded-lg">Portifólio</Button>
        </Link>
        <Link href="/contact">
          <Button className="min-w-24 max-w-32 rounded-lg">contatos</Button>
        </Link>
        
      </div>
      <Button className="bg-orange-500">Let's Go!</Button>
    </div>
  );
}

export default HeaderPage;
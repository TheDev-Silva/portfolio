import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeaderPage from "./header/page";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#56B0F8] to-[#24476A]">
      {/* header */}
      <HeaderPage />
      <div className="grid grid-cols-2 p-8">
        <div>
          <h1 className="text-6xl font-Geometr415_Blk_BT">Germano Silva,</h1>
          <p className="text-[20px] pt-6 text-white">
            Desenvolvedor Front-End, Residindo em Curitiba-PR
          </p>
        </div>

      </div>
    </div>
  );
}

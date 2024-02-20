import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeaderPage from "./header/page";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#56B0F8] to-[#24476A]">
      {/* header */}
      <HeaderPage />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="uppercase text-6xl">germano silva,</h1>
        </div>

      </div>
    </div>
  );
}

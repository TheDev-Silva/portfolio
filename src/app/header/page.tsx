import Image from "next/image";

const HeaderPage = () => {
  return (
    <div className="w-full flex items-center justify-between p-10">
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
      <div>
        
      </div>

    </div>
  );
}

export default HeaderPage;
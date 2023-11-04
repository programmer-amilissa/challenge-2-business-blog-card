import Image from "next/image";
import "../styles/fonts.css";

export default function Home() {
  return (
    <main className="flex font-lato min-h-screen flex-col bg-light items-center  p-36">
      <div className="z-10 max-w-5xl w-96 min-h-[500px] bg-white rounded-xl items-center text-sm">
        <div className="relative flex w-full h-full">
          <Image
            width={0}
            height={0}
            objectFit="cover"
            className="rounded-xl"
            layout="responsive"
            src={"/hero-image-business-card.png"}
            alt="hero-image-business-card"
          />
          <div className="absolute bottom-[-1px] transform scale-[1.001]">
            <Image
              width={0}
              height={0}
              objectFit="cover"
              layout="responsive"
              className=""
              src={"/white-overlay.svg"}
              alt="white-overlay"
            />
          </div>
        </div>

        <div className="m-5">
          <span className="text-dark text-2xl">
            Perfect solution for small business
          </span>
          <div className="text-dark-2 my-3 text-md flex flex-col">
            <span>Small businesses need to generate leads to grow.</span>
            <span>You can use tools like Ringy.</span>
          </div>
        </div>
        <div className="border-light border-[0.5px]"></div>

        <div className="flex m-5">
          <div className="flex flex-col">
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={"/avatar-image-business-card.png"}
              alt="avatar-image-business-card"
            />
          </div>
          <div className="flex flex-col pl-4 pt-3">
            <span className="text-dark text-xs ">Amy Burgess</span>
            <span className="text-dark-2 text-xs">Customer Manager, Solution Oy</span>
          </div>
        </div>
      </div>
    </main>
  );
}

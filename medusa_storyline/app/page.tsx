import Image from "next/image";
import medusaHead from "../public/medusa_head.png";
import logo from "../public/logo.png";
import GoldenLine from "./components/GoldenLine";
import Card from "./components/Card";

export default function Home() {
  const curve1 = "M0 100 C 250 0, 500 200, 750 100 C 1000 0, 1250 200, 1500 100";
  return (
    <div className="relative flex flex-col items-center w-full justify-center h-screen">
      <div className="flex flex-start items-center w-[90%] justify-between">
        <Image
          src={logo}
          alt="Medusa"
          className="z-10 relative"
          width={140}
          height={140}
        />
      </div>
      <h1 className="animated-gradient-text absolute top-[50%] translate-y-[-50%] text-white font-marcellus text-[128px] leading-none glow-text w-[90%] flex justify-between">
        <span>M</span>
        <span>E</span>
        <span>D</span>
        <span>U</span>
        <span>S</span>
        <span>A</span>
      </h1>
      <Image
        src={medusaHead}
        alt="Medusa"
        className="z-10 relative"
        width={500}
        height={500}
      />
      <h1 className="text-[24px] font-marcellus text-white mt-4 tracking-[0.3em]">
        The Serpent Goddess
      </h1>
      <GoldenLine d={curve1} />
    </div>

  );
}

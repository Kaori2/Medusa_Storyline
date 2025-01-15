import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  src: StaticImageData;
  classname: string;
  alt: string;
  type: "A" | "B"; 
}

export default function Card({ title, description, src, classname, alt, type }: CardProps) {
  return (
    <div
      className={`flex ${
        type === "A" ? "flex-row" : "flex-row-reverse"
      } items-center justify-between px-[10%]`}
    >
      <div
        className={`flex flex-col ${
          type === "A" ? "items-start text-left" : "items-end text-right"
        }`}
      >
        <h1 className="font-marcellus text-[32px] tracking-[0.1em] text-white">
          {title}
        </h1>
        <span className="font-marcellus text-[24px] tracking-[0.1em] text-white">
          {description}
        </span>
      </div>
      <Image src={src} className={classname} alt={alt} />
    </div>
  );
}

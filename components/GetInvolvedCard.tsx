import Image, { StaticImageData } from "next/image";
import mypic from "@/public/imgs/2024_OC.png"

type CardProps = {
  image: StaticImageData
  quote: string;
  name: string;
  position?: string;
  className?:string;
};

export const GetInvolvedCard = ({ name, quote, position, className,image }: CardProps) => {
  return (
    <div className={`flex flex-col p-5 rounded-2xl shadow-[0px_0px_9px_1.5px_rgba(0,0,0,0.3)] bg-white  min-w-[350px] md:min-w-[400px] ${className}`}>
        <Image className="rounded-2xl mb-4 aspect-square object-cover" src={image} alt={""} ></Image>
      <p className="text-gray-700 mb-8">{quote}</p>
      <div className="flex flex-col text-gray-500 mt-auto">
        <strong>{name}</strong> 
        <span>{position}</span>
      </div>
    </div>
  );
};

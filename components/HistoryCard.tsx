import Image, { StaticImageData } from "next/image";
import mypic from "@/public/imgs/2024_OC.png"

type CardProps = {
  image: StaticImageData
  title: string;
  description: string;
  winner: string;
  className?: string;
};

export const CompetitionCard = ({ title, description, winner, className,image }: CardProps) => {
  return (
    <div className={`flex flex-col p-4 rounded-2xl shadow-md bg-white min-w-[350px] ${className}`}>
        <Image className="rounded-2xl mb-4 aspect-[23/15] object-cover" src={image} alt={""} ></Image>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-gray-500">
        <strong>Winner:</strong> {winner}
      </div>
    </div>
  );
};

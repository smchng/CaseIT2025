import Image, { StaticImageData } from "next/image";

type CardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  winner: string;
  className?: string;
};

export const CompetitionCard = ({
  title,
  description,
  winner,
  className,
  image,
}: CardProps) => {
  return (
    <div
      className={`flex flex-col p-4 rounded-2xl shadow-[0px_0px_9px_1.5px_rgba(0,0,0,0.3)] bg-white md:min-w-[350px] ${className}`}
    >
      <Image
        className="rounded-2xl mb-4 aspect-[23/15] object-cover"
        src={image}
        alt={""}
      ></Image>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-gray-500 mt-auto">
        <strong>Winner:</strong> {winner}
      </div>
    </div>
  );
};

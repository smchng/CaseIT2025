import Image from "next/image";
type textItems = {
  text: string;
};

export const TextDot = ({ text }: textItems) => {
  return (
    <div className="flex items-baseline">
      <div className="font-bold text-2xs md:text-sm">{text}</div>
      <span className="ml-1">
        <Image src="/svgs/redDot.svg" alt="red dot" width="8" height="8" />
      </span>
    </div>
  );
};

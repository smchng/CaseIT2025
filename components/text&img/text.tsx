import Image from "next/image";
import { ReactNode } from "react";

type textItems = {
  text?: string;
  dotText?: ReactNode;
};

export const Header1 = ({ text }: textItems) => {
  return <h1 className="font-bold text-lg md:text-xl">{text}</h1>;
};

export const Header2 = ({ text }: textItems) => {
  return <div className="font-semibold text-2xs md:text-sm">{text}</div>;
};

export const Header3 = ({ text }: textItems) => {
  return <div className="font-semibold text-2xs md:text-sm">{text}</div>;
};
export const Header3Red = ({ text }: textItems) => {
  return (
    <div className="font-semibold text-2xs md:text-sm text-redLight">
      {text}
    </div>
  );
};
export const Paragraph = ({ text }: textItems) => {
  return <div className="text-2xs">{text}</div>;
};

export const TextDot = ({ dotText }: textItems) => {
  return (
    <div className="flex items-baseline">
      <div>{dotText}</div>
      <span className="ml-1">
        <Image src="/svgs/redDot.svg" alt="red dot" width="8" height="8" />
      </span>
    </div>
  );
};

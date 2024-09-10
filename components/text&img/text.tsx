import Image from "next/image";
import { ReactNode } from "react";

type textItems = {
  title?: string;
  text?: string;
  subtext?: string;
  dotText?: ReactNode;
  stylingClasses?: string;
};

export const Header1 = ({ text, stylingClasses }: textItems) => {
  return (
    <h1 className={`${stylingClasses} font-bold text-lg md:text-xl`}>{text}</h1>
  );
};

export const Header2 = ({ text, stylingClasses }: textItems) => {
  return (
    <div className={`${stylingClasses} font-semibold text-2xs md:text-sm`}>
      {text}
    </div>
  );
};

export const Header3 = ({ text, stylingClasses }: textItems) => {
  return (
    <div className={`${stylingClasses} font-semibold text-2xs md:text-sm`}>
      {text}
    </div>
  );
};
export const Paragraph = ({ text, stylingClasses }: textItems) => {
  return <div className={`${stylingClasses} text-2xs`}>{text}</div>;
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

export const BlackHeaderText = ({ title, text }: textItems) => {
  return (
    <div>
      <Header3 text={title} />
      <div className="max-w-[50vw] pb-[2vh]">
        <Paragraph text={text} />
      </div>
    </div>
  );
};

export const BlackHeaderTextOC = ({ title, text, subtext }: textItems) => {
  return (
    <div>
      <Header3 text={title} />
      <div className="max-w-[50vw] pb-[2vh]">
        <Paragraph text={text} />
      </div>
      <p>
        <strong>{subtext}</strong>
      </p>
    </div>
  );
};

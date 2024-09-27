import Image from "next/image";
import { ReactNode } from "react";

type textItems = {
  title?: string;
  text?: string;
  subtext?: string;
  dotText?: ReactNode;
  stylingClasses?: string;
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

export const OCText = ({ title, text, subtext }: textItems) => {
  return (
    <div>
      <div className="text-header3">{title}</div>
      <div className="md:max-w-[50vw] pb-[2vh] pr-[3vw]">
        <div className="text-paragraph">{text}</div>
      </div>
      <p>
        <strong>{subtext}</strong>
      </p>
    </div>
  );
};

export const RecapText = ({ title, text }: textItems) => {
  return (
    <div>
      <div className="text-header4">{title}</div>
      <div className="md:max-w-[50vw] pb-[2vh] ">
        <div className="text-paragraph">{text}</div>
      </div>
    </div>
  );
};

export const SponsorText = ({ title, text }: textItems) => {
  return (
    <div>
      <div className="text-header3 text-red">{title}</div>
      <div className="md:max-w-[50vw] pb-[2vh] pr-[3vw]">
        <div className="text-paragraph">{text}</div>
      </div>
    </div>
  );
};

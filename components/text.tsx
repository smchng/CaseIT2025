"use client";

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
      <div className="text-header2 pb-[5vh] leading-[2.5rem]">{title}</div>
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
      <div className="text-header3">{title}</div>
      <div className="md:max-w-[50vw] pb-[2vh] ">
        <div className="text-paragraph">{text}</div>
      </div>
    </div>
  );
};

export const BoldedText = ({ text }: textItems) => {
  // Split the text using `\b` as the delimiter
  const segments = (text || "").split("\b"); // Using regex to capture \b as the delimiter

  return (
    <div>
      {segments.map((segment, index) =>
        index % 2 === 0 ? ( // Even index: normal text
          <span key={index}>{segment}</span>
        ) : (
          // Odd index: bolded text
          <span key={index} className="font-bold">
            {segment}
          </span>
        )
      )}
    </div>
  );
};

export const NewLineText = ({ text }: textItems) => {
  return (
    <div>
      {(text || "").split("\n").map((paragraph, index) => (
        <p key={index} className="pb-[5vh]">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

"use client";
import { BoldedText } from "./text";
import Image from "next/image";
type discoverITItems = {
  title?: string;
  text?: string;
  img?: string;
  subtext?: string;
  children?: React.ReactNode;
};

export const Bento = ({ children }: discoverITItems) => {
  return (
    <div className="flex flex-col p-7 bg-greyDark rounded-2xl drop-shadow-[0_0_5px_rgba(0,0,0,0.2)]">
      {children}
    </div>
  );
};

export const BentoText = ({ title, text }: discoverITItems) => {
  return (
    <div>
      <h1 className="text-header2 pb-4">{title}</h1>
      <BoldedText text={text} />
    </div>
  );
};

export const TourBento = ({
  title,
  text,
  img,
  subtext,
  children,
}: discoverITItems) => {
  return (
    <div className="flex flex-col  lg:flex-row lg:space-x-20 p-10 py-12 bg-greyDark rounded-2xl drop-shadow-[0_0_5px_rgba(0,0,0,0.2)]">
      <div className=" flex flex-col space-y-3 pb-12 lg:pb-0">
        <div className="text-[18px] font-bold ">{subtext}</div>
        <div className="text-red text-header2">{title}</div>
        <div className="text-paragraph">{text}</div>
        <div className="text-paragraph">{children}</div>
      </div>
      <Image
        src={img || "/imgs/Downtown-Vancouver.png"}
        alt="its an image"
        width={606} // Original aspect ratio width
        height={908} // Original aspect ratio height
        className="rounded-xl  max-w-[45vw] lg:max-w-[25vw]"
      />
    </div>
  );
};

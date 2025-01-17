"use client";
import { BoldedText } from "./text";
type discoverITItems = {
  title?: string;
  text?: string;
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

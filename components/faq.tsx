"use client";
import Image from "next/image";
import React, { useState } from "react";

type textItems = {
  question: string;
  answer: string;
};

export const DesktopFAQ = ({ question, answer }: textItems) => {
  const [isToggleOpen, setToggleOpen] = useState(false);

  const handleToggleClick = () => {
    setToggleOpen(!isToggleOpen);
  };

  if (!answer) return;
  return (
    <div>
      <div
        className="pointer select-none flex items-center justify-between mt-[5vh] mb-[1vh] px-1 py-1 "
        onClick={handleToggleClick}
      >
        <div className="text-header4">{question} </div>
        <p className="flex-end">
          {isToggleOpen ? (
            <Image
              src="/svgs/tabArrowUp.svg"
              alt="Arrow Up"
              width={15}
              height={15}
            />
          ) : (
            <Image
              src="/svgs/tabArrowDown.svg"
              alt="Arrow Down"
              width={15}
              height={15}
            />
          )}
        </p>
      </div>
      <div className="border-t border-black"></div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isToggleOpen ? "max-h-[300px] " : "max-h-0 "
        }`}
      >
        <p className="font-normal text-left py-4 max-w-[80vw]">{answer}</p>
      </div>
    </div>
  );
};

export const MobileFAQ = ({ question, answer }: textItems) => {
  return (
    <div>
      <div className="text-header4 ">{question}</div>
      <div className="md:max-w-[100vw] py-[3vh] ">
        <div className="text-paragraph pb-[2vh]">{answer}</div>
      </div>
    </div>
  );
};

"use client";
import { ImgLeft, ImgRight } from "@/components/img";
import React, { useState } from "react";

type ribbonItems = {
  img: string;
  alt: string;
  children: React.ReactNode;
  hoverImg?: string;
};

export const ImgRibbonLeft = ({
  hoverImg,
  img,
  alt,
  children,
}: ribbonItems) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    if (hoverImg) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverImg) {
      setIsHovered(false);
    }
  };
  return (
    <div className="md:flex md:space-x-[5vw]">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ImgLeft
          img={isHovered ? hoverImg : img}
          stylingClasses="w-[90vw] md:w-[70vw] h-auto xl:rounded-2xl rounded-xl"
          alt={alt || "img description"}
        />{" "}
      </div>
      <div className=" px-7 md:px-[5vw] pr-[5vw] flex flex-col items-start justify-center">
        {children}
      </div>
    </div>
  );
};

export const ImgRibbonRight = ({
  hoverImg,
  img,
  alt,
  children,
}: ribbonItems) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    if (hoverImg) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverImg) {
      setIsHovered(false);
    }
  };
  return (
    <div className="flex flex-col-reverse md:flex-row md:space-x-[5vw]">
      {" "}
      <div className="md:px-[5vw] flex flex-col items-start justify-center px-7">
        {children}
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ImgRight
          img={isHovered ? hoverImg : img}
          stylingClasses="w-[90vw] md:w-[70vw] h-auto xl:rounded-2xl rounded-xl"
          alt={alt || "img description"}
        />{" "}
      </div>
    </div>
  );
};

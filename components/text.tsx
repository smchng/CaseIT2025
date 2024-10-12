"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type textItems = {
  title?: string;
  text?: string;
  subtext?: string;
  dotText?: ReactNode;
  children?: React.ReactNode;
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
      <div className="text-header3 pb-[5vh] leading-[2.5rem]">{title}</div>
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
      <div className="text-header3 text-red pb-[5vh] leading-[2.5rem]">
        {title}
      </div>
      <div className="md:max-w-[50vw] pb-[2vh] pr-[3vw]">
        <div className="text-paragraph">{text}</div>
      </div>
    </div>
  );
};

export const SponsorBanner = ({
  subtext,
  title,
  text,
  children,
}: textItems) => {
  const pathname = usePathname();
  return (
    <div className="w-full flex items-center justify-center md:justify-start">
      <div className="flex flex-col space-y-[2vh] max-w-[85vw] md:max-w-[50vw] xl:max-w-[40vw] mx-auto md:mx-[5vw] xl:mx-[10vw] text-left">
        <div>
          {/* MOBILE LINK */}
          <div className="md:hidden text-redDark font-bold">{subtext}</div>
          {/* DESKTOP LINK */}
          <div className="space-x-[3rem] flex text-redDark font-bold hidden md:flex mb-[1vh]">
            <Link
              href="/sponsor/Sponsor-Overview"
              className={`${
                pathname === "/sponsor/Sponsor-Overview"
                  ? "underline underline-offset-4 decoration-2"
                  : ""
              }`}
            >
              Overview
            </Link>
            <Link
              href="/sponsor/Sponsorship-Opportunities"
              className={`${
                pathname === "/sponsor/Sponsorship-Opportunities"
                  ? "underline underline-offset-4 decoration-2"
                  : ""
              }`}
            >
              Sponsorship Opportunities
            </Link>
          </div>
          <div className="text-header2">{title}</div>
        </div>
        <div className="text-paragraph">
          {(text || "").split("\b").map((segment, index) =>
            index === 0 ? (
              <span key={index}>{segment}</span> // Normal text before \b
            ) : (
              <span key={index} className="font-bold">
                {segment} {/* Bold text after \b */}
              </span>
            )
          )}
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

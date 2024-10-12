"use client";
import { RoundedButton } from "@/components/buttons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BoldedText } from "./text";
import Link from "next/link";

type sponsorItems = {
  text: string;
  link?: string;
  title?: string;
  subtext?: string;
  img?: string;
  alt?: string;
  children?: React.ReactNode;
};

export const MobileButtons = ({ text, link }: sponsorItems) => {
  return (
    <div className="flex flex-col space-y-[5px] ">
      <div className="md:hidden">
        <RoundedButton text={text} link={link || ""} variant="outline" />
      </div>
      <RoundedButton text="Talk to Our Team" link="/contact" variant="red" />
    </div>
  );
};

export const SponsorText = ({ title, text }: sponsorItems) => {
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

export const SponsorShowcaseRibbons = ({
  title,
  text,
  img,
  alt,
  subtext,
}: sponsorItems) => {
  return (
    <div className="md:max-w-[50vw] flex flex-col space-y-[3vh]">
      <div className="text-header4 text-red">{title}</div>
      <Image
        src={img || "/imgs/Downtown-Vancouver.png"}
        alt={alt || "img description"}
        width={432}
        height={83}
      />

      <div className="text-paragraph">
        {(text || "").split("\n").map((paragraph, index) => (
          <p key={index} className="pb-[5vh]">
            <BoldedText text={paragraph} />
          </p>
        ))}
      </div>
    </div>
  );
};

export const SponsorBanner = ({
  subtext,
  title,
  text,
  children,
}: sponsorItems) => {
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
          <BoldedText text={text}></BoldedText>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

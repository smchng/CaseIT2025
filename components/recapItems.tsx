"use client";
import { RoundedButton } from "@/components/buttons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BoldedText } from "./text";
import Link from "next/link";

type recapItems = {
  text?: string;
  link?: string;
  title?: string;
  subtext?: string;
  img?: string;
  alt?: string;
};

export const RecapCards = ({ title, subtext, img, alt, link }: recapItems) => {
  return (
    <Link href={link || "dummy"} className="flex flex-col">
      <div className="rounded-3xl border-redDark shadow-[0_0_15px_rgba(197,52,52,0.3)] focus:border-4 transition-all border-2 p-1">
        <div>
          <Image
            src={img || "/imgs/mediaGallery/mediaGallery.png"}
            alt={alt || "Award winners"}
            width={513}
            height={370}
            className="mx-auto w-full rounded-xl border"
          />
        </div>
        <div className="text-center py-4">
          <div className="text-header3">{title}</div>
          <div className="text-lg">{subtext}</div>
        </div>
      </div>
    </Link>
  );
};

export const ArrowButton = ({ img, alt, link }: recapItems) => {
  return (
    <Link href={link || "null"}>
      <div className="bg-buttonBlack hover:bg-buttonRedDark transition-all p-5 rounded-2xl ">
        <Image
          src={img || "/svgs/arrowButton.svg"}
          alt={alt || "red button with an arrow pointing up"}
          width={25}
          height={25}
          className="fill-transparent"
        />
      </div>
    </Link>
  );
};

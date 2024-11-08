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
      <div className="rounded-2xl border-redDark shadow-[0_0_15px_rgba(197,52,52,0.3)] focus:border-4 transition-all border-2 p-1">
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

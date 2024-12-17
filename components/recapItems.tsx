"use client";
import { RoundedButton } from "@/components/buttons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BoldedText } from "./text";

type recapItems = {
  text?: string;
  title?: string;
  subtext?: string;
  img?: string;
  alt?: string;
};

export const RecapCards = ({ title, subtext, img, alt, }: recapItems) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)] focus:border-4 transition-all p-3">
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
    </div>
  );
};

"use client";
import { RoundedButton } from "@/components/buttons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BoldedText } from "./text";
import Link from "next/link";

type galleryItems = {
  text?: string;
  link?: string;
  title?: string;
  subtext?: string;
  img?: string;
  alt?: string;
};


export const Gallery = ({ title, subtext, img, alt }: galleryItems) => {
  return (
    <div className="flex flex-col md:max-w-[80%]">
      <div className="rounded-[2rem] border-[#E7E7E7] border-2 py-2 max-w-[100%]">
        <div>
          <Image
            src={img || "/imgs/mediaGallery.png"}
            alt={alt || "Circle of people doing a cheer"}
            width={472}
            height={267}
            className="mx-auto size-[95%]"
          />
        </div>
        <div className="text-center pt-2">
          <div className="text-paragraph">{title}</div>
          <div className="text-paragraph text-greyLight pb-2">{subtext}</div>
        </div>
      </div>
    </div>
  );
};


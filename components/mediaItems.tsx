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


export const Gallery = ({ title, subtext, img, alt, link }: galleryItems) => {
  return (
    <Link href={link || "dummy"} className="flex flex-col">
      <div className="rounded-[2rem] border-[#E7E7E7] border-2 p-5">
        <div>
          <Image
            src={img || "/imgs/mediaGallery.png"}
            alt={alt || "Circle of people doing a cheer"}
            width={472}
            height={267}
            className="mx-auto w-full"
          />
        </div>
        <div className="text-center pt-2">
          <div className="text-paragraph">{title}</div>
          <div className="text-paragraph text-greyLight ">{subtext}</div>
        </div>
      </div>
    </Link>
  );
};


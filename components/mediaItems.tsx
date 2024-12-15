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

export const GalleryCards = ({
  title,
  subtext,
  img,
  alt,
  link,
}: galleryItems) => {
  return (
    <Link href={link || "dummy"} className="flex flex-col">
      <div className="rounded-2xl border-[#E7E7E7] focus:border-[#99444B] focus:border-4 hover:shadow-[0_0_15px_rgba(197,52,52,0.3)] transition-all border-2 p-1">
        <div>
          <Image
            src={img || "/imgs/mediaGallery/mediaGallery.png"}
            alt={alt || "Gallery photo"}
            width={472}
            height={267}
            className="mx-auto w-full rounded-xl border"
          />
        </div>
        <div className="text-center py-4">
          <div className="text-paragraph font-bold">{title}</div>
          <div className="text-paragraph text-greyLight ">{subtext}</div>
        </div>
      </div>
    </Link>
  );
};

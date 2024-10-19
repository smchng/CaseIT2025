import { RoundedButton } from "@/components/buttons";
import Image from "next/image";

type sponsorItems = {
  text: string;
  link?: string;
  img?: string;
  alt?: string;
};

const nullString = "";

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

export const SponsorTiles = ({ img, text, alt}: sponsorItems) => {
  return (
    <div className="flex flex-col items-center p-[1vh]">
      <Image
        src={img || "/imgs/sponsorTile.png"} 
        alt={alt || "White circle containing a sponsor logo"}
        width={315}
        height={317}
        className="drop-shadow-[0_0_33px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_0_25px_rgba(210,121,128,0.8)] transition-all size-[10vw],[15.5rem] md:w-[20vw] xl:w-[10vw]"
      />
      <text className="text-header4 pt-[0.463rem] text-[0.688rem] md:text-1 md:text-[1.5rem]">{text}</text>
    </div>
  );
};
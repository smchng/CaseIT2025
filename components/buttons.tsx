import Image from "next/image";
import Link from "next/link";

type buttonItems = {
  img?: string;
  alt?: string;
  link: string;
  text: string;
};

export const ImgButton = ({ img, alt, text, link }: buttonItems) => {
  return (
    <div className="relative group">
      {/* Top line */}

      <div className="absolute top-0 left-0 right-0 h-8 z-10 overflow-hidden">
        <div className="absolute top-0 left-10 h-2 bg-redDark transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full w-10"></div>
      </div>

      <Link href={link} className="relative block">
        <Image
          src={img || "/svgs/CaseIT_Black.svg"}
          alt={alt || "image description"}
          width={645}
          height={415}
          className="w-[30vw] h-auto"
        />
        <div className="absolute inset-0 flex items-end pl-[2vw] pb-[2vh] z-10">
          <div className="text-white">
            <p className="font-bold text-2xs md:text-xs">{text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const GreyButton = ({ text, link }: buttonItems) => {
  return (
    <div className="inline-flex items-center bg-buttonGreyLight hover:bg-black text-2xs cursor-pointer rounded-full px-5 py-2 transition-colors">
      <Link href={link}>
        <p className="text-white m-0 text-[17px]">{text}</p>
      </Link>
    </div>
  );
};

export const RedButton = ({ text, link }: buttonItems) => {
  return (
    <div className="inline-flex items-center bg-red hover:bg-redDark text-2xs cursor-pointer  rounded-full  px-5 py-2 transition-colors">
      <Link href={link}>
        <p className="text-white m-0 text-[17px]">{text}</p>
      </Link>
    </div>
  );
};

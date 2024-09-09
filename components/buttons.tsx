import Image from "next/image";
import Link from "next/link";

type buttonItems = {
  img: string;
  alt: string;
  link: string;
  text: string;
};

export const ImgButton = ({ img, alt, text, link }: buttonItems) => {
  return (
    <Link href={link} className=" relative">
      <Image
        src={img}
        alt={alt}
        width={549} // Set to 0 to allow the style attribute to take control
        height={325} // Set to 0 to allow the style attribute to take control
        style={{
          width: `30vw`,
        }}
      />
      <div className="absolute h-full inset-0 flex items-end pl-[2vw]">
        <div className="text-white">
          <h1 className="font-bold text-2xs md:text-xs">{text}</h1>
        </div>
      </div>
    </Link>
  );
};

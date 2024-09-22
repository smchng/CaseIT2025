import Image from "next/image";

type imgItems = {
  img: string;
  stylingClasses: string;
  title?: string;
  text?: string;
};

export const ImgLeft = ({ img, stylingClasses }: imgItems) => {
  return (
    <div className="relative p-7 ">
      <div className="absolute inset-0 border-2 border-redDark rounded-2xl transform -translate-x-36 -z-10"></div>
      <Image
        src={img}
        alt="img"
        width={1002} // Original aspect ratio width
        height={503} // Original aspect ratio height
        className={stylingClasses}
      />
    </div>
  );
};
export const ImgRight = ({ img, stylingClasses }: imgItems) => {
  return (
    <div className="relative p-7 overflow-hidden">
      <div className="absolute inset-0 border-2 border-redDark rounded-2xl transform translate-x-36 -z-10"></div>
      <Image
        src={img}
        alt="img"
        width={1002} // Original aspect ratio width
        height={503} // Original aspect ratio height
        className={stylingClasses}
      />
    </div>
  );
};

export const IconImg = ({ img, stylingClasses, title, text }: imgItems) => {
  return (
    <div className="flex space-x-[3vw]">
      <Image
        src={img}
        alt="img"
        width={75}
        height={75}
        className={stylingClasses}
      />
      <div>
        <div className="text-header3 text-red"> {title} </div>

        <p>{text}</p>
      </div>
    </div>
  );
};

import Image from "next/image";

type imgItems = {
  img: string;
  width: number;
  height: number;
  title?: string;
  text?: string;
};

export const ImgLeft = ({ img, width, height }: imgItems) => {
  return (
    <div className="relative p-7 w-[50vw]">
      <div className="absolute inset-0 border-2 border-redLight rounded-2xl transform -translate-x-16 -z-10"></div>
      <Image src={img} alt="img" width={width} height={height} />
    </div>
  );
};

export const IconImg = ({ img, width, height, title, text }: imgItems) => {
  return (
    <div className="flex space-x-[3vw]">
      <Image src={img} alt="img" width={width} height={height} />
      <div>
        <h1 className="font-dinProBold  text-[15px] md:text-[25px] text-redLight">
          {title}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

import Image from "next/image";

type buttonItems = {
  img: string;
  alt: string;

  text: string;
};

export const ImgButton = ({ img, alt, text }: buttonItems) => {
  return (
    <div className=" relative">
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
          <h1 className="font-dinProBold text-[15px] md:text-[20px]">{text}</h1>
        </div>
      </div>
    </div>
  );
};

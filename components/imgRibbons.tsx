import { ImgLeft, ImgRight } from "@/components/img";

type ribbonItems = {
  img: string;
  alt: string;
  children: React.ReactNode;
};

export const ImgRibbonLeft = ({ img, alt, children }: ribbonItems) => {
  return (
    <div className="md:flex xl:space-x-[5vw]">
      <ImgLeft
        img={img}
        stylingClasses="w-[90vw] md:w-[70vw] h-auto"
        alt={alt || "img description"}
      />
      <div className=" px-[5vw] pr-[5vw] flex flex-col items-start justify-center">
        {children}
      </div>
    </div>
  );
};

export const ImgRibbonRight = ({ img, alt, children }: ribbonItems) => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:space-x-[5vw]">
      {" "}
      <div className="px-[5vw] flex flex-col items-start justify-center">
        {children}
      </div>
      <ImgRight
        img={img}
        stylingClasses="w-[90vw] md:w-[70vw] h-auto"
        alt={alt || "img description"}
      />
    </div>
  );
};

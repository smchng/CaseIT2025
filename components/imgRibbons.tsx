import { ImgLeft, ImgRight } from "@/components/text&img/img";
import * as textFormat from "@/components/text&img/text";
import * as oc from "@/content/oc_content";

type ribbonItems = {
  img: string;
  alt: string;
  title?: string;
  text?: string;
  subtext?: string;
};

export const OcRibbonRight = ({
  img,
  title,
  text,
  subtext,
  alt,
}: ribbonItems) => {
  return (
    <div className="flex xl:space-x-[5vw]">
      <div className="pl-[10vw] flex flex-col items-start justify-center space-y-[20px]">
        <textFormat.BlackHeaderTextOC
          title={title}
          text={text}
          subtext={subtext}
        />
      </div>
      <ImgRight
        img={img}
        stylingClasses="w-[90vw] h-auto"
        alt={alt || "img description"}
      />
    </div>
  );
};

export const OcRibbonLeft = ({
  img,
  title,
  text,
  subtext,
  alt,
}: ribbonItems) => {
  return (
    <div className="flex xl:space-x-[5vw]">
      <ImgLeft
        img={img}
        stylingClasses="w-[90vw] h-auto"
        alt={alt || "img description"}
      />
      <div className="pr-[10vw] flex flex-col items-start justify-center space-y-[20px]">
        <textFormat.BlackHeaderTextOC
          title={title}
          text={text}
          subtext={subtext}
        />
      </div>
    </div>
  );
};

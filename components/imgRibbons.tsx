import { ImgLeft, ImgRight } from "@/components/text&img/img";
import * as textFormat from "@/components/text&img/text";
import * as oc from "@/content/oc_content";

type ribbonItems = {
  img: string;
  title?: string;
  text?: string;
  subtext?: string;
  day?: string;
};

export const OcRibbonRight = ({ img, title, text, subtext }: ribbonItems) => {
  return (
    <div className="flex xl:space-x-[5vw]">
      <div className="pl-[10vw] flex flex-col items-start justify-center space-y-[20px]">
        <textFormat.BlackHeaderTextOC
          title={title}
          text={text}
          subtext={subtext}
        />
      </div>
      <ImgRight img={img} stylingClasses="w-[90vw] h-auto" />
    </div>
  );
};

export const OcRibbonLeft = ({ img, title, text, subtext }: ribbonItems) => {
  return (
    <div className="flex xl:space-x-[5vw]">
      <ImgLeft img={img} stylingClasses="w-[90vw] h-auto" />
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

export const RecapRibbonLeft = ({ img, title, text, day }: ribbonItems) => {
  return (
    <div className="flex xl:space-x-[5vw]">
      <ImgLeft img={img} stylingClasses="w-[90vw] h-auto" />
      <div className="pr-[10vw] flex flex-col items-start justify-center space-y-[20px]">
        <textFormat.Header2 text={day} stylingClasses="text-redDark" />
        <textFormat.BlackHeaderText title={title} text={text} />
      </div>
    </div>
  );
};

export const RecapRibbonRight = ({ img, title, text, day }: ribbonItems) => {
  return (
    <div className="flex xl:space-x-[5vw]">
      <div className="pr-[10vw] flex flex-col items-start justify-center space-y-[20px]">
        <textFormat.Header2 text={day} stylingClasses="text-redDark" />
        <textFormat.BlackHeaderText title={title} text={text} />
      </div>{" "}
      <ImgLeft img={img} stylingClasses="w-[90vw] h-auto" />
    </div>
  );
};

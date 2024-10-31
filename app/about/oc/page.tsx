import { Metadata } from "next";
import Image from "next/image";
import { BgImgCenter } from "@/components/img";
import { RoundedButton } from "@/components/buttons";
import * as oc from "@/content/oc_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { OCText } from "@/components/text";

export const metadata: Metadata = {
  title: "OC Team",
  description: "Learn more about our company and team.",
};

export default function OC() {
  return (
    <div>
      <section>
        <BgImgCenter>
          <div className="text-header1">{oc.ocText.header1}</div>
          <div className="text-red font-bold pb-[4vh]">
            <div className="text-paragraph">{oc.ocText.paragraph}</div>
          </div>
          <RoundedButton text="Learn More" link="/about" variant="red" />
        </BgImgCenter>
      </section>
      <section className="flex flex-col space-y-[10vh] md:space-y-[20vh]">
        {oc.ocText.positions.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <ImgRibbonRight
                img={oc.ocText.positions[index].img}
                alt={oc.ocText.positions[index].alt}
              >
                <OCText
                  text={oc.ocText.positions[index].desc}
                  title={oc.ocText.positions[index].title}
                  subtext={oc.ocText.positions[index].names}
                />
              </ImgRibbonRight>
            ) : (
              <ImgRibbonLeft
                img={oc.ocText.positions[index].img}
                alt={oc.ocText.positions[index].alt}
              >
                <OCText
                  text={oc.ocText.positions[index].desc}
                  title={oc.ocText.positions[index].title}
                  subtext={oc.ocText.positions[index].names}
                />
              </ImgRibbonLeft>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

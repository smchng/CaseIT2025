import { Metadata } from "next";
import Image from "next/image";
import { BgImg } from "@/components/text&img/img";
import { RedButton } from "@/components/buttons";
import * as text from "@/components/text&img/text";
import * as oc from "@/content/oc_content";
import { OcRibbonLeft, OcRibbonRight } from "@/components/imgRibbons";

export const metadata: Metadata = {
  title: "OC Team",
  description: "Learn more about our company and team.",
};

export default function OC() {
  return (
    <div>
      <section>
        <BgImg>
          <div className="text-header1">{oc.ocText.header1}</div>
          <p className="text-red font-bold pb-[4vh]">
            <div className="text-paragraph">{oc.ocText.paragraph}</div>
          </p>
          <RedButton text="Learn More" link="/about" />
        </BgImg>
      </section>
      <section className="flex flex-col space-x-[2vw] space-y-[20vh]">
        {oc.ocText.positions.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <OcRibbonRight
                img={oc.ocText.positions[index].img}
                title={oc.ocText.positions[index].title}
                text={oc.ocText.positions[index].desc}
                subtext={oc.ocText.positions[index].names}
                alt={oc.ocText.positions[index].alt}
              />
            ) : (
              <OcRibbonLeft
                img={oc.ocText.positions[index].img}
                title={oc.ocText.positions[index].title}
                text={oc.ocText.positions[index].desc}
                subtext={oc.ocText.positions[index].names}
                alt={oc.ocText.positions[index].alt}
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

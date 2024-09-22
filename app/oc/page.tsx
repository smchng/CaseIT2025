import { Metadata } from "next";
import Image from "next/image";
import { ImgLeft, ImgRight } from "@/components/text&img/img";
import { RoundedButton } from "@/components/buttons";
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
      <section className="relative pb-[10vh]">
        <Image
          src="/imgs/Downtown-Vancouver.png"
          alt="Downtown Vancouver"
          className="h-auto w-screen object-cover"
          width="1441"
          height="550"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-header1">{oc.ocText.header1}</div>
          <p className="text-red font-bold pb-[4vh]">
            <div className="text-paragraph">{oc.ocText.paragraph}</div>
          </p>
          <RoundedButton text="Learn More" link="/about" variant="red" />
        </div>
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
              />
            ) : (
              <OcRibbonLeft
                img={oc.ocText.positions[index].img}
                title={oc.ocText.positions[index].title}
                text={oc.ocText.positions[index].desc}
                subtext={oc.ocText.positions[index].names}
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

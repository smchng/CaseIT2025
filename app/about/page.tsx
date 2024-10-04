import { Metadata } from "next";
import Image from "next/image";
import { ImgLeft, IconImg } from "@/components/img";
import * as text from "@/components/text";
import { ImgButton, RoundedButton, PivotButton } from "@/components/buttons";
import { ImgRibbonLeft } from "@/components/imgRibbons";
import * as about from "@/content/about_content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
};

export default function About() {
  return (
    <div>
      <section className="py-[20vh]">
        <div className="md:flex md:space-x-[2vw] xl:space-x-[5vw]">
          <ImgRibbonLeft img="/imgs/about.png" alt="team candid">
            <div className="text-header3">{about.aboutText.header3[0]}</div>
            <div className="md:max-w-[50vw] pb-[2vh]">
              <div className="md:max-w-[50vw] md:pb-[2vh] pr-[3vw] text-paragraph">
                {about.aboutText.paragraph[0]}
              </div>
            </div>
            <RoundedButton
              text="CaseIT History"
              link="/history"
              variant="black"
            />
          </ImgRibbonLeft>
        </div>
      </section>
      <section className="md:flex md:space-x-[5vw] bg-greyDark p-[5vw] space-y-[15vh] md:space-y-0">
        {about.icons.map((item, index) => (
          <IconImg
            key={index}
            img={item.img}
            stylingClasses="w-[8vw] h-auto"
            title={item.title}
            text={item.text}
            alt={item.alt}
          />
        ))}
      </section>
      <section>
        <div className="w-full justify-center flex mt-[8vh] space-x-[5px]">
          {about.titles.map((item, index) => (
            <text.TextDot
              key={index}
              dotText={<div className="text-header2">{item.title} </div>}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center w-full ">
          <Image
            src="/imgs/map.png"
            alt="map of schools"
            width={1218}
            height={637}
            className="max-w-[80vw] h-auto mx-auto"
          />
          <div className="text-center text-3xs">
            <p>
              <span className="font-bold">Disclaimer:</span>
              {about.aboutText.disclaimer}{" "}
            </p>
          </div>
        </div>{" "}
      </section>
      <section className="py-[5vh] relative">
        <Image
          src="/imgs/pivot.png"
          alt="map of schools"
          width={1436}
          height={698}
          className="w-screen h-auto"
        />
        <div className="absolute h-full inset-0 flex justify-center items-center space-x-[10vw] p-[10vw]">
          <Image
            src="/svgs/pivot.svg"
            alt="pivot banner"
            width="229"
            height="10"
          />
          <div className="text-white w-[40vw]">
            <div className="text-header3">{about.aboutText.header3[1]} </div>
            <div className="text-paragraph">
              {about.aboutText.paragraph[1]}{" "}
            </div>
            <PivotButton text="CaseIT History" link="/history" />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-[8vh]">
        <div className="text-header2">{about.aboutText.header2} </div>
        <div className="flex flex-col space-y-[2vw] md:space-y-[0] md:flex-row md:space-x-[2vw] md:pt-[2vh]">
          {about.imgButtons.map((item, index) => (
            <ImgButton
              key={index}
              img={item.img}
              alt={item.alt}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

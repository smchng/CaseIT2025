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
            <div className="text-header2">{about.aboutText.header2[1]}</div>
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
      <section className="md:flex md:space-x-[5vw] bg-greyDark  p-7 space-y-[15vh] md:space-y-0">
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
      <section className="my-[8vh]">
        {/* MOBILE */}
        <div className="md:hidden flex space-x-2 justify-center  ">
          {about.titles.map((item, index) => (
            <div key={index} className="text-header4">
              {item.title}
            </div>
          ))}
        </div>
        {/* DESKTOP */}
        <div className="hidden sm:flex w-full justify-center mt-[8vh] space-x-[5px]">
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
            width={1536}
            height={892}
            className="max-w-[80vw] h-auto mx-auto"
          />
        </div>{" "}
      </section>
      <section className=" bg-pivotBlue md:bg-transparent md:relative">
        {/* DESKTOP BG IMAGE */}
        <Image
          src="/imgs/pivot.png"
          alt="map of schools"
          width={2436}
          height={1698}
          className="w-screen h-auto hidden md:block"
        />{" "}
        <div className="md:absolute inset-0 flex flex-col md:flex-row justify-center  md:items-center space-y-[3vh] md:space-x-[10vw] py-[10vh] px-7  md:p-[10vw]">
          {" "}
          <Image
            src="/imgs/pivotMobile.png"
            alt="PIVOT comp"
            width={460}
            height={305}
            className="w-[90vw] md:hidden"
          />
          <Image
            src="/svgs/pivot.svg"
            alt="pivot banner"
            width={229}
            height={10}
            className="w-[40vw] md:w-[20vw] h-auto"
          />
          <div className="text-white md:w-[40vw]">
            <div className="text-header3 md:text-header2 pb-[2vh]">
              {about.aboutText.header2[2]}{" "}
            </div>
            <div className="text-paragraph pb-[4vh]">
              {about.aboutText.paragraph[1]}{" "}
            </div>
            <PivotButton text="Learn More About PIVOT" link="/history" />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:items-center p-7">
        <div className="text-header2">{about.aboutText.header2[0]} </div>
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

import { Metadata } from "next";
import Image from "next/image";
import { ImgLeft, IconImg } from "@/components/text&img/img";
import * as text from "@/components/text&img/text";
import { ImgButton, GreyButton } from "@/components/buttons";
import * as about from "@/content/about_content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
};

export default function About() {
  return (
    <div>
      <section className="py-[20vh]">
        <div className="flex space-x-[2vw] xl:space-x-[5vw]">
          <ImgLeft img="/imgs/about.png" stylingClasses="w-[90vw] h-auto" />
          <div className="pr-[10vw] flex flex-col items-start justify-center space-y-[20px] ">
            {/* <text.Header3 text={about.aboutText.header3} />
            <div className="max-w-[50vw] pb-[2vh]">
              <text.Paragraph text={about.aboutText.paragraph[0]} />
            </div> */}
            <text.BlackHeaderText
              text={about.aboutText.paragraph[0]}
              title={about.aboutText.header3[0]}
            />
            <GreyButton link="/history" text="CaseIT History" />
          </div>
        </div>
      </section>
      <section className="flex space-x-[5vw] bg-greyDark p-[5vw]">
        {about.icons.map((item, index) => (
          <IconImg
            key={index}
            img={item.img}
            stylingClasses="w-[8vw] h-auto"
            title={item.title}
            text={item.text}
          />
        ))}
      </section>
      <section>
        <div className="w-full justify-center flex mt-[8vh] space-x-[5px]">
          {about.titles.map((item, index) => (
            <text.TextDot
              key={index}
              dotText={<text.Header2 text={item.title} />}
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
            <text.Header3 text={about.aboutText.header3[1]} />
            <text.Paragraph text={about.aboutText.paragraph[1]} />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-[8vh]">
        <text.Header2 text={about.aboutText.header2} />
        <div className="flex space-x-[2vw] pt-[2vh]">
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

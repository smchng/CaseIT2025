import { Metadata } from "next";
import Image from "next/image";
import { ImgLeft, IconImg } from "@/components/text&img/img";
import { TextDot } from "@/components/text&img/text";
import { ImgButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
};

export default function About() {
  return (
    <div>
      <section className="py-[20vh]">
        <div className="grid grid-cols-2 gap-4">
          <ImgLeft img="/imgs/about.png" width={727} height={408} />
          <div className=" pr-[10vw] flex flex-col justify-center">
            <h1 className="font-bold  text-2xs md:text-sm">About CaseIT</h1>
            <p>
              CaseIT brings together top undergraduate students, distinguished
              faculty members, experienced industry professionals, and a
              dedicated student body to challenge conventional thinking and
              offer professional connections to benefit your business career.
            </p>
            <p className="font-medium text-redLight  text-2xs md:text-[18px] py-[5vh]">
              Learn more about CaseIT
            </p>
          </div>
        </div>
      </section>
      <section className="flex space-x-[5vw] bg-greyDark p-[5vw]">
        <IconImg
          img="/svgs/target.svg"
          width={75}
          height={75}
          title="Mission"
          text="Cultivate innovation, collaboration, and growth between competitors and the Organizing Committee. Cultivate innovation, collaboration, and growth between competitors and the Organizing Committee. "
        />
        <IconImg
          img="/svgs/eye.svg"
          width={75}
          height={75}
          title="Vision"
          text="Cultivate innovation, collaboration, and growth between competitors and the Organizing Committee. Cultivate innovation, collaboration, and growth between competitors and the Organizing Committee. "
        />
      </section>
      <section>
        <div className="w-full justify-center flex space-x-[2vw] mt-[8vh]">
          <TextDot text="One Competition" />
          <TextDot text="Global Impacts" />
        </div>
        <div className="px-[5vw]">
          <Image
            src="/imgs/map.png"
            alt="map of schools"
            width="1218"
            height="637"
          />
          <p className="text-3xs">
            Disclaimer: the world map displays all the post-secondary
            institutions that have participated in CaseIT since it inauguration
          </p>
        </div>
      </section>
      <section className="py-[5vh] relative">
        <Image
          src="/imgs/pivot.png"
          alt="map of schools"
          width="1436"
          height="698"
        />
        <div className="absolute h-full inset-0 flex justify-center items-center space-x-[10vw] p-[10vw]">
          <Image
            src="/svgs/pivot.svg"
            alt="pivot banner"
            width="229"
            height="10"
          />
          <div className="text-white">
            <h1 className="font-bold text-2xs md:text-sm">
              Our Location rendition
            </h1>
            <p className="text-2xs w-[40vw]">
              PIVOT is designed with a similar structure to its sister
              competition, CaseIT, and is tailored to top undergraduates in
              British Columbia. Built for future leaders.  PIVOT is designed
              with a similar structure to its sister competition, CaseIT, and is
              tailored to top undergraduates in British Columbia. Built for
              future leaders. 
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-[8vh]">
        <div className="font-bold text-2xs md:text-sm pb-[2vh]">
          Meet the Team
        </div>
        <div className="flex space-x-[2vw]">
          <ImgButton
            img="/imgs/2024_OC.PNG"
            alt="2024 OC team pic"
            text="2024 ORGANIZING COMMITTEE"
            link="/oc/"
          />
          <ImgButton
            img="/imgs/2024_OC.PNG"
            alt="2024 OC team pic"
            text="JOIN US"
            link="/oc/"
          />
        </div>
      </section>
    </div>
  );
}

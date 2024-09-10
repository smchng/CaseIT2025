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
      <section className="relative">
        <Image
          src="/imgs/Downtown-Vancouver.png"
          alt="Downtown Vancouver"
          className="h-auto w-screen object-cover"
          width="1441"
          height="550"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-bold leading-none text-lg md:text-xl">
            Organizing Committee
          </h1>
          <p className="text-redLight">
            <strong>Meet the team dedicated to producting CaseIT 2025</strong>
          </p>
        </div>
      </section>
      <section></section>
    </div>
  );
}

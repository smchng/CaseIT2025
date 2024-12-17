import { Metadata } from "next";
import Image from "next/image";
import chair from "@/public/imgs/caseitChair.jpg";
import signature from "@/public/imgs/chairSignature.png";
import * as chairs from "@/content/chair_content";
import { RoundedButton } from "@/components/buttons";
import { NewLineText } from "@/components/text";

export const metadata: Metadata = {
  title: "Chair's Welcome",
  description:
    "With great excitement, we are embarking on another remarkable year of CaseIT",
};

export default function Chair() {
  return (
    <main className="p-4 md:px-16 pt-36 mx-auto max-w-[1536px] overflow-hidden">
      <h2 className="font-semibold text-4xl lg:text-[4rem] tracking-tight leading-none mb-16">
        {chairs.chairText.header}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-y-[5vw] lg:gap-x-[5vw] ">
        <div className="flex flex-col gap-8 text-pretty md:col-start-1 md:col-span-2">
          {chairs.chairContent.paragraph}
          <div className="flex flex-col gap-8 text-pretty md:max-w-[58ch]">
            <Image className=" w-48" src={signature} alt="chiar signature" />
            {chairs.chairContent.signature}
          </div>
        </div>

        <Image
          className=" w-full row-start-1 md:col-start-3 col-span-2 rounded-[1rem]"
          src={chair}
          alt="portait of CaseIT 2025 Chair"
        />
      </div>

      <div className="w-full flex justify-center items-center py-[10vh]">
        <RoundedButton
          text="Return to CaseIT 2025 Page"
          link="/2025"
          variant="red"
        />
      </div>
    </main>
  );
}

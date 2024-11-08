import { Metadata } from "next";
import Image from "next/image";
import chair from "@/public/imgs/caseitChair.png";
import signature from "@/public/imgs/chairSignature.png";
import * as chairs from "@/content/chair_content";
import { RoundedButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Chair's Welcome",
  description:
    "With great excitement, we are embarking on another remarkable year of CaseIT",
};

export default function Chair() {
  return (
    <main className="  p-4 md:px-16 lg:px-32 pt-36">
      {" "}
      <h2 className="font-semibold text-header2 md:hidden mb-8">
        {chairs.chairText.header}
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 ">
        <div>
          {" "}
          <h2 className="font-semibold text-header2 hidden md:block mb-8">
            {chairs.chairText.header}
          </h2>
          <div className="flex flex-col gap-8 text-pretty max-w-[58ch]">
            {chairs.chairContent.paragraph}
          </div>{" "}
        </div>
        <div className="flex flex-col gap-8 text-pretty max-w-[58ch]">
          <Image className=" w-48" src={signature} alt="chiar signature" />
          {chairs.chairContent.signature}
        </div>
        <Image
          className=" w-full md:h-1/2 xl:h-full object-cover row-start-1 md:col-start-2"
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

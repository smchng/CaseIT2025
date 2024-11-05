import { Metadata } from "next";
import Image from "next/image";
import chair from "@/public/imgs/caseitChair.png"
import signature from "@/public/imgs/chairSignature.png"
import { chairContent } from "@/content/chair_content";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function Chair() {
  return (
    <main className="  p-4 md:px-16 lg:px-32 pt-36">
    <h2 className="font-semibold text-[3rem] md:text-[4rem] mb-8">Chair's Welcome</h2>
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 ">
      
      <div className="flex flex-col gap-8 text-pretty max-w-[58ch]">
        {chairContent.paragraph}

        <Image className=" w-48" src={signature} alt="portait of CaseIT 2025 Chair"/>
        {chairContent.signature}

        </div>

        <Image className=" w-full md:h-1/2 xl:h-full object-cover row-start-1 md:col-start-2" src={chair} alt="portait of CaseIT 2025 Chair"/>

  
    </div>
  
    </main>
  );
}

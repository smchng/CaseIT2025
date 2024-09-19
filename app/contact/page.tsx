import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as text from "@/components/text&img/text";
import { FAQ } from "@/components/faq";
import { contactText } from "@/content/contact_content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Learn more about our company and team.",
};

export default function Contact() {
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
          <div className="text-header1">{contactText.header1}</div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-[50vh]">
        <div className=" text-center md:max-w-[55vw] border rounded-xl pt-[2vw] border-redDark">
          <div className="text-header3 text-red">{contactText.header3Red}</div>
          <p className="py-[2vh] px-[5vw]">{contactText.paragraph}</p>
          <hr className="border-redDark" />
          <div className="py-[1vw] font-medium text-2xs md:text-[18px]">
            <Link href="mailto:caseit@sfu.ca">{contactText.email}</Link>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-start flex-col ">
        <div className="min-w-[80vw]">
        <div>
          <div className="text-header2 justify-start"> {contactText.header2}</div>
        </div>
          {contactText.faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
}

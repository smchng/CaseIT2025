import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQ, MobileContactText } from "@/components/faq";
import { contactText } from "@/content/contact_content";
import { BgImgCenter } from "@/components/img";

export const metadata: Metadata = {
  title: "Contact",
  description: "Learn more about our company and team.",
};

export default function Contact() {
  return (
    <div className="pb-[10vh]">
      <section>
        <BgImgCenter>
          <div className="text-header1">{contactText.header1}</div>{" "}
          <div className="py-[3vh]">
            <div className="bg-white">
              <div className=" text-center max-w-[80vw] md:max-w-[45vw] border rounded-xl pt-[3vw] border-redDark">
                <div className="text-header3 text-red">
                  {contactText.header3Red}
                </div>
                <p className="pb-[2vh] px-[5vw]">{contactText.paragraph}</p>
                <hr className="border-redDark" />
                <div className="py-[2vw] font-bold text-paragraph md:text-[18px]">
                  <Link href="mailto:caseit@sfu.ca">{contactText.email}</Link>
                </div>
              </div>
            </div>{" "}
          </div>
        </BgImgCenter>
      </section>

      <section className="hidden md:flex items-center justify-start flex-col ">
        <div className=" min-w-[80vw]">
          <div className="text-header2 justify-start ">
            {" "}
            {contactText.header2}
          </div>

          {contactText.faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <section className=" flex md:hidden items-center justify-start flex-col ">
        <div className=" max-w-[80vw]">
          <div className="text-header3 justify-start mb-5">
            {" "}
            {contactText.header2}
          </div>

          {contactText.faqs.map((faq, index) => (
            <MobileContactText
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

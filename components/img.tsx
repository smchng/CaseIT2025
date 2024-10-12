import Image from "next/image";
import { BoldedText, NewLineText } from "./text";

type imgItems = {
  img?: string;
  stylingClasses?: string;
  alt?: string;
  title?: string;
  text?: string;
  subtext?: string;
  children?: React.ReactNode;
};

export const BgImgCenter = ({ children }: imgItems) => {
  return (
    <section className="relative mb-[10vh] h-[90vh] w-full">
      <Image
        src="/imgs/Downtown-Vancouver.png" // Fixed image under the text
        alt="Downtown Vancouver"
        className=" object-cover"
        layout="fill" // Ensures the image fills the container
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center mx-auto max-w-[90vw]">
        {children}
      </div>
    </section>
  );
};
export const BgImgLeft = ({ children }: imgItems) => {
  return (
    <section className="relative mb-[10vh]  h-[90vh] w-full">
      <Image
        src="/imgs/Downtown-Vancouver.png" // Fixed image under the text
        alt="Downtown Vancouver"
        className=" object-cover"
        layout="fill" // Ensures the image fills the container
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center">
        {children}
      </div>
    </section>
  );
};

export const ImgLeft = ({ img, stylingClasses, alt }: imgItems) => {
  return (
    <div className="relative p-7 ">
      <div className="absolute inset-0 md:border-2 md:border-redDark md:rounded-2xl md:transform md:-translate-x-36 md:-z-10"></div>
      <Image
        src={img || "/imgs/Downtown-Vancouver.png"}
        alt={alt || "img description"}
        width={1002} // Original aspect ratio width
        height={503} // Original aspect ratio height
        className={stylingClasses}
      />
    </div>
  );
};
export const ImgRight = ({ img, stylingClasses, alt }: imgItems) => {
  return (
    <div className="relative p-7 overflow-hidden">
      <div className="absolute inset-0 md:border-2 md:border-redDark md:rounded-2xl md:transform md:translate-x-20 md:translate-x-36 md:-z-10"></div>
      <Image
        src={img || "/imgs/Downtown-Vancouver.png"}
        alt={alt || "img description"}
        width={1002} // Original aspect ratio width
        height={503} // Original aspect ratio height
        className={stylingClasses}
      />
    </div>
  );
};

export const IconImg = ({
  img,
  stylingClasses,
  title,
  text,
  alt,
}: imgItems) => {
  return (
    <div className="md:flex md:space-x-[3vw]">
      <Image
        src={img || "/imgs/Downtown-Vancouver.png"}
        alt={alt || "img description"}
        width={75}
        height={75}
        className={`${stylingClasses} w-[20vw] md:w-[15vw] h-auto`}
      />
      <div>
        <div className="text-header3 md:text-header4 text-red"> {title} </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const SponsorShowcaseText = ({
  title,
  text,
  img,
  alt,
  subtext,
}: imgItems) => {
  return (
    <div className="md:max-w-[50vw] flex flex-col space-y-[3vh]">
      <div className="text-header4 text-red">{title}</div>
      <Image
        src={img || "/imgs/Downtown-Vancouver.png"}
        alt={alt || "img description"}
        width={432}
        height={83}
      />

      <div className="text-paragraph">
        {(text || "").split("\n").map((paragraph, index) => (
          <p key={index} className="pb-[5vh]">
            <BoldedText text={paragraph} />
          </p>
        ))}
      </div>
    </div>
  );
};

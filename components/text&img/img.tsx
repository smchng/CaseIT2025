import Image from "next/image";

type imgItems = {
  img?: string;
  stylingClasses?: string;
  alt?: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
};

export const BgImgCenter = ({ children }: imgItems) => {
  return (
    <section className="relative mb-[10vh]  h-[90vh] w-full">
      <Image
        src="/imgs/Downtown-Vancouver.png" // Fixed image under the text
        alt="Downtown Vancouver"
        className=" object-cover"
        layout="fill" // Ensures the image fills the container
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
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
      <div className="absolute inset-0 border-2 border-redDark rounded-2xl transform -translate-x-36 -z-10"></div>
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
      <div className="absolute inset-0 border-2 border-redDark rounded-2xl transform translate-x-36 -z-10"></div>
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
    <div className="flex space-x-[3vw]">
      <Image
        src={img || "/imgs/Downtown-Vancouver.png"}
        alt={alt || "img description"}
        width={75}
        height={75}
        className={stylingClasses}
      />
      <div>
        <div className="text-header3 text-red"> {title} </div>

        <p>{text}</p>
      </div>
    </div>
  );
};

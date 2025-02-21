import Image from "next/image";

type resultsProps = {
  title: string | JSX.Element;
  img1: string;
  img2: string;
  alt: string;
};

export const Results = ({ title, img1, img2, alt }: resultsProps) => {
  return (
    <div className="mt-[20vh] flex flex-col gap-4 p-7 md:p-0 md:max-w-[80vw] mx-auto">
      {title}
      <div className="md:hidden">
        <Image
          src={img1 || "/imgs/compWeek/C1_mobile.png"}
          alt={alt || "case 1 winner"}
          width={1100}
          height={436}
        />
      </div>{" "}
      <div className="hidden md:block">
        {" "}
        <Image
          src={img2 || "/imgs/compWeek/C1_win.png"}
          alt={alt || "case 1 winner"}
          width={1100}
          height={436}
        />
      </div>
    </div>
  );
};

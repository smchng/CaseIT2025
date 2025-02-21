import Image from "next/image";

type resultsProps = {
  title: string | JSX.Element;
  img: string;
  alt: string;
};

export const Results = ({ title, img, alt }: resultsProps) => {
  return (
    <div className="mt-[20vh] flex flex-col gap-4 p-7 md:p-0 md:max-w-[80vw] mx-auto">
      {title}
      <Image
        src={img || "/imgs/compWeek/C1_win.png"}
        alt={alt || "case 1 winner"}
        width={1100}
        height={436}
      />
    </div>
  );
};

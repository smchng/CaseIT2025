import Image from "next/image";

type resultsProps = {
  title: string;
  img: string;
  alt: string;
};

export const Results = ({ title, img, alt }: resultsProps) => {
  return (
    <div>
      <div className="text-header2">{title}</div>
      <Image
        src={img || "/imgs/2024_OC.png"}
        alt={alt || "case results"}
        width={2080}
        height={2080}
        className="w-[60vw]"
      />
    </div>
  );
};

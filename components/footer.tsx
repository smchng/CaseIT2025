import Image from "next/image";
export const Footer = () => {
  return (
    <div className="bg-footerRed p-[5vw] mt-[10vh]">
      {" "}
      <Image
        src="/svgs/CaseIT_Black.svg"
        alt="CaseIt Logo Black"
        width="100"
        height="100"
      />
    </div>
  );
};

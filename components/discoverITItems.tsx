import { BoldedText } from "./text";
type discoverITItems = {
  title: string;
  text: string;
};

export const Bento = ({ title, text }: discoverITItems) => {
  return (
    <div className=" p-7 bg-greyDark rounded-2xl drop-shadow-[0_0_5px_rgba(0,0,0,0.2)]">
      <h1 className="text-header2">{title}</h1>
      <BoldedText text={text} />
    </div>
  );
};

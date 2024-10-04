import { RoundedButton } from "@/components/buttons";

type sponsorItems = {
  text: string;
  link: string;
};

export const MobileButtons = ({ text, link }: sponsorItems) => {
  return (
    <div className="flex flex-col space-y-[5px] ">
      <div className="md:hidden">
        <RoundedButton text={text} link={link} variant="outline" />
      </div>
      <RoundedButton text="Talk to Our Team" link="/contact" variant="red" />
    </div>
  );
};

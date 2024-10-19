import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowIcon } from "@/public/svgs/arrow";

type buttonItems = {
  img?: string;
  alt?: string;
  link: string;
  text: string;
  subtext?: string;
};
type ButtonProps = buttonItems & {
  state?: "default" | "hover" | "focus" | "disabled";
};
type RoundedButtonProps = ButtonProps & {
  variant?: "red" | "outline" | "black";
};
type SquareButtonProps = ButtonProps & {
  variant?: "white" | "black";
};

export const ImgButton = ({ img, alt, text, link }: buttonItems) => {
  return (
    <div className="relative group">
      {/* Top line */}

      <div className="absolute top-0 left-0 right-0 h-8 z-10 overflow-hidden">
        <div className="absolute top-0 left-10 h-2 bg-redDark transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full w-10"></div>
      </div>

      <Link href={link} className="relative block">
        <Image
          src={img || "/svgs/CaseIT_Black.svg"}
          alt={alt || "image description"}
          width={645}
          height={415}
          className="w-[90vw] md:w-[30vw] h-auto"
        />
        <div className="absolute inset-0 flex items-end pl-[2vw] pb-[2vh] z-10">
          <div className="text-white">
            <p className="font-bold text-lg ">{text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const RoundedButton = ({
  text,

  link,
  variant = "red",
  state = "default",
}: RoundedButtonProps) => {
  return (
    <Link href={link}>
      <button
        className={clsx(
          "inline-flex items-center rounded-full px-5 py-1.5 md:py-2 text-[12px]  md:text-[17px] transition-colors",
          {
            // Variants
            "bg-redDark text-white": variant === "red" && state === "default",
            "bg-buttonBlackOff text-white":
              variant === "black" && state === "default",
            "bg-transparent text-black border border-black":
              variant === "outline" && state === "default",

            // Hover states
            "hover:bg-buttonRedDark": variant === "red" && state !== "disabled",
            "hover:bg-black hover:text-white":
              (variant === "black" || variant === "outline") &&
              state !== "disabled",

            // Focus state applied to the button
            "focus:border focus:border-buttonRedDark focus:text-buttonRedDark focus:bg-transparent":
              variant === "red" && state === "focus",
            "focus:border focus:border-buttonBlackHovered focus:text-buttonBlackHovered focus:bg-transparent":
              variant === "black" && state === "focus",
            "focus:border focus:border-none focus:text-black focus:bg-buttonBlackHovered":
              variant === "outline" && state === "focus",

            // Ghost buttons
            "bg-buttonGreyDisabled border border-buttonGreyDisabled text-buttonGreyDisabledText":
              (variant === "black" ||
                variant === "outline" ||
                variant === "red") &&
              state == "disabled",

            // Disabled state
            "cursor-not-allowed": state === "disabled",
          }
        )}
      >
        {text}
      </button>
    </Link>
  );
};

export const SquareButton = ({
  text,
  subtext,
  link,
  variant = "white",
  state = "default",
}: SquareButtonProps) => {
  return (
    <Link href={link}>
      <button
        className={clsx(
          "inline-flex flex-col items-left rounded-lg px-5 py-2 text-[17px] transition-colors",
          "md:text-2xs",
          {
            // Variants
            "bg-transparent text-black border border-black":
              variant === "black" && state === "default",
            "bg-transparent text-white border border-white":
              variant === "white" && state === "default",

            // Hover states
            "hover:bg-black hover:text-white":
              variant === "black" && state !== "disabled",
            "hover:bg-white hover:text-black ":
              variant === "white" && state !== "disabled",

            // Focus state applied to the button
            "focus:text-white focus:bg-buttonBlackOff":
              variant === "black" && state === "focus",
            "focus:text-black focus:bg-buttonGreyDisabled":
              variant === "white" && state === "focus",

            // Ghost buttons
            "bg-buttonGreyDisabled border border-buttonGreyDisabled text-buttonGreyDisabledText":
              (variant === "black" || variant === "white") &&
              state == "disabled",

            // Disabled state
            "cursor-not-allowed": state === "disabled",
          }
        )}
      >
        <p className="font-bold">{text}</p>
        <p className="text-[10px]">{subtext}</p>
      </button>
    </Link>
  );
};

export const PivotButton = ({ text, link, state = "default" }: ButtonProps) => {
  return (
    <Link href={link}>
      <button
        className={clsx(
          "inline-flex items-center rounded-full px-4 py-1 text-[17px] transition-colors ",
          "md:text-[12px]",
          {
            // Variants
            "bg-transparent text-white border border-white":
              state === "default",

            // Hover states
            "hover:bg-white hover:text-pivotBlue": state !== "disabled",

            // Focus state applied to the button
            "focus:border focus:border-white focus:text-white focus:bg-transparent":
              state === "focus",

            // Ghost buttons
            "bg-buttonGreyDisabled border border-buttonGreyDisabled text-buttonGreyDisabledText":
              state == "disabled",

            // Disabled state
            "cursor-not-allowed": state === "disabled",
          }
        )}
      >
        {text}{" "}
        {
          <span className="ml-2 ">
            <ArrowIcon stylingClasses="w-3" />
          </span>
        }
      </button>
    </Link>
  );
};

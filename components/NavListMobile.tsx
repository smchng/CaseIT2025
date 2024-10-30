"use client";
// THIS COMPONENT RENDERS A LIST OF NAV LINKS. IT TAKES AN ARRAY OF TYPE NAVLINK AS PARAMETERS
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Link from "next/link";

type NavListMobileProps = {
  linkArray: {
    name: string | React.ReactNode;
    ref: string;
    className?: string;
    sublinks?: { name: string; ref: string }[];
  }[];
  listClassName?: string;
  linkClassName?: string;
  activePathname?: string;
};

const pivotStyle =
  "bg-pivotBlue text-white px-6 py-1 rounded-full hover:text-white hover:bg-pivotBlueDark cursor-pointer max-w-[6rem]";

export const NavListMobile = ({
  linkArray,
  listClassName,
  linkClassName,
  activePathname,
}: NavListMobileProps) => {
  const [isActive, setActive] = useState<string | null>(null);
  const [subOpen, setSubOpen] = useState<string | null>(null); // Change to hold the active sublink

  return (
    <ul className={listClassName}>
      {linkArray.map((item, index) => (
        <li
          key={index}
          className={twMerge(
            `${linkClassName} ${activePathname === item.ref && "text-black"}`,
            item?.className
          )}
        >
          <div onClick={() => {
              setActive(item.ref);
              // Toggle sublink visibility
            }}>
            {item.sublinks ? (
              <div onClick={ () => setSubOpen(subOpen === item.ref ? null : item.ref)} className="cursor-pointer">{item.name}</div>
            ) : (
              <Link href={item.ref}>{item.name}</Link>
            )}

            {/* Use isActive to check if we should show the dropdown */}
            <div
              className={`transition-transform ease-in-out-[cubic-bezier(.16,1,.3,1)] sm:max-w-[25rem] duration-500 bg-white w-screen sm:w-[70vw] px-16 py-12 h-screen absolute top-0 right-0 ${subOpen === item.ref ? "" : "translate-x-[100%]"}`}
            >
              <div onClick={() => { setSubOpen(null); }} className="mb-32 pb-6 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 opacity-60 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

              </div>

              {/* Dropdown for sublinks with opacity transition */}
              {subOpen === item.ref && item.sublinks && ( // Check if this item's sublinks should be shown
                <ul className="flex flex-col gap-12 z-40 rounded-xl drop-shadow-sm">
                  {item.sublinks.map((sublink, index) => (
                    <li key={index}>
                      <Link href={sublink.ref} className="text-greyLight hover:text-black duration-300">
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

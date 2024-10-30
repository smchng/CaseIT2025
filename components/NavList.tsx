"use client";
// THIS COMPONENT RENDERS A LIST OF NAV LINKS. IT TAKES AN ARRAY OF TYPE NAVLINK AS PARAMETERS
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Link from "next/link";

type NavListProps = {
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


export const NavList = ({
  linkArray,
  listClassName,
  linkClassName,
  activePathname,
}: NavListProps) => {
  const [isActive, setActive] = useState<string | null>(null);

  return (
    <ul className={listClassName}>
      {linkArray.map((item, index) => (
        <li
          key={index}
          className={twMerge(
            `${linkClassName} relative ${
              activePathname === item.ref && "text-black"
            }`,
            item?.className
          )}
        >
          <div onMouseEnter={() => setActive(item.ref)} onMouseLeave={() => setActive(null)}>
          {item.sublinks?(<div className="cursor-default">{item.name}</div>): <Link href={item.ref}>{item.name}</Link>}

            {/* Dropdown for sublinks with opacity transition */}
            {item.sublinks && (
              <div
                className={`hidden md:block absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 pt-4  ${
                  isActive === item.ref ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className=" absolute w-16 h-16 bg-white drop-shadow- left-1/2 -translate-x-1/2 rounded-lg rotate-45 "> </div>
                <ul className="py-8 px-6 z-[1999] flex flex-col gap-4 w-64 rounded-xl bg-white drop-shadow-sm">
                  {item.sublinks.map((sublink, index) => (
                    <li key={index}>
                      <Link href={sublink.ref} className="text-greyLight hover:text-black duration-300">
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
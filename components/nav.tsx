"use client";
import Link from "next/link";
import Image from "next/image";
import { NavList } from "@/content/nav_content";
import { useState, useEffect } from "react";
import { svgIcons } from "@/public/svgs/icons";

type NavItems = {
  link: string;
  name: string;
};

const NavLinks = ({ link, name }: NavItems) => {
  return (
    <li className=" text-greyLight hover:text-black font-medium">
      <Link href={link}>{name}</Link>
    </li>
  );
};

export const NavBar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const navWrapper = document.getElementById('nav-animation')
    isOpen? navWrapper?.classList.add('menu-open'):navWrapper?.classList.remove('menu-open');
    isOpen?document.body.classList.add('overflow-y-hidden'):document.body.classList.remove('overflow-y-hidden')


    return () => {
      navWrapper?.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // scrolling down
        setScrollingDown(true);
      } else {
        // scrolling up
        setScrollingDown(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Ensure scroll position is non-negative
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`
    ${scrollingDown && lastScrollTop > 50 && "translate-y-[-100%]" }
    ${lastScrollTop === 0 ? "bg-white/0" : "bg-white"}
    transition-all flex justify-between  w-full pt-[3vh] top-0 z-10 fixed px-[5vw] drop-shadow-lg`}>
      <a href="/" className="w-[10vw]">
        <Image
          src="/svgs/CaseIT_Black.svg"
          alt="CaseIt Logo Black"
          width="100"
          height="100"
        />
      </a>
      <div onClick={()=>setIsOpen(!isOpen) } className="md:hidden text-black size-8">{svgIcons["hamburger"]} </div>
      <div className="bg-greyLight w-[50vw] h-screen absolute top-0 left-0"></div>
      <div className="hidden md:block ">
        <ul className="flex space-x-[5vw]">
          {NavList.map((item, index) => (
            <NavLinks key={index} link={item.link} name={item.name} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

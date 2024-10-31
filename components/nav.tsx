"use client";
import { NavList } from "./NavList";
import { NavLinks } from "@/content/nav_content";
import { useState, useEffect, useRef } from "react";
import CaseitLogoBlack from "@/public/svgs/CaseitLogoBlack";
import { svgIcons } from "@/public/svgs/icons";
import { usePathname } from "next/navigation";
import { NavListMobile } from "./NavListMobile";

export const NavBar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: MouseEvent) => {
    if (!navRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    document.addEventListener("mousedown", handleClick);
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navWrapper = document.getElementById("nav-animation");
    isOpen
      ? navWrapper?.classList.add("menu-open")
      : navWrapper?.classList.remove("menu-open");
    isOpen
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");

    return () => {
      navWrapper?.classList.remove("menu-open");
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
    <>
      <nav
        ref={navRef}
        className={`
    ${scrollingDown && lastScrollTop > 50 && "translate-y-[-100%]"}
    ${lastScrollTop === 0 ? "bg-white/0" : "bg-white"}
    transition-all flex justify-between  w-full py-3 md:py-5 top-0 z-[50] fixed px-[5vw] drop-shadow-lg`}
      >
        <a href="/" className=" block w-24 lg:w-32">
          <CaseitLogoBlack />
        </a>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black size-8 z-50"
        >
          {svgIcons["hamburger"]}{" "}
        </div>

        {/* MOBILE NAV */}
        <div
          className={`transition-transform ease-[cubic-bezier(.16,1,.3,1)] sm:max-w-[25rem] duration-500 bg-white w-screen sm:w-[70vw]  drop-shadow-lg px-16 py-48 h-screen absolute top-0 right-0 ${
            !isOpen && "translate-x-[100%]"
          } `}
        >
          <NavListMobile
            activePathname={pathname}
            linkClassName=" text-sm hover:text-black transition-all duration-300"
            listClassName="flex flex-col text-black/50 gap-8 font-medium"
            linkArray={NavLinks}
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex ">
          <NavList
            activePathname={pathname}
            linkClassName=" hover:text-black transition-all duration-300"
            listClassName="flex items-center text-black/60 gap-8 font-medium"
            linkArray={NavLinks}
          />
        </div>
      </nav>
    </>
  );
};

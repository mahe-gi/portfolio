"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-30 transition-all duration-300
        ${header 
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-lg dark:bg-accent/90' 
          : 'py-6 bg-transparent dark:bg-transparent'}
        ${pathname === '/' && 'bg-[#fafafa]/70'}
      `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-8">
            <Nav
              containerStyles="hidden xl:flex gap-x-10 items-center"
              linkStyles="relative hover:text-primary transition-all duration-300 text-[15px] font-medium"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

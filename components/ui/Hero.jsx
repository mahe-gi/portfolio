import Link from "next/link";
import { Button } from "./button";
import { Download, Send } from "lucide-react";
import Badges from "./Badges";
import Image from 'next/image';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24 xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-12">
          <div className="flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] hover:text-primary/80 transition-colors">
              Full Stack Web Developer
            </div>
            <h1 className="h1 mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Welcome! My name is <br />
              CH MAHESH.
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 text-lg">
              Brief description with insights into myself, and what I engage in
              professionally.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-4 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 text-base font-medium hover:scale-105 transition-transform">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2 bg-slate-800 text-white dark:bg-slate-700 hover:bg-slate-700 hover:scale-105 transition-all">
                <Link href="https://drive.google.com/file/d/1u6kVbG21-ToRgGtXs8kJrIVUq5MUo7VH/view?usp=sharing" target="_blank" className="flex items-center gap-x-2">
                  View CV <Download size={18} />
                </Link>
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all hover:scale-110"
            />
          </div>
          <div className="hidden xl:flex relative">
            {/* Badges */}
            <Badges
              containerStyles="absolute top-[24%] -left-[5rem] hover:scale-110 transition-transform bg-white/90 dark:bg-accent/90"
              icon={<RiBriefcase4Fill className="text-primary" />}
              endCountNum={1}
              badgeText="Years of Experience"
            />
            <Badges
              containerStyles="absolute top-[80%] -left-[1rem] hover:scale-110 transition-transform bg-white/90 dark:bg-accent/90"
              icon={<RiTodoFill className="text-primary" />}
              endCountNum={1}
              endCountText="+"
              badgeText="Finished Projects"
            />
            <Badges
              containerStyles="absolute top-[55%] -right-8 hover:scale-110 transition-transform bg-white/90 dark:bg-accent/90"
              icon={<RiTeamFill className="text-primary" />}
              endCountNum={1}
              endCountText="+"
              badgeText="Happy Clients"
            />
            <div className="hidden xl:block relative">
              <Image 
                src="/hero/hero.png"
                alt="Developer"
                width={510}
                height={462}
                priority
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary hover:text-primary/80 transition-colors cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

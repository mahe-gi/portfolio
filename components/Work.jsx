"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

//required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "./ui/ProjectCard";

const projectData = [
  {
    image: "/project",
    category: "fullstack",
    name: "Web-Wallet",
    description:
      "This Website made using react-js ,Node js ,Express and MongoDb with beautiful ui/ux design",
    link: "/",
    github: "/",
  },
  {
    image: "/blog1",
    category: "react-js",
    name: "blog -101dev",
    description: "This Website made using react-js ,Express ,MongoDB ,Node Js",
    link: "/",
    github: "/",
  },
  {
    image: "/Social-media-101community",
    category: "next-js",
    name: "comminity- 101dev",
    description: "This Website made using Next-js with beautiful ui/ux design",
    link: "/",
    github: "/",
  },
  {
    image: "/101dev.tech",
    category: "fullstack",
    name: "101dev",
    description: "This Website made using Next-js with beautiful ui/ux design",
    link: "/",
    github: "/",
  },
  {
    image: "/portfolio",
    category: "next-js",
    name: "portfolio",
    description: "This Website made using react-js with beautiful ui/ux design",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className="mx-auto xl:m-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Projects made by me.</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}>
            {/* beginning 4 projects  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
            ;
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

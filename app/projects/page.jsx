"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ui/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";

const projectData = [
  {
    image: "/work/bookstore.png",
    category: "react-js",
    name: "bookstore",
    description:
      "this website made using React Js , NodeJs, Express Js ,MongoDB",
    link: "https://bookstore.101dev.tech/",
    github: "/",
  },
  {
    image: "/work/blog.png",
    category: "next-js",
    name: "Blog",
    description: "this website made using Next js",
    link: "https://blog.101dev.tech/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next-js",
    name: "101dev",
    description: " ",
    link: "https://www.101dev.tech/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "101dev",
    description:
      "this website made using React Js , NodeJs, Express Js ,MongoDB",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "101dev",
    description:
      "this website made using React Js , NodeJs, Express Js ,MongoDB",
    link: "/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;

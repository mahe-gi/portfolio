import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "CH MAHESH",
  },
  {
    icon: <MailIcon size={20} />,
    text: "chmahesh.dev@gmail.com",
  },

  {
    icon: <Calendar size={20} />,
    text: "Born on 07 jun, 2000",
  },

  {
    icon: <PhoneCall size={20} />,
    text: "9908835692",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "MCA",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Hyderabad, Telangana",
  },
];

const qualifications = [
  {
    title: "education",
    data: [
      {
        university: "Nijam college",
        qualification: "Master of Computer Applications (MCA)",
        years: "2022 - 2024",
      },
      {
        university: "Gov't MVS degree and pg college ",
        qualification: "B.sc (computer science)",
        years: "2019 - 2022",
      },
      {
        university: "Vagdevi juniour college ",
        qualification: "TSBIE(mpc)",
        years: "2016 - 2018",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Freelancing",
        qualification: "Freelancing",
        years: "1+",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Html, CSS, JavaScript",
      },
      {
        name: "React Js, Next js ",
      },
      {
        name: "Node js , Express js ",
      },
      {
        name: "MongoDB , Postgresql",
      },
      {
        name: "C , C++ , Javascript ,Typescript",
      },
      {
        name: "Docker , git ,github ",
      },
    ],
  },

  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

// Experience data
const experienceData = [
  {
    company: "Codsoft",
    role: "Full Stack Developer Intern",
    years: "Jan 2024 - Feb 2024",
    description: [
      "Developed and maintained web applications using React.js and Next.js",
      "Collaborated with team members to implement responsive designs",
      "Worked on multiple projects including portfolio and e-commerce applications",
    ],
  },
  // ... other experience items
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}

          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/about.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications">
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Providing Premium Quality Sevice.
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages  */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi, Telugu</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualifications  */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>

                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualifications, "education").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualifications, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualifications, "experience").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {experienceData.map((item, index) => (
                            <div className="flex gap-x-8 group" key={index}>
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-xl leading-none mb-2">
                                  {item.company}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {item.role}
                                </div>
                                <div className="text-base font-medium">
                                  {item.years}
                                </div>
                                <ul className="text-muted-foreground mt-2 ml-4 list-disc">
                                  {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills  */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-4xl font-semibold mb-2"> Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}>
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>

                      <div className="flex gap-x-8 justify-center xl:justify-normal">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

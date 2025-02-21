"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/@mahe_yt",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/mahe-li/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/mahe-gi",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/_mahe8/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

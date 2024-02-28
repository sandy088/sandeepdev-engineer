import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ytclone from "@/public/ytclone.png";
import thumbnailImg from "@/public/thumbnailImg.png";

// import { FaProjectDiagram } from "react-icons/fa";
// import { VscGithubAction } from "react-icons/vsc";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Full-Stack Developer",
    location: "Self-Employed",
    description:
      "Currently freelancing with a focus on creating robust, user-friendly applications. Adept at translating ideas into functional and aesthetically pleasing digital experiences.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - present",
  },
  {
    title: "Full Stack Developer Intern",
    location: "@Curious Ecosystem",
    description:
      "Contributed significantly to a closed-source project, leading frontend development efforts. Utilized my expertise to implement and optimize features, fostering collaboration and innovation within the team.",
    icon: React.createElement(SiNextdotjs),
    date: "December 2023 - Feb 2024",
  },
  
  {
    title: "Full Stack Developer Intern",
    location: "@Sensation Software Solutions Pvt. Ltd.",
    description:
      "Engaged in a six-month internship, contributing to various aspects of full-stack development. Worked on diverse projects, enhancing skills in both frontend and backend technologies.",
    icon: React.createElement(FaReact),
    date: "July 2023 - December 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Otion-FullStack Notion Clone",
    description:
      "Developed a Realtime full-stack Notion clone with all the features Notion has.",
    tags: ["Realtime", "Nextjs14", "Typsecript","Convex"],
    imageUrl: thumbnailImg,
    clickURL: "https://otion-documentation-app.vercel.app/"
  },
  {
    title: "Study Notion",
    description:
      "online course selling and consuming platform built from scratch using the MERN stack.",
    tags: ["React", "Tailwind", "Redux toolkit", "Node.js", "Razorpay", "MongoDB"],
    imageUrl: rmtdevImg,
    clickURL: "https://studynotion-sepia.vercel.app/"
  },
  {
    title: "Sendyy -Bulk E-mail Sender",
    description:
      "Developed a robust bulk email sending application with role-based login, email list management, and impressive design",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Nodejs"],
    imageUrl: wordanalyticsImg,
    clickURL: "https://sendyy-bulk-email-sender.vercel.app/"
  },
  
  {
    title: "Youtube Clone",
    description:
      "Utilized the YouTube API to fetch and display a variety of content, including trending videos, live streams, popular channels, etc.",
    tags: ["React", "Youtube API","Tailwind", "Context API"],
    imageUrl: ytclone,
    clickURL: "https://youtube-clone-react-indol.vercel.app/"
  },
  {
    title: "Discord Generative Ai- bot",
    description:
      "Developed a Discord AI bot Which can generate Images,Utilized lucataco's sdx Ai Image Generator Model.",
    tags: ["Nodejs", "AI Image Generator Model", "Discord.js"," Typsecript"],
    imageUrl: corpcommentImg,
    clickURL: "https://github.com/sandy088/Discord-Ai-Art-Generator-bot"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Nextjs",
  "Java",
  "C++",
  "React",
  "Node.js",
  "Express.js",
  "Git & Github",
  "Tailwind",
  "Convex",
  "Firebase",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Docker",
  "Figma",
  "Canva",
  "Go(Learning)"
  
] as const;

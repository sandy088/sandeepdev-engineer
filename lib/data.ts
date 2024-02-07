import React from "react";
import { FaReact } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { VscGithubAction } from "react-icons/vsc";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ytclone from "@/public/ytclone.png";
import thumbnailImg from "@/public/thumbnailImg.png";

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
    title: "Open Source Contributor",
    location: "@Hactoberfest 2023",
    description:
      `Participated in Hacktoberfest 2023, earned swags & goodies for submitting four successful pull requests to diverse open source projects. Developed valuable skills in open source development, including contributing to codebases, writing documentation, and collaborating with other developers. Among the first 40,000 contributors awarded with swags and goodies.`,
    icon: React.createElement(VscGithubAction),
    date: "2023",
  },
  {
    title: "Open Source Contributor ",
    location: "GSSOC 2023",
    description:
      "Participated in GSSOC 2023, and Gained lots of learning about open source projects and collborate with developers worldwide",
    icon: React.createElement(FaProjectDiagram),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelancer",
    description:
      "I'm a full-stack developer working as a freelancer. My stack includes React, Redux, TypeScript, Tailwind, Nodejs, Express.js, GraphQL, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
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

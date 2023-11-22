"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a fourth-year B.Tech student with a focus on technology, I've extensively explored diverse tech stacks, <span className=" font-semibold">including React, JavaScript, TypeScript, Node.js, Express, MongoDB, GraphQL, Docker, Java, and C++</span>. My project portfolio reflects both my coding proficiency and a foray into <span className=" font-semibold">UI/UX, where I acquired skills in Canva, Figma, and the fundamental principles of design.</span>
         <br/>
         <br/>
        Passionate about continual learning, I'm currently involved in Open source contributions and understanding Complex projects of some big Giant companies to contribute in them. I've actively participated in events like Hacktoberfest and GSSOC.<br/> <br/>

        Seeking a full-time position as a software developer,<span className=" font-semibold"> my core stack comprises React, Node.js, Express.js and MongoDB, with proficiency in TypeScript and Prisma</span>. Eager to embrace new technologies, I bring a problem-solving mindset to every coding challenge.
      </p>

      <p>
        Beyond coding, I find joy in reading books📚 (specifically related to real life knowledge, skills & growth), playing boxing
        🥊, and spending quality time with my dog. I'm also an avid learner⚡. In addition to my tech pursuits, I'm cultivating my skills in playing the guitar.
      </p>


    </motion.section>
  );
}

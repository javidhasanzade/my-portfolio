"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FlipWords } from "./flip-words";
import { DataBox } from "./data-box";

export default function About() {
  const { ref } = useSectionInView("About");
  const words = [
    "robust",
    "quality",
    "clean",
    "modern",
    "innovative",
  ];

  return (
    <motion.section
      ref={ref}
      className="max-w-[19.5rem] sm:max-w-[45rem]
       text-center leading-8 scroll-mt-28 py-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div
        className="text-base lg:text-xl font-normal text-center
       text-neutral-600
       leading-relaxed md:leading-loose"
      >
        Passionate Software Engineer with{" "}
        <span className="text-green-500 font-semibold font-">
          3 years
        </span>{" "}
        of professional experience in developing{" "}
        <FlipWords words={words} /> software solutions. With
        a solid background working in major companies and
        consistently going above and beyond in my role as a
        developer, I am confident in my ability to
        contribute significantly to your team.
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 my-12
       md:space-y-0 md:space-x-8
       space-y-8 space-x-0
        gap-2"
      >
        <div className="flex flex-col items-center flex-none flex-shrink-0 space-y-8">
          <DataBox
            title="How can you contribute to the company's success"
            description="I bring extensive experience in software development, including leading feature development and A/B testing at Travelcircus.
             At Kibrit, I designed efficient GitLab CI/CD pipelines, contributed to a high-load system handling 1,000 requests per second, and managed a successful migration from a monolithic PHP/Laravel system to a microservices architecture with Java/Spring WebFlux.
             My ability to drive innovation and optimize complex systems will be a valuable asset to your team."
          />
          <DataBox
            title="How do you ensure the quality and reliability of your software solutions"
            description=" I adhere to best practices in software development, including thorough testing, code reviews, and continuous integration. By implementing these practices, I ensure that the software is not only high-quality but also reliable and maintainable."
          />
          <DataBox
            title="How do you handle tight deadlines and high-pressure situations"
            description="I handle tight deadlines and high-pressure situations by staying organized, prioritizing tasks effectively, and maintaining a focused approach. I break down complex tasks into manageable steps and communicate proactively with stakeholders to ensure alignment and address potential issues early."
          />
        </div>
        <div className="flex flex-col items-center flex-none flex-shrink-0 space-y-8">
          <DataBox
            title="Can you describe a challenging project you've worked on personally"
            description="One of my most challenging projects was FarmFlow, a master's degree project where I developed an agricultural marketplace similar to Amazon. This platform featured advanced functionalities such as price prediction using machine learning and a recommender system. I utilized a microservices architecture with C# (ASP.NET Core) and Python (FastAPI) for the backend, and React and Next.js for the frontend. The project had a very tight deadline, and I achieved a notable score of 1.3/5, where 1 was the highest rating. In addition to the technical work, I presented my project to professors, effectively communicating the project's value and outcomes. This experience required meticulous planning, effective resource management, and close coordination with the front-end developer, culminating in a successful and well-received delivery."
          />
          <DataBox
            title="Can you describe a major challenge your company faced, and how you contributed to success"
            description="One challenging project involved migrating a high-load system from a monolithic PHP/Laravel architecture to a microservices architecture using Java/Spring WebFlux. I led the migration process, ensuring minimal disruption and optimal performance. My approach included thorough planning, rigorous testing, and close coordination with team members to address issues swiftly, ultimately resulting in a successful transition that improved system scalability and performance."
          />
        </div>
      </div>
    </motion.section>
  );
}

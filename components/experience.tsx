"use client";

import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { Container } from "./container";
import { TimelineItem } from "./timeline-item";

/* 
    I am setting the --line-color in globals.css file,
    to avoid the issue arising when setting the line color,
    trough Vertical timeline library itself.
    Additional Note: For the dark mode too.
*/

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 py-12"
    >
      <SectionHeading>
        Education & Experience
      </SectionHeading>
      <Container>
        <ul
          className="timeline timeline-snap-icon 
        max-md:timeline-compact timeline-vertical"
        >
          <TimelineItem
            location="Baku, Azerbaijan"
            year="2017-2021"
            align="Left"
            title="Azerbaijan Technical University"
            role="Bachelor's degree"
            description="Earned a solid grounding in computer science
              with a focus on software development,
              algorithms, and system design. Worked on
              diverse projects that spanned web development,
              databases, and programming, honing both
              theoretical knowledge and practical skills.
              Developed a strong problem-solving mindset and
              hands-on experience with various technologies.
              I've successfully defended my diploma with the
              ELECTRONIC JOURNAL (12/2019 - 05/2020) Project using the stack
              Stack: .NET Core 3.1, ASP.NET, WPF, ADO.NET, MSSQL."
          />
          <TimelineItem
            location="Baku, Azerbaijan"
            align="Right"
            year="01/2021- 06/2021"
            title="Azerenerji"
            role="Web Development Intern"
            description="
            I completed an internship as part of my bachelor's degree at Azerenerji.
            I contributed to the development and maintenance of the company's main web systems using Node.js and Python.
            Collaborated with senior developers to design and implement new features.
            Assisted in troubleshooting and debugging web applications to ensure optimal performance.
            Participated in code reviews and followed best practices for code quality and version control.
            Worked with databases and ensured efficient data retrieval and storage."
          />
          <TimelineItem
            location="Baku, Azerbaijan"
            align="Left"
            year="2018-2021"
            title="StepIT academy"
            description="
            At STEP IT Institute, a top IT education provider with 109 branches and 257,000 alumni, I received a comprehensive education in programming and technology. Authorized by industry leaders like Microsoft, Cisco, and Autodesk, STEP offered certified lessons. During my time at STEP Computer Academy, I studied a variety of programming languages including C, C++, C#, Java, JavaScript, PHP, and SQL. I also gained skills in declarative UI languages (HTML, CSS, XAML), frameworks (ASP.NET, Node.JS, WPF, Windows Forms, Xamarin, Spring, Android, Laravel, React, Win32API), and tools (Visual Studio, IntelliJ IDEA, Git, Azure DevOps). My studies included important concepts like UML, Design Patterns, Agile methodologies, OOP, Data Structures, and Algorithms."
          />
          <TimelineItem
            location="Baku, Azerbaijan"
            align="Right"
            year="10/2020- 04/2022"
            title="StepIT academy"
            role="Software development teacher"
            description="
            My responsibility was teaching students of Junior
            Computer Academy the basics of IT including: 
            Python, C#(Unity) 
            Robotics (C language) 
            HTML, CSS & Bootstrap, Javascript."
          />
          <TimelineItem
            location="Baku, Azerbaijan"
            align="Right"
            year="05/2021 - 07/2022"
            title="Kibrit"
            role="Software Engineer"
            description={`
            I was a part of a team responsible for planning,
            designing and quickly implementing the company's new
            products (server side). Had experience in designing
            GitLab CI/CD pipelines for various projects. 
            Participated in development and architecting company's
            most highload product (~1k requests/second) - "Canba"
            mobile live trivia game. Product was seamlessly
            migrated from monolith (PHP/Laravel) to microservices
            architecture with reactive approach (Java/Spring WebFlux). 
            Helped in leading development and architecting backend part of
            company's famous product(iokio.az). 
            Stack: .NET, C#, ASP.NET Core, EF Core, ADO.NET,
            MySQL (Java stack in some projects), Docker.`}
          />
          <TimelineItem
            location="Berlin, Germany"
            align="Left"
            year="2022-2024"
            title="SRH Berlin University of Applied Sciences"
            role="Master's degree"
            description="At SRH Berlin University, I pursued a Master's in Computer Science, where I deepened my knowledge in advanced mathematics, programming, and machine learning. I worked extensively with big data and business intelligence tools, honing my ability to analyze and interpret large datasets. The program also involved practical training in cloud computing, giving me hands-on experience with scalable solutions. This education not only strengthened my technical skills but also refined my problem-solving and analytical abilities, equipping me for advanced roles in software development and data science. I've successfully defended my diploma with the ML based agricultural marketplace project like Amazon. The website has the following features as: Price prediction using Machine Learning, and also Recommender systems. Frontend stack: React and Next.js, Backend: C#(ASP.NET Core), Python(Fast API). For backend Microservices architecture was employed."
          />
          <TimelineItem
            location="Berlin, Germany"
            align="Right"
            year="01/2023 - Current"
            title="Travelcircus"
            role="Software Engineer"
            description="As a key member of both the Frontend and Backend teams, I am actively involved in the planning and implementation of new features, conducting A/B tests, and resolving bugs to enhance product functionality. My role spans across various stages of development, ensuring seamless integration and high-quality deliverables. I work with a diverse tech stack including React.js, Next.js, Node.js, PHP, Matomo, and Jenkins to drive innovation and maintain robust system performance."
          />
        </ul>
      </Container>
    </section>
  );
}

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "StepIt Academy",
    location: "Baku, Azerbaijan",
    description:
      "I studied software development for two years, learning c++, OOP principles in c++, then C# and .Net, SQL",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2020",
  },
  {
    title: "1C Developer (Intern)",
    location: "Baku, Azerbaijan",
    description:
      "I worked as a 1C developer during this internship, writing code to handle necessery logic for ERP system",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Java Mentor",
    location: "Houston, TX (Remote)",
    description:
      "I was working as a Java mentor for the group in Coding bootcamp, teaching them java, \
      starting from Zero to Object-oriented programming, Data Structures and Alghoritms",
    icon: React.createElement(FaReact),
    date: "2022",
  },
] as const;

export const skillsData = [
  {
    name: ".NET",
    image:
        "https://img.icons8.com/?size=100&id=dhCOURGWQnTW&format=png&color=000000",
  },
  {
    name: "C#",
    image:
      "https://img.icons8.com/?size=100&id=45490&format=png&color=000000",
  },
  {
    name: "ASP.NET",
    image:
        "https://img.icons8.com/?size=100&id=89ikFuDnOkbw&format=png&color=000000",
  },
  {
    name: "Java",
    image:
      "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  {
    name: "Spring Boot",
    image:
        "https://img.icons8.com/?size=100&id=A3Ulk2RcONKs&format=png&color=000000",
  },
  {
    name: "HTML",
    image:
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    image:
        "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  },
  {
    name: "JavaScript",
    image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "Node.js",
    image:
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "React",
    image:
        "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
  },
  {
    name: "C++",
    image:
        "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
  },
  {
    name: "Python",
    image:
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "SQL",
    image:
        "https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000",
  },
  {
    name: "Docker",
    image:
        "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
  },
  {
    name: "AWS",
    image:
        "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
  },
] as const;

export const projects = [
  {
    title: "Electronic journal (ATU)",
    description: `The project for the university to manage students on
    internships. I developed it for defending my diploma. However,
    the university still uses the application. `,
    tags: [
      ".NET Core 3.1",
      "ASP.NET",
      "WPF",
      "ADO.NET",
      "MSSQL",
    ],
  },
  {
    title: "Beauty salon management system (Freelance)",
    description: `Management system(Admin panel) with a lot of possibilities in functionality such as
    calculation of all statistics for any selected time interval
    (Expenses, Income etc.), Calendar (to see and manage
    appointments), List of staff etc.`,
    link: "https://github.com/javidhasanzade/BeautySalon",
    tags: [
      ".NET Core 3.1",
      "ASP.NET",
      "WPF",
      "Entity Framework Core",
      "MSSQL",
    ],
  },
  {
    title: "FarmFlow",
    description: `The project was done for a Master's degree thesis. It is an ML
    based agricultural marketplace like Amazon. The website has the
    following features as: Price prediction using Machine Learning,
    and also Recommender systems.`,
    link: "https://github.com/javidhasanzade/farmflow",
    tags: [
      "React",
      "JavaScript",
      "Next.js",
      "Axios",
      "Taiwlind",
      "C#",
      "ASP.NET Core",
      "Python(Fast API)",
      "Microservices",
      "RabbitMQ",
      "MSSQL",
      "Redis",
      "MongoDB",
    ],
  },
  {
    title: "JUUN",
    description: `JUUN is a dynamic job advertisement platform, designed to connect job seekers with potential employers seamlessly. 
    The website offers a user-friendly interface, advanced search capabilities, and personalized job recommendations.
    Currently working in a team of two, using Agile Methodology, implemented via our own small system running on notion`,
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "ShadcnUI",
      "Tailwind",
      "Zod",
      "React-hook-form",
      "framer-motion",
      "Node.js/Express.js",
      "ASP.NET Core",
      "AWS Serverless",
      "S3",
      "DynamoDB",
    ],
  },
  {
    title: "Commercio Admin",
    description:
      "E-commerce store admin panel, that allow to create multiple stores, banners, categories, and more. Sync with commerciostore.",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Tailwind",
      "Zod",
      "Zustand",
      "shadcn ui",
      "Node.js",
      "Prisma ORM",
      "MySQL",
    ],
  },
  {
    title: "Commercio Store",
    description:
      "E-commerce store frontend which allows to purchase products of the store, view them trough categories and filters. Connected to Stripe(Dev), operating on Commercio Admin API'S",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "headlessui",
    ],
  },
];

"use client";

import React, { useRef } from "react";
import { Container } from "@/components/container";
import { Spotlight } from "@/components/spotlight";
import { SparklesCore } from "@/components/sparkles";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div
      ref={ref}
      className="w-full relative overflow-hidden justify-start min-h-800px 
    flex flex-col flex-none flex-nowrap items-center pt-36 md:pt-40 pb-[80px] 
    gap-[70px]
    bg-gradient-to-b from-black via-neutral-950 to-neutral-900"
    >
      <div className="absolute h-full w-full hero-radial-gradient left-0 top-0 z-20"></div>
      <Container className="relative z-30">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 !opacity-90"
          fill="white"
        />
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={10}
          className="mx-auto w-full h-full absolute  top-0
        max-w-[380px] sm:max-w-[580px] lg:max-w-[760px]"
          particleColor="#FEFEFE"
        />
        <div className="flex items-center justify-center ">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src="/javid.jpg"
                alt="Ramil portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-32 w-32 rounded-full object-top
            border-[0.35rem] border-white object-cover shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute bottom-0 right-0 text-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
        <div
          className="w-full md:w-[1400px] relative overflow-visible max-w-[100%]
      justify-start h-min 
      flex flex-none flex-nowrap flex-col items-center content-center 
      gap-2 px-2"
        >
          <div className="contents">
            <div
              className="max-w-[380px] sm:max-w-[580px] lg:sm:max-w-[760px]  
            gap-[20px] md:gap-[40px]
            items-center content-center
            flex flex-none flex-col flex-nowrap h-min justify-center 
            overflow-visible p-0 relative w-full"
            >
              <div
                className="flex-none h-auto max-w-full overflow-visible relative 
              whitespace-pre-wrap w-full word-break-wrap
              outline-none flex flex-col justify-start flex-shrink-0 transform-none"
              >
                <h1
                  className="text-6xl sm:text-7xl lg:text-[100px] 
                tracking-[-0.05em] leading-[0.9em] 
                text-center heading-margin-1 font-semibold text-neutral-200
                select-none
                [&>*]:mr-3 sm:[&>*]:mr-4 md:[&>*]:mr-8
                [&>*]:drop-shadow-sm
                "
                >
                  <span>Hi,</span>
                  <span>I'm</span>
                  <span>Javid</span>
                </h1>
              </div>
            </div>
          </div>
          <p
            className="text-[24px] 
           text-center text-balance transform-none stroke-inherit
           tracking-[-.1px] leading-[1.7em]
           text-neutral-200/80 "
          >
            <span>
              Crafting innovative software solutions. Let's
              build the{" "}
              <b className="text-[26px] text-green-400">
                future
              </b>{" "}
              together.
            </span>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center
           justify-center gap-2 px-4 text-lg font-medium
           pt-14"
        >
          <Link
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            href="#contact"
            className="group bg-green-400 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-105 hover:scale-105 hover:bg-green-500 active:scale-105 transition
          z-50"
          >
            Contact me{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <div className="flex items-center gap-2">
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer
        borderBlack
        dark:bg-white/10
        z-50"
              href="/Ramil_Gojayev_CV_2023_ENG.pdf"
              download
            >
              CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full
          focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-105 transition cursor-pointer
          borderBlack
          dark:bg-white/10 dark:text-white/70 z-50"
              href="https://www.linkedin.com/in/javid-hasanzade-1a1702175"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full
        focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-105 transition cursor-pointer
        borderBlack
        dark:bg-white/10 dark:text-white/60 z-50"
              href="https://github.com/javidhasanzade"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;

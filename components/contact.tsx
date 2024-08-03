"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-40 scroll-mt-28 
    w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 ">
        please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:javidhasanzade.dev@gmail.com"
        >
          javidhasanzade.dev@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 transition-all appearance-none
         bg-neutral-50 text-neutral-950 border
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          focus:ring-green-400/80"
          autoComplete="none"
          name="senderEmail"
          type="email"
          placeholder="your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4         
          transition-all appearance-none
          bg-neutral-50 text-neutral-950 border
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          focus:ring-green-400/80"
          name="message"
          autoComplete="none"
          placeholder="your message"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

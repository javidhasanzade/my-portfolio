"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { HoverEffect } from "./card-hover-effect";
import { Container } from "./container";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      className="scroll-mt-28 mb-28 py-12"
      id="projects"
    >
      <Container>
        <SectionHeading>My projects</SectionHeading>
        <HoverEffect items={projects} />
      </Container>
    </section>
  );
}

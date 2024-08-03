import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({
  children,
}: SectionHeadingProps) {
  return (
    <h2
      className="text-3xl md:text-4xl lg:text-5xl text-neutral-900 text-center
    mx-auto font-medium pb-10"
    >
      {children}
    </h2>
  );
}

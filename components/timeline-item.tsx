import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  align?: "Left" | "Right";
  role?: string;
  location: string;
}

export const TimelineItem = ({
  year,
  title,
  description,
  align,
  role,
  location,
}: TimelineItemProps) => {
  return (
    <li className="group">
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-green-400"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={cn(
          `mb-10 md:text-end py-4 text-balance`,
          align === "Right" && "timeline-end md:text-start",
          align === "Left" &&
            "timeline-start md:text-end items-end",
          align === undefined &&
            `group-even:timeline-end group-odd:timeline-start
        group-even:md:text-start group-odd:md:text-end`
        )}
      >
        <time className="">{year}</time>
        <div className="text-lg font-semibold text-green-500">
          {title}
        </div>
        <div className="inline-block font-semibold">
          <p className="flex items-center gap-x-1 text-neutral-500">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </p>
        </div>
        {role && (
          <div className="text-base font-semibold text-neutral-900/85 my-0.5">
            {role}
          </div>
        )}
        <p className="text-balance text-base text-neutral-800">
          {description}
        </p>
      </div>
      <hr />
    </li>
  );
};

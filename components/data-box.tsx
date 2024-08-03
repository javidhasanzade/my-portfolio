import React from "react";
import { CircleHelp } from "lucide-react";
interface DataBoxProps {
  title: string;
  description: string;
}

export const DataBox = ({
  title,
  description,
}: DataBoxProps) => {
  return (
    <div className="text-left flex">
      <CircleHelp
        size={16}
        className="mr-2 inline-block text-green-500 shrink-0 mt-1.5 ml-0.5"
      />
      <div>
        <h3 className="text-base font-medium flex items-start justify-start">
          <span>{title}?</span>
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600 my-1">
          {description}
        </p>
      </div>
    </div>
  );
};

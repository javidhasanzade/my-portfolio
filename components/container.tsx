import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
}: ContainerProps) => {
  return (
    <div className={cn("max-w-6xl mx-auto", className)}>
      {children}
    </div>
  );
};

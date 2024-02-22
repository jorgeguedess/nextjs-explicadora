"use client";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface SectionProps extends ComponentProps<"section"> {
  isDefault?: boolean;
  newTitle?: string;
  newDescription?: string;
}

export const Section = ({
  className,
  children,
  isDefault,
  newTitle,
  newDescription,
  ...props
}: SectionProps) => {
  const path = usePathname();

  return (
    <section
      {...props}
      className={twMerge(`py-16 ${path === "/" && "sm:py-32"}`, className)}
    >
      <div className="container flex flex-col gap-10">
        {isDefault && newTitle && newDescription && (
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-title text-2xl sm:text-4xl">{newTitle}</h2>
            <p className="text-secondary">{newDescription}</p>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

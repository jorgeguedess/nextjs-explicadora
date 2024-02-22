import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconChevronRight = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      className={twMerge("size-6", props.className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

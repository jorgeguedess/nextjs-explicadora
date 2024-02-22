import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconClose = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      className={twMerge("size-6", props.className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

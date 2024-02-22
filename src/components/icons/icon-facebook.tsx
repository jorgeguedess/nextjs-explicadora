import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconFacebook = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      className={twMerge("size-6", props.className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_124_144)">
        <path
          d="M21.8008 0H2.19922C1 0 0 1 0 2.19922V21.8008C0 23 1 24 2.19922 24H12V14H9V11H12V8C12 5.5 13 4 16 4H19V7H17.6992C16.8008 7 16 7.80078 16 8.69922V11H20L19.5 14H16V24H21.8008C23 24 24 23 24 21.8008V2.19922C24 1 23 0 21.8008 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_124_144">
          <rect width="100%" height="100%" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

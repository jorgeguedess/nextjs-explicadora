import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconStudy = (props: ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      className={twMerge("size-6", props.className)}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 36.3701V39.0001H28V36.3701C30.6004 37.211 33.3996 37.211 36 36.3701Z"
        fill="currentColor"
      />
      <path
        d="M16 55C15.2044 55 14.4413 55.3161 13.8787 55.8787C13.3161 56.4413 13 57.2044 13 58V63H16C16 62.7348 16.1054 62.4804 16.2929 62.2929C16.4804 62.1054 16.7348 62 17 62C17.5304 62 18.0391 61.7893 18.4142 61.4142C18.7893 61.0391 19 60.5304 19 60V58C19 57.2044 18.6839 56.4413 18.1213 55.8787C17.5587 55.3161 16.7956 55 16 55Z"
        fill="currentColor"
      />
      <path
        d="M13 46.4399C9.46 50.9999 9.36 54.8199 8 62.9999H11C11 58.4999 10.47 55.8999 13 53.9999V46.4399Z"
        fill="currentColor"
      />
      <path d="M45 46H37V49H45V46Z" fill="currentColor" />
      <path
        d="M49 53.1V41H33V63H44.36C42.76 61.59 43 60 43 58C42.9998 57.2585 43.1646 56.5262 43.4824 55.8562C43.8002 55.1863 44.263 54.5954 44.8373 54.1263C45.4117 53.6573 46.0831 53.3219 46.8031 53.1444C47.523 52.9668 48.2735 52.9517 49 53.1ZM36 51C35.7348 51 35.4804 50.8946 35.2929 50.7071C35.1054 50.5196 35 50.2652 35 50V45.23C35 44.08 35.79 44 36 44H46C46.2652 44 46.5196 44.1054 46.7071 44.2929C46.8946 44.4804 47 44.7348 47 45V50C47 50.2652 46.8946 50.5196 46.7071 50.7071C46.5196 50.8946 46.2652 51 46 51H36Z"
        fill="currentColor"
      />
      <path
        d="M48 55C47.2044 55 46.4413 55.3161 45.8787 55.8787C45.3161 56.4413 45 57.2044 45 58V60C45 60.5304 45.2107 61.0391 45.5858 61.4142C45.9609 61.7893 46.4696 62 47 62C47.2652 62 47.5196 62.1054 47.7071 62.2929C47.8946 62.4804 48 62.7348 48 63H51V58C51 57.2044 50.6839 56.4413 50.1213 55.8787C49.5587 55.3161 48.7956 55 48 55Z"
        fill="currentColor"
      />
      <path
        d="M56 62.9999C54.65 54.8899 54.55 51.0599 51 46.4399V53.9999C51.621 54.4657 52.125 55.0696 52.4721 55.7639C52.8193 56.4582 53 57.2237 53 57.9999V62.9999H56Z"
        fill="currentColor"
      />
      <path
        d="M15 53.1C15.7265 52.9517 16.477 52.9668 17.1969 53.1444C17.9169 53.3219 18.5883 53.6573 19.1627 54.1263C19.737 54.5954 20.1998 55.1863 20.5176 55.8562C20.8354 56.5262 21.0002 57.2585 21 58C21 60 21.24 61.6 19.64 63H31V41H15V53.1Z"
        fill="currentColor"
      />
      <path
        d="M45 19V25H46C46.7956 25 47.5587 24.6839 48.1213 24.1213C48.6839 23.5587 49 22.7956 49 22C49 21.2044 48.6839 20.4413 48.1213 19.8787C47.5587 19.3161 46.7956 19 46 19H45Z"
        fill="currentColor"
      />
      <path
        d="M18 24.9999H19V18.9999C17.81 18.9999 16.86 18.8999 15.88 19.8799C15.461 20.2995 15.1757 20.8338 15.0602 21.4154C14.9446 21.997 15.0041 22.5998 15.2309 23.1476C15.4577 23.6955 15.8419 24.1638 16.3347 24.4935C16.8276 24.8232 17.4071 24.9994 18 24.9999Z"
        fill="currentColor"
      />
      <path
        d="M43 24.0003C43 19.4403 43 15.8903 39.83 12.2803C36.11 14.4203 33.12 14.0003 28.28 14.0003C26.9093 13.9989 25.5684 14.3999 24.4236 15.1537C23.2788 15.9074 22.3804 16.9806 21.84 18.2403C20.78 20.7103 21 19.4403 21 24.0003C20.9858 26.7336 21.9898 29.3743 23.8162 31.4078C25.6427 33.4413 28.1609 34.722 30.88 35.0003H31.25C32.7564 35.1032 34.2678 34.895 35.6902 34.3884C37.1126 33.8819 38.4155 33.088 39.5177 32.0561C40.62 31.0242 41.498 29.7765 42.0971 28.3905C42.6962 27.0046 43.0035 25.5102 43 24.0003ZM27 21.0003C27 21.2655 26.8947 21.5198 26.7071 21.7074C26.5196 21.8949 26.2652 22.0003 26 22.0003C25.7348 22.0003 25.4804 21.8949 25.2929 21.7074C25.1054 21.5198 25 21.2655 25 21.0003V20.0003C25 19.7351 25.1054 19.4807 25.2929 19.2932C25.4804 19.1056 25.7348 19.0003 26 19.0003C26.2652 19.0003 26.5196 19.1056 26.7071 19.2932C26.8947 19.4807 27 19.7351 27 20.0003V21.0003ZM34.83 30.8303C34.4585 31.2022 34.0174 31.4972 33.5318 31.6985C33.0462 31.8998 32.5257 32.0034 32 32.0034C31.4743 32.0034 30.9538 31.8998 30.4682 31.6985C29.9827 31.4972 29.5415 31.2022 29.17 30.8303C28.9817 30.642 28.8759 30.3866 28.8759 30.1203C28.8759 29.854 28.9817 29.5986 29.17 29.4103C29.3583 29.222 29.6137 29.1162 29.88 29.1162C30.1463 29.1162 30.4017 29.222 30.59 29.4103C30.9647 29.7828 31.4716 29.9919 32 29.9919C32.5284 29.9919 33.0353 29.7828 33.41 29.4103C33.5983 29.222 33.8537 29.1162 34.12 29.1162C34.3863 29.1162 34.6417 29.222 34.83 29.4103C35.0183 29.5986 35.1241 29.854 35.1241 30.1203C35.1241 30.3866 35.0183 30.642 34.83 30.8303ZM39 21.0003C39 21.2655 38.8947 21.5198 38.7071 21.7074C38.5196 21.8949 38.2652 22.0003 38 22.0003C37.7348 22.0003 37.4804 21.8949 37.2929 21.7074C37.1054 21.5198 37 21.2655 37 21.0003V20.0003C37 19.7351 37.1054 19.4807 37.2929 19.2932C37.4804 19.1056 37.7348 19.0003 38 19.0003C38.2652 19.0003 38.5196 19.1056 38.7071 19.2932C38.8947 19.4807 39 19.7351 39 20.0003V21.0003Z"
        fill="currentColor"
      />
      <path
        d="M20.22 17.0002C20.9648 15.499 22.1139 14.2356 23.5379 13.3522C24.9619 12.4689 26.6042 12.0006 28.28 12.0002H33.39C38.5 12.0002 39.47 9.08017 40.71 10.2902C42.5592 12.1381 43.8635 14.4597 44.48 17.0002C45.6692 16.8682 46.8729 17.0084 48 17.4102V12.0002C48 9.61323 47.0518 7.32404 45.364 5.63621C43.6761 3.94839 41.3869 3.00017 39 3.00017C35.4 0.610175 32.5 1.00017 28 1.00017C24.8174 1.00017 21.7652 2.26446 19.5147 4.51489C17.2643 6.76533 16 9.81758 16 13.0002V17.4102C17.23 16.8802 18.07 17.0002 20.22 17.0002Z"
        fill="currentColor"
      />
      <path
        d="M19.35 27.0003C18.2167 27.1203 17.0709 26.9801 16 26.5903V39.0003H26V35.5403C24.3431 34.6781 22.8915 33.469 21.7439 31.9953C20.5964 30.5216 19.7799 28.818 19.35 27.0003Z"
        fill="currentColor"
      />
      <path
        d="M48 39.0003V26.5903C46.9296 26.9822 45.7833 27.1224 44.65 27.0003C44.2188 28.8162 43.4017 30.5179 42.2542 31.9898C41.1067 33.4616 39.6558 34.6692 38 35.5303V39.0003H48Z"
        fill="currentColor"
      />
    </svg>
  );
};

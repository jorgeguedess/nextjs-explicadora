declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_USER: string;
    EMAIL_USER_OPTIONAL: string;
    EMAIL_PASSWORD: string;
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    NEXT_PUBLIC_GA_MEASUREMENT_TAG: string;
  }
}

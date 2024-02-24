declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_USER: string;
    EMAIL_USER_OPTIONAL: string;
    EMAIL_PASSWORD: string;
  }
}

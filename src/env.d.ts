/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    OPENAI_API_KEY?: string;
    OPENAI_BASE_URL?: string;
  }
}


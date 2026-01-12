// Augment the NodeJS namespace to include the API_KEY in ProcessEnv.
// This prevents the "Cannot redeclare block-scoped variable 'process'" error
// which occurs when @types/node is present in the project.

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}

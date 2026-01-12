// Augment the NodeJS namespace to include API_KEY in ProcessEnv
// This avoids the "Cannot redeclare block-scoped variable 'process'" error
// by extending the existing type definitions instead of redeclaring the variable.

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string | undefined;
    [key: string]: string | undefined;
  }
}

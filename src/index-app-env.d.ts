/// <reference types="react-scripts" />

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

// declaration.d.ts
declare module '*.scss';

// eslint-disable-next-line no-underscore-dangle
declare module '_env_' {
  const envType: Record<string, string>;
  export default envType;
}

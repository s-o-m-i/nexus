declare module "react-syntax-highlighter" {
  import * as React from "react";

  export interface SyntaxHighlighterProps {
    children?: React.ReactNode;
    language?: string;
    style?: Record<string, unknown>;
    customStyle?: Record<string, unknown>;
    wrapLongLines?: boolean;
  }

  export const Prism: React.ComponentType<SyntaxHighlighterProps>;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const oneDark: Record<string, unknown>;
}

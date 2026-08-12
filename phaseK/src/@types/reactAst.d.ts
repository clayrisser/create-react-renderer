import { ReactNode, Ref } from "react";
import { PublicReplacements, TemplateBuilderOptions } from "@babel/template";
import { Path } from "../types";

// React 19 removed the global JSX namespace, so custom host elements are
// registered by augmenting React's own JSX namespace (which react/jsx-runtime
// re-exports)
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      Ast: {
        ast: Record<string, any>;
        bodyPath?: Path;
        children?: ReactNode;
        parentBodyPath?: Path;
        ref?: Ref<any>;
        scopePath?: Path;
      };
      Expression: {
        bodyPath?: string;
        children?: ReactNode;
        code: string;
        options?: TemplateBuilderOptions;
        ref?: Ref<any>;
        replacements?: PublicReplacements;
      };
      File: {
        ref?: Ref<any>;
        children?: ReactNode;
      };
      Program: {
        ref?: Ref<any>;
      };
      Smart: {
        bodyPath?: Path;
        children?: ReactNode;
        code: string;
        options?: TemplateBuilderOptions;
        parentBodyPath?: Path;
        ref?: Ref<any>;
        replacements?: PublicReplacements;
        scopePath?: Path;
      };
    }
  }
}

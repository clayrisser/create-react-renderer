import { ReactNode, Ref } from "react";

// React 19 removed the global JSX namespace, so custom host elements are
// registered by augmenting React's own JSX namespace (which react/jsx-runtime
// re-exports)
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      File: {
        ref?: Ref<any>;
        children?: ReactNode;
      };
    }
  }
}

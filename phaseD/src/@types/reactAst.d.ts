declare namespace JSX {
  // @ts-ignore
  import { ReactNode, Ref } from 'react';

  interface IntrinsicElements {
    File: {
      ref?: Ref<any>;
      children?: ReactNode;
    };
  }
}

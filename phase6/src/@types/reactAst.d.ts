import { ReactNode, Ref } from 'react';

declare namespace JSX {
  interface IntrinsicElements {
    File: {
      ref?: Ref<any>;
      children?: ReactNode;
    };
  }
}

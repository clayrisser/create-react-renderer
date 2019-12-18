declare namespace JSX {
  // @ts-ignore
  import { ReactNode, Ref } from 'react';

  interface IntrinsicElements {
    Hello: {
      ref?: Ref<any>;
    };
    Howdy: {
      ref?: Ref<any>;
    };
    Wrapper: {
      ref?: Ref<any>;
      children?: ReactNode;
    };
  }
}

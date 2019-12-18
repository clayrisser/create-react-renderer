import { ReactNode, Ref } from 'react';
import template, {
  TemplateBuilderOptions,
  PublicReplacements
} from '@babel/template';
import { Path } from '..';

declare namespace JSX {
  interface IntrinsicElements {
    Ast: {
      ref?: Ref<any>;
    };
    Expression: {
      ref?: Ref<any>;
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

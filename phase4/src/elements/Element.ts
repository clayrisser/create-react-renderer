import _ from 'lodash';
import { ParserOptions } from '@babel/parser';
import { BaseNode, Node, Instance, Props } from '../types';

export interface ElementConstructor {
  new (props?: Props, parserOptions?: ParserOptions): Element;
  propTypes: object;
  defaultProps: Props;
}

export default class Element implements Instance {
  static defaultProps: Props = {};

  static propTypes: object = {};

  node: Node;

  props: Props;

  children: Element[] = [];

  constructor(baseNode: BaseNode | BaseNode[], _props: Props = {}) {
    if (Array.isArray(baseNode)) throw new Error('cannot be array');
    this.node = baseNode;
  }

  appendChild(_child: Element) {}

  removeChild(_child: Element) {}

  commitMount() {}

  commitUpdate(_newProps: Props) {}
}

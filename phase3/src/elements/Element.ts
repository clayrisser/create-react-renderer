import { BaseNode, Node, Instance, Props } from '../types';

export interface ElementConstructor {
  new (props?: Props): Element;
  propTypes: object;
  defaultProps: Props;
}

export default class Element implements Instance {
  static defaultProps: Props = {};

  static propTypes: object = {};

  node: Node;

  props: Props;

  children: Element[] = [];

  constructor(baseNode: BaseNode | BaseNode[], props: Props = {}) {
    this.node = baseNode;
    this.props = props;
  }

  appendChild(_child: Element) {}

  removeChild(_child: Element) {}

  commitMount() {}

  commitUpdate(_newProps: Props) {}
}

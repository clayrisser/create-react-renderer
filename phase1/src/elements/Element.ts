import _ from 'lodash';
import { BaseNode, Node, Instance, Props } from '../types';

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

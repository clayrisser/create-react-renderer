import _ from 'lodash';
import { ParserOptions } from '@babel/parser';
import { BaseNode, Path, Node, Instance, Props } from '../types';
import { flattenPath } from '../util';

export interface IElement {
  new (props?: Props, parserOptions?: ParserOptions): BaseElement;
  propTypes: object;
  defaultProps: Props;
}

export interface Meta {
  bodyPath: Path;
  parentBodyPath: Path | null;
}

export default class BaseElement implements Instance {
  static defaultProps: Props = {};

  static propTypes: object = {};

  node: Node;

  props: Props;

  children: BaseElement[] = [];

  meta: Meta = {
    bodyPath: 'body.body',
    parentBodyPath: null
  };

  getBodyPath(path?: Path | null): string {
    return flattenPath(path || this.meta.bodyPath);
  }

  getBody(
    body: BaseNode | BaseNode[],
    path?: Path | null
  ): BaseNode | BaseNode[] {
    const bodyPath = this.getBodyPath(path);
    if (!bodyPath.length) return body;
    return _.get(body, bodyPath);
  }

  setBody(
    body: BaseNode | BaseNode[],
    value: BaseNode | BaseNode[],
    path?: Path | null
  ): BaseNode | BaseNode[] {
    const bodyPath = this.getBodyPath(path);
    if (!bodyPath.length) return body;
    return _.set(body, bodyPath, value);
  }

  constructor(
    baseNode: BaseNode | BaseNode[],
    props: Props = {},
    meta?: Partial<Meta>
  ) {
    if (Array.isArray(baseNode)) throw new Error('cannot be array');
    if (meta) {
      this.meta = {
        ...this.meta,
        ...meta
      };
    }
    this.node = baseNode;
    this.props = props;
  }

  appendChild(child: BaseElement) {
    const body = this.getBody(this.node, child.meta.parentBodyPath);
    this.children.push(child);
    if (Array.isArray(body)) {
      body.push(child.node);
    } else {
      this.setBody(this.node, child.node, child.meta.parentBodyPath);
    }
  }

  removeChild(child: BaseElement) {
    const body = this.getBody(this.node, child.meta.parentBodyPath);
    if (!body || !Array.isArray(body)) return;
    this.children.splice(this.children.indexOf(child), 1);
    body.splice(body.indexOf(child.node), 1);
  }

  commitMount() {}

  commitUpdate(newProps: Props) {
    this.props = {
      ...this.props,
      ...newProps
    };
  }
}

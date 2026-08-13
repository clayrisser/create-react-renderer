import { Node as BabelNode, Comment, SourceLocation } from "@babel/types";

export interface BaseNode {
  leadingComments?: Comment[] | null;
  innerComments?: Comment[] | null;
  trailingComments?: Comment[] | null;
  start?: number | null;
  end?: number | null;
  loc?: SourceLocation | null;
  type: BabelNode["type"];
}

export interface Options {
  [key: string]: any;
}

export type BundleType = 0 | 1;

export type Type = string;

export type Prop = any;

export type ContextItem = any;

export type HydratableInstance = any;

export type PublicInstance = Instance | TextInstance;

export type HostContext = Context;

export type SuspenseInstance = any;

export type FormInstance = any;

export type TransitionStatus = any;

export type ChildSet = any;

export type TimeoutHandle = any;

export type NoTimeout = any;

export type Path = string | number | DeepArray<string | number>;

export interface Container extends Instance {}

export interface TextInstance extends Instance {}

export interface DeepArray<T> extends Array<T | DeepArray<T>> {}

export interface Props {
  [key: string]: Prop;
}

export interface Instance {
  appendChild(child: Instance | TextInstance): void;
  children: Instance[];
  commitMount(): void;
  commitUpdate(newProps: Props): void;
  node: Node;
  props: Props;
  removeChild(child: Instance | TextInstance): void;
}

export interface Context {
  [key: string]: ContextItem;
}

export interface Node extends BaseNode {
  body?: BaseNode[];
}

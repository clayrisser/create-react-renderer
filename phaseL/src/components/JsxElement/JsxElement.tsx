import { Component, ReactNode, isValidElement } from "react";
import _ from "lodash";
import { JsxAttribute } from "../JsxAttribute";
import { Smart } from "../..";

export interface JsxAttributes {
  [key: string]: ReactNode;
}

export interface JsxElementProps {
  children?: ReactNode | Record<string, any> | number | string;
  name: string;
  attributes?: JsxAttributes;
}

export class JsxElement extends Component<JsxElementProps> {
  renderAttributes() {
    return Object.entries(this.props.attributes ?? {}).map(([key, value]: [string, ReactNode]) => {
      return <JsxAttribute name={key}>{value}</JsxAttribute>;
    });
  }

  renderChildren() {
    // react 19 removed the ref own property from elements, so
    // isValidElement is the reliable way to detect react elements
    if (
      Array.isArray(this.props.children) &&
      this.props.children.length &&
      isValidElement(this.props.children[0])
    ) {
      return this.props.children.map((child: ReactNode | number | string) => {
        return this.renderChild(child);
      });
    }
    return this.renderChild(this.props.children);
  }

  renderChild(child: ReactNode | Record<string, any> | number | string): ReactNode {
    if (_.isNil(child) || ((child as any)?.type as any) === JsxAttribute) {
      return <></>;
    }
    if ((child as any)?.type === JsxElement) {
      return child as ReactNode;
    }
    if (typeof child === "string") {
      return <Smart code={child} scopePath="expression" />;
    }
    if (isValidElement(child)) {
      return (
        <Smart code="<jsx>{}</jsx>" scopePath="expression.children.0" bodyPath="expression">
          {child}
        </Smart>
      );
    }
    if (typeof child === "object") child = JSON.stringify(child);
    const code = `<jsx>{${child}}</jsx>`;
    return <Smart code={code} scopePath="expression.children.0" />;
  }

  render() {
    let code = `<${this.props.name} />`;
    let { children } = this.props;
    if (Array.isArray(children)) {
      const filteredChildren = children.filter((child) => (child as any)?.type !== JsxAttribute);
      if (filteredChildren.length) {
        children = filteredChildren;
      } else {
        children = null;
      }
    } else if ((children as any)?.type === JsxAttribute) {
      children = null;
    }
    if (children) code = `<${this.props.name}></${this.props.name}>`;
    return (
      <Smart code={code} scopePath="expression" bodyPath="children">
        {this.renderAttributes()}
        {this.renderChildren()}
      </Smart>
    );
  }
}

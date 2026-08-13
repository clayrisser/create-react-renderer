import { JsxElement } from "../src";

export interface BodyProps {
  hello?: string;
}

// react 19 removed defaultProps for function components, so components use
// default parameter values instead
export default function Body({ hello = "world" }: BodyProps) {
  return <JsxElement name="Hello">{{ hello }}</JsxElement>;
}

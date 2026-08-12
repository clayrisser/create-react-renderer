import util from "node:util";
import { render } from "../src";

export interface AppProps {
  hello?: string;
  howdy?: string;
}

// react 19 removed defaultProps for function components, so components use
// default parameter values instead (elements get their defaults from the
// BaseElement getProps method)
export function App({
  hello = "const hello = 'austin'",
  howdy = "const howdy = () => 'austin'",
}: AppProps) {
  console.log("PROPS", { hello, howdy });
  return (
    <>
      {hello}
      {howdy}
    </>
  );
}

console.log("======== RECONCILER LIFECYCLE ========");
const renderedOutput = render(<App hello="const hello = 'world'" />);

console.log("\n\n======== RENDERED OUTPUT ========");
console.log(util.inspect(renderedOutput, false, null, true));
console.log("\n\n--------------");

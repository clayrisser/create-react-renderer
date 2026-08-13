import util from "node:util";
import { Hello, Howdy, render } from "../src";

console.log("======== RECONCILER LIFECYCLE ========");
const renderedOutput = render(
  <>
    <Hello />
    <Howdy />
    <Hello />
    <Hello />
  </>,
);

console.log("\n\n======== RENDERED OUTPUT ========");
console.log(util.inspect(renderedOutput, false, null, true));
console.log("\n\n--------------");

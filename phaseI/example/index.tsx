import util from "node:util";
import { Smart, render } from "../src";

console.log("======== RECONCILER LIFECYCLE ========");
const renderedOutput = render(
  <>
    <Smart code="const hello = 'world'" />
    const howdy = () =&gt; 'texas'
  </>,
);

console.log("\n\n======== RENDERED OUTPUT ========");
console.log(util.inspect(renderedOutput, false, null, true));
console.log("\n\n--------------");

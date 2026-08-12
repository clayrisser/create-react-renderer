import { Smart, render } from "../src";

console.log("======== RECONCILER LIFECYCLE ========");
const renderedOutput = await render(
  <>
    <Smart code="const hello = 'world'" />
    const howdy = () =&gt; 'texas'
  </>,
  {
    parserOptions: {
      plugins: ["jsx", "classProperties", "typescript"],
    },
    prettier: {
      singleQuote: true,
    },
  },
);

console.log("\n\n======== RENDERED OUTPUT ========");
console.log(renderedOutput);
console.log("\n\n--------------");

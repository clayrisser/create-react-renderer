import Body from "./Body";
import ReactClassComponent from "./ReactClassComponent";
import ReactFunctionalComponent from "./ReactFunctionalComponent";
import { render } from "../src";

console.log("======== CLASS COMPONENT RECONCILER LIFECYCLE ========");
const renderedClassComponentOutput = await render(
  <ReactClassComponent name="Howdy">
    <Body />
  </ReactClassComponent>,
  {
    parserOptions: {
      plugins: ["jsx", "classProperties", "typescript"],
    },
    prettier: {
      singleQuote: true,
    },
  },
);
console.log("\n\n======== CLASS COMPONENT RENDERED OUTPUT ========");
console.log(renderedClassComponentOutput);

console.log("======== FUNCTIONAL COMPONENT RECONCILER LIFECYCLE ========");
const renderedFunctionalComponentOutput = await render(
  <ReactFunctionalComponent name="Hello">
    <Body />
  </ReactFunctionalComponent>,
  {
    parserOptions: {
      plugins: ["jsx", "classProperties", "typescript"],
    },
    prettier: {
      singleQuote: true,
    },
  },
);
console.log("\n\n======== FUNCTIONAL COMPONENT RENDERED OUTPUT ========");
console.log(renderedFunctionalComponentOutput);

console.log("\n\n--------------");

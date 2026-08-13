import { ReactElement } from "react";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import { BaseElement } from "./elements";
import reconciler from "./reconciler";
import { BaseNode, Options } from "./types";

export function render(element: ReactElement, _options: Options = {}) {
  // create root node
  // this is the interface of the renderer that the react renderer is binding to
  const rootNode: BaseNode = { hello: "world" };

  // create root element
  // think of an element as a react component that is directly bound to the reconciliation lifecycle methods
  // the root element is not created with JSX
  const rootElement = new BaseElement(rootNode);

  // create root fiber
  // react 19 only exposes concurrent roots, so the renderer opts in to
  // ConcurrentRoot and drives the render synchronously below
  const root = reconciler.createContainer(
    rootElement,
    ConcurrentRoot,
    null,
    false,
    null,
    "create_react_renderer_",
    (error: Error) => {
      throw error;
    },
    (error: Error) => console.warn(error),
    (error: Error) => console.warn(error),
    () => undefined,
  );

  // reconcile virtual dom
  // updateContainerSync + flushSyncWork force the render to finish before
  // render() returns (react-reconciler 0.33 schedules work async by default)
  reconciler.updateContainerSync(element, root, null, () => undefined);
  reconciler.flushSyncWork();

  // return rendered result (not required for side effect renderers)
  // in this case the rendered result is the node itself
  return rootElement.node;
}

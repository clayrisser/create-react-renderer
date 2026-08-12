import { ReactElement } from "react";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import { File } from "./elements";
import reconciler from "./reconciler";
import { Options } from "./types";

export function render(element: ReactElement, _options: Options = {}) {
  // create root element
  // a root node is already injected by this element constructor
  const rootElement = new File();

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

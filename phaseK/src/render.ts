import * as t from "@babel/types";
import generator from "@babel/generator";
import prettier, { Options as PrettierOptions } from "prettier";
import { ReactElement } from "react";
import { ConcurrentRoot } from "react-reconciler/constants.js";
import dev from "./dev";
import reconciler from "./reconciler";
import { BundleType, Options } from "./types";
import { File } from "./elements";
import { updateContext } from "./context";

// @babel/generator ships a commonjs default export that some module systems
// surface as { default }, so normalize it to work everywhere
const generate = ((generator as any).default || generator) as typeof generator;

export function renderAst(
  element: ReactElement,
  options: Options = {},
  ast: t.File = t.file(t.program([]), [], []),
): t.File {
  // pass the options around with a context
  updateContext({ parserOptions: options.parserOptions || {} });

  // create root element
  // a root node is already injected by this element constructor
  const rootElement = new File();
  rootElement.node = ast;

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
    (error: Error) => {
      if (dev) console.warn(error);
    },
    (error: Error) => {
      if (dev) console.warn(error);
    },
    () => undefined,
  );

  // reconcile virtual dom
  // updateContainerSync + flushSyncWork force the render to finish before
  // renderAst() returns (react-reconciler 0.33 schedules work async by default)
  reconciler.updateContainerSync(element, root, null, () => undefined);
  reconciler.flushSyncWork();

  // add dev tools support
  reconciler.injectIntoDevTools({
    bundleType: Number(dev) as BundleType,
    rendererPackageName: "create-react-renderer",
    version: "0.1.0",
  });

  // return rendered result (not required for side effect renderers)
  // in this case the rendered result is the node itself
  return rootElement.node as t.File;
}

// prettier 3 formats asynchronously, which makes render async as well
export async function render(
  element: ReactElement,
  options: Options = {},
  ast: t.File = t.file(t.program([]), [], []),
): Promise<string> {
  options = {
    prettier: true,
    ...options,
  };
  const { code } = generate(renderAst(element, options, ast), options.generatorOptions || {});
  if (options.prettier) {
    return prettier.format(code, {
      parser: "babel-ts",
      ...(typeof options.prettier === "boolean" ? {} : (options.prettier as PrettierOptions)),
    });
  }
  return code;
}

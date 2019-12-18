import reconciler from './reconciler';
import { Wrapper } from './elements';
import { Options } from './types';

export function render(jsx: JSX.Element, _options: Options = {}) {
  // create root element
  // a root node is already injected by this element constructor
  const rootElement = new Wrapper();

  // create root fiber
  const root = reconciler.createContainer(rootElement, false, false);

  // reconcile virtual dom
  reconciler.updateContainer(jsx, root, null, () => {});

  // return rendered result (not required for side effect renderers)
  // in this case the rendered result is the node itself
  return rootElement.node;
}

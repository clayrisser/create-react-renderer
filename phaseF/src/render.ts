import reconciler from './reconciler';
import { File } from './elements';
import { Options } from './types';

export function render(jsx: JSX.Element, _options: Options = {}) {
  // create root element
  // a root node is already injected by this element constructor
  const rootElement = new File();

  // create root
  const root = reconciler.createContainer(rootElement, false, false);

  // render
  reconciler.updateContainer(jsx, root, null, () => {});

  // return rendered result (not required for side effect renderers)
  // in this case the rendered result is the node itself
  return rootElement.node;
}

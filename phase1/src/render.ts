import { Element } from './elements';
import Renderer from './reconciler';
import { BaseNode, Options } from './types';

export function render(jsx: JSX.Element, _options: Options = {}) {
  // create root node
  const rootNode: BaseNode = { hello: 'world' };

  // create root element
  const rootElement = new Element(rootNode);

  // create root
  const root = Renderer.createContainer(rootElement, false, false);

  // render
  Renderer.updateContainer(jsx, root, null, () => {});

  // return rendered result (not required for side effect renderers)
  return rootElement.node;
}

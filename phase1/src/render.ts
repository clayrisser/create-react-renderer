import pkg from 'npm-pkg-json';
import Renderer from './reconciler';
import { Container, Options } from './types';

export function render(element: JSX.Element, _options: Options = {}) {
  const root = Renderer.createContainer(
    (null as unknown) as Container,
    false,
    false
  );
  Renderer.updateContainer(element, root, null, () => {});
  Renderer.injectIntoDevTools({
    bundleType: 1,
    rendererPackageName: pkg.name,
    version: pkg.version
  });
  return null;
}

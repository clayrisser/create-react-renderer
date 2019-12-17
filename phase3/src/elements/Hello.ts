import Element from './Element';
import { Props } from '../types';

export default class Hello extends Element {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    super({ hello: 'world' }, props);
  }
}

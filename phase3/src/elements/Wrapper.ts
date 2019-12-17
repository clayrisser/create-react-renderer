import Element from './Element';
import { Props } from '../types';

export default class Wrapper extends Element {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    super({ greetings: [] }, props);
  }

  appendChild(child: Element) {
    this.node.greetings.push(child.node);
  }
}

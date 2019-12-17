import Element from './Element';
import { Props } from '../types';

export default class Howdy extends Element {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    super({ howdy: 'texas' }, props);
  }
}

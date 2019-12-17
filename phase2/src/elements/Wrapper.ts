import Element from './Element';
import { Props } from '../types';

export default class Wrapper extends Element {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    super({ cool: 'beans' }, props);
  }
}

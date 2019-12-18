import t from '@babel/types';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Program extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    super(t.program([]), props);
  }
}

import * as t from '@babel/types';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class File extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    super(t.file(t.program([]), [], []), props);
  }
}

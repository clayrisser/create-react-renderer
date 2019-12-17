import Hello from './Hello';
import Howdy from './Howdy';
import Wrapper from './Wrapper';
import { ElementConstructor } from './Element';

export interface Elements {
  [key: string]: ElementConstructor;
}

export { Hello, Howdy, Wrapper };
export default {
  Hello,
  Howdy,
  Wrapper
} as Elements;

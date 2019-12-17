import File from './File';
import { ElementConstructor } from './Element';

export interface Elements {
  [key: string]: ElementConstructor;
}

export { File };
export default { File } as Elements;

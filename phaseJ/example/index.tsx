import React, { FC } from 'react';
import util from 'util';
import { render } from '../src';

export interface AppProps {
  hello?: string;
  howdy?: string;
}

export const App: FC<AppProps> = (props: AppProps) => {
  console.log('PROPS', props);
  return (
    <>
      {props.hello}
      {props.howdy}
    </>
  );
};
App.defaultProps = {
  hello: "const hello = 'austin'",
  howdy: "const howdy = () => 'austin'"
};

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(<App hello="const hello = 'world'" />);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(util.inspect(renderedOutput, false, null, true));
console.log('\n\n--------------');

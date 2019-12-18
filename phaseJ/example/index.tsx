import React, { FC } from 'react';
import util from 'util';
import { render, Smart } from '../src';

export interface AppProps {
  howdy?: string;
}

export const App: FC<AppProps> = (props: AppProps) => {
  console.log('PROPS', props);
  return (
    <>
      <Smart code="const hello = 'world'" />
      {props.howdy}
    </>
  );
};
App.defaultProps = {
  howdy: "const howdy = () => 'austin'"
};

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(<App />);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(util.inspect(renderedOutput, false, null, true));
console.log('\n\n--------------');

import React from 'react';
import util from 'util';
import { render, Hello, Howdy } from '../src';

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(
  <>
    <Hello />
    <Howdy />
  </>
);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(util.inspect(renderedOutput, false, null, true));
console.log('\n\n--------------');

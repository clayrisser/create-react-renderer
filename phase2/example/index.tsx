import React from 'react';
import { render, Hello, Howdy } from '../src';

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(
  <>
    <Hello />
    <Howdy />
  </>
);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(renderedOutput);
console.log('\n\n--------------');

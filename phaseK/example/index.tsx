import React from 'react';
import { render, Smart } from '../src';

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(
  <>
    <Smart code="const hello = 'world'" />
    const howdy = () => 'texas'
  </>
);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(renderedOutput);
console.log('\n\n--------------');

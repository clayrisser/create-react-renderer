import React from 'react';
import util from 'util';
import { render, Smart } from '../src';

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(
  <>
    <Smart code="const hello = 'world'" />
  </>
);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(util.inspect(renderedOutput, false, null, true));
console.log('\n\n--------------');
